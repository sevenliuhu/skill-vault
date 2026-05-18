/**
 * vault.js — HOMO Skill Vault 加密/解密引擎
 * 闭源C++二进制交付（原型为Node.js，后续重写为C++）
 * 
 * Skill作者: vault pack ./my-skill.skill → my-skill.hvskill
 * 用户: vault install my-skill.hvskill → 解密→验证License→安装
 */
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const VAULT_DIR = process.env.HOMO_VAULT || path.join(process.env.HOME || '/root', '.homo-vault');
const PREFS_FILE = path.join(VAULT_DIR, 'preferences.json');
const KEY_STORE = path.join(VAULT_DIR, 'keys.bin');

// AES-256-GCM encryption
const ALGORITHM = 'aes-256-gcm';
const KEY_LENGTH = 32;
const IV_LENGTH = 16;
const TAG_LENGTH = 16;

// =====================================================
// 核心加密/解密
// =====================================================

function deriveKey(masterKey, salt) {
  return crypto.pbkdf2Sync(masterKey, salt, 100000, KEY_LENGTH, 'sha512');
}

// 加密 skill 目录为 .hvskill 包
function packSkill(skillDir, outputPath, masterKey) {
  const skillName = path.basename(skillDir);
  const salt = crypto.randomBytes(32);
  const key = deriveKey(masterKey, salt);
  const iv = crypto.randomBytes(IV_LENGTH);
  
  // 读取 skill 所有文件
  const files = {};
  function walk(dir, base) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const fullPath = path.join(dir, entry.name);
      const relPath = path.join(base, entry.name);
      if (entry.isDirectory()) walk(fullPath, relPath);
      else files[relPath] = fs.readFileSync(fullPath);
    }
  }
  walk(skillDir, '');
  
  // 构建 manifest
  const manifest = {
    name: skillName,
    version: process.env.HOMO_VAULT_VERSION || '1.0.0',
    author: process.env.HOMO_VAULT_AUTHOR || 'unknown',
    created: new Date().toISOString(),
    files: Object.keys(files).map(f => ({
      path: f,
      hash: crypto.createHash('sha256').update(files[f]).digest('hex')
    })),
    totalFiles: Object.keys(files).length
  };
  
  // 构建可序列化的文件数据
  const fileData = {};
  for (const [k, v] of Object.entries(files)) {
    fileData[k] = v.toString('base64');
  }
  
  // 压缩文件数据JSON
  const compressed = zlib.gzipSync(Buffer.from(JSON.stringify(fileData)));
  
  // 加密
  const cipher = crypto.createCipheriv(ALGORITHM, key, iv);
  const encrypted = Buffer.concat([cipher.update(compressed), cipher.final()]);
  const tag = cipher.getAuthTag();
  
  // 签名manifest
  const signature = crypto.createHmac('sha256', masterKey)
    .update(JSON.stringify(manifest))
    .digest();
  
  // 打包
  const pkg = {
    magic: 'HOVLT',
    version: 1,
    salt: salt.toString('hex'),
    iv: iv.toString('hex'),
    tag: tag.toString('hex'),
    manifest,
    signature: signature.toString('hex'),
    data: encrypted.toString('hex')
  };
  
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, JSON.stringify(pkg, null, 0));
  
  return {
    path: outputPath,
    name: skillName,
    files: manifest.totalFiles,
    size: fs.statSync(outputPath).size
  };
}

// 解密 .hvskill 包
function unpackSkill(pkgPath, outputDir, masterKey) {
  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'));
  
  if (pkg.magic !== 'HOVLT') throw new Error('Invalid skill package format');
  
  const salt = Buffer.from(pkg.salt, 'hex');
  const iv = Buffer.from(pkg.iv, 'hex');
  const tag = Buffer.from(pkg.tag, 'hex');
  const key = deriveKey(masterKey, salt);
  
  // 验证签名
  const expectedSig = crypto.createHmac('sha256', masterKey)
    .update(JSON.stringify(pkg.manifest))
    .digest('hex');
  if (expectedSig !== pkg.signature) throw new Error('Skill package signature mismatch — tampered');
  
  // 解密
  const decipher = crypto.createDecipheriv(ALGORITHM, key, iv);
  decipher.setAuthTag(tag);
  const decrypted = Buffer.concat([
    decipher.update(Buffer.from(pkg.data, 'hex')),
    decipher.final()
  ]);
  
  // 解压
  const decompressed = zlib.gunzipSync(decrypted);
  
  // 恢复文件
  const fileData = JSON.parse(decompressed.toString());
  fs.mkdirSync(outputDir, { recursive: true });
  for (const [filePath, content] of Object.entries(fileData)) {
    const fullPath = path.join(outputDir, filePath);
    fs.mkdirSync(path.dirname(fullPath), { recursive: true });
    fs.writeFileSync(fullPath, Buffer.from(content, 'base64'));
  }
  
  return {
    name: pkg.manifest.name,
    version: pkg.manifest.version,
    files: Object.keys(fileData).length,
    outputDir
  };
}

// =====================================================
// License 验证
// =====================================================

function validateLicense(licenseKey, skillName) {
  // 简单 License 格式: SKILLNAME-XXXX-XXXX
  const parts = licenseKey.split('-');
  if (parts.length < 2) return false;
  
  const expected = crypto.createHash('md5')
    .update(skillName + process.env.HOMO_VAULT_SECRET || 'default-secret')
    .digest('hex')
    .substring(0, 8);
  
  const skillTag = skillName.replace(/[^a-zA-Z0-9]/g, '').toUpperCase();
  return parts[0] === skillTag && parts[1] === expected;
}

// =====================================================
// CLI 入口
// =====================================================

function main() {
  const args = process.argv.slice(2);
  const cmd = args[0];
  
  if (cmd === 'pack') {
    const result = packSkill(args[1], args[2] || `${args[1]}.hvskill`, 
      process.env.HOMO_VAULT_KEY || 'dev-key');
    console.log(`✅ Packed: ${result.name} (${result.files} files, ${(result.size/1024).toFixed(1)}KB)`);
    
  } else if (cmd === 'unpack') {
    const result = unpackSkill(args[1], args[2] || './installed-skill',
      process.env.HOMO_VAULT_KEY || 'dev-key');
    console.log(`✅ Unpacked: ${result.name} v${result.version} → ${result.outputDir}`);
    
  } else if (cmd === 'verify') {
    const ok = validateLicense(args[1], args[2]);
    console.log(ok ? '✅ License valid' : '❌ License invalid');
    
  } else {
    console.log(`
HOMO Skill Vault v0.1.0
Usage:
  vault pack <skill-dir> [output]        — Encrypt skill into .hvskill
  vault unpack <pkg.hvskill> [output-dir] — Decrypt and install
  vault verify <license> <skill-name>     — Validate license
    `);
  }
}

if (require.main === module) main();
module.exports = { packSkill, unpackSkill, validateLicense };
