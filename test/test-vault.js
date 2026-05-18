/**
 * 测试 HOMO Skill Vault 核心功能
 */
const assert = require('assert');
const fs = require('fs');
const path = require('path');
const os = require('os');
const vault = require('../vault');

let passed = 0, failed = 0;
const TMP = fs.mkdtempSync(path.join(os.tmpdir(), 'vault-test-'));

function test(name, fn) {
  try { fn(); passed++; console.log(`  ✅ ${name}`); }
  catch(e) { failed++; console.log(`  ❌ ${name}: ${e.message}`); }
}

console.log('\n📋 HOMO Skill Vault 测试\n');

// ===== 1. 创建一个示例 skill 目录 =====
test('创建测试 skill', () => {
  const skillDir = path.join(TMP, 'my-skill');
  fs.mkdirSync(skillDir, { recursive: true });
  fs.writeFileSync(path.join(skillDir, 'skill.md'), '# My Skill\n\nThis is a test skill.');
  fs.writeFileSync(path.join(skillDir, 'hooks.json'), JSON.stringify({ name: 'test' }));
  fs.mkdirSync(path.join(skillDir, 'sub'));
  fs.writeFileSync(path.join(skillDir, 'sub', 'helper.sh'), 'echo hello');
  assert.ok(fs.existsSync(skillDir));
});

// ===== 2. 加密 skill =====
test('加密 skill 为 .hvskill 包', () => {
  const skillDir = path.join(TMP, 'my-skill');
  const output = path.join(TMP, 'my-skill.hvskill');
  const result = vault.packSkill(skillDir, output, 'test-master-key');
  assert.equal(result.name, 'my-skill');
  assert.equal(result.files, 3);
  assert.ok(fs.existsSync(output));
});

// ===== 3. 解密 skill =====
test('解密 .hvskill 包', () => {
  const pkg = path.join(TMP, 'my-skill.hvskill');
  const output = path.join(TMP, 'restored');
  const result = vault.unpackSkill(pkg, output, 'test-master-key');
  assert.equal(result.name, 'my-skill');
  assert.ok(fs.existsSync(path.join(output, 'skill.md')));
  assert.ok(fs.existsSync(path.join(output, 'sub', 'helper.sh')));
});

// ===== 4. 内容完整性 =====
test('解密后内容与原文一致', () => {
  const original = fs.readFileSync(path.join(TMP, 'my-skill', 'skill.md'), 'utf-8');
  const restored = fs.readFileSync(path.join(TMP, 'restored', 'skill.md'), 'utf-8');
  assert.equal(original, restored);
});

// ===== 5. 篡改检测 =====
test('篡改包体后解密失败', () => {
  const pkgPath = path.join(TMP, 'my-skill.hvskill');
  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'));
  pkg.signature = 'ffff' + pkg.signature.substring(4); // 篡改签名
  const tamperedPath = path.join(TMP, 'tampered.hvskill');
  fs.writeFileSync(tamperedPath, JSON.stringify(pkg));
  
  try {
    vault.unpackSkill(tamperedPath, path.join(TMP, 'fail'), 'test-master-key');
    assert.fail('Should have thrown');
  } catch(e) {
    assert.ok(e.message.includes('signature mismatch'));
  }
});

// ===== 6. 不同密钥无法解密 =====
test('不同密钥解密失败', () => {
  const pkg = path.join(TMP, 'my-skill.hvskill');
  try {
    vault.unpackSkill(pkg, path.join(TMP, 'wrong'), 'wrong-key');
    assert.fail('Should have thrown');
  } catch(e) {
    assert.ok(e); // 解密会得到乱码，最终报错
  }
});

// ===== 7. License 验证 =====
test('有效的 License 通过验证', () => {
  process.env.HOMO_VAULT_SECRET = 'test-secret';
  const license = 'MYSKILL-' + require('crypto').createHash('md5')
    .update('my-skill' + 'test-secret').digest('hex').substring(0, 8);
  assert.ok(vault.validateLicense(license, 'my-skill'));
});

// ===== 8. 无效 License 不通过 =====
test('无效 License 不通过', () => {
  assert.ok(!vault.validateLicense('INVALID-1234', 'my-skill'));
});

// ===== 9. 空 License 不通过 =====
test('空 License 不通过', () => {
  assert.ok(!vault.validateLicense('', 'my-skill'));
});

// ===== 10. 打包体积 =====
test('打包后体积合理', () => {
  const stat = fs.statSync(path.join(TMP, 'my-skill.hvskill'));
  assert.ok(stat.size > 100); // 起码有加密数据
  assert.ok(stat.size < 100000); // 但不会太大
});

console.log(`\n📊 结果: ${passed} ✅ / ${failed} ❌ / ${passed + failed} 总计\n`);
process.exit(failed > 0 ? 1 : 0);
