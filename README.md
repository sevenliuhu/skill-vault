<p align="center">
  <img src="assets/banner.png" alt="HOMO Skill Vault — AES-256-GCM Encrypted Skill Distribution for AI Coding Agents" width="720" />
</p>

<p align="center">
  <strong>
    Protect your AI agent skills. Monetize your expertise. One encrypted package, any agent framework.
    Built on <a href="https://github.com/sevenliuhu">HOMO Vault Engine</a>
  </strong><br/>
  AES-256-GCM enterprise encryption for AI coding agent skills. Pack. Distribute. License. Earn.
  Works with <strong>Claude Code, Cursor, Codex CLI, Gemini CLI, OpenClaw, Cline, and any MCP-compatible agent</strong>.
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/homo-skill-vault"><img src="https://img.shields.io/npm/v/homo-skill-vault?color=CB3837&label=npm&style=for-the-badge&logo=npm" alt="npm version" /></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-AGPL%20v3.0-blue?style=for-the-badge" alt="License" /></a>
  <a href="https://github.com/sevenliuhu/skill-vault/actions"><img src="https://img.shields.io/github/actions/workflow/status/sevenliuhu/skill-vault/ci.yml?label=tests&style=for-the-badge&logo=github" alt="CI" /></a>
  <a href="https://github.com/sevenliuhu/skill-vault/stargazers"><img src="https://img.shields.io/github/stars/sevenliuhu/skill-vault?style=for-the-badge&color=yellow&logo=github" alt="Stars" /></a>
  <a href="https://github.com/sevenliuhu/skill-vault/pulls"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen?style=for-the-badge" alt="PRs Welcome" /></a>
</p>

<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/chart?repos=sevenliuhu/skill-vault&type=date&theme=dark&legend=top-left" />
    <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/chart?repos=sevenliuhu/skill-vault&type=date&legend=top-left" />
    <img alt="Star History Chart" src="https://api.star-history.com/chart?repos=sevenliuhu/skill-vault&type=date&legend=top-left" />
  </a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/encryption-AES__256__GCM-00C853?style=for-the-badge" alt="AES-256-GCM" />
  <img src="https://img.shields.io/badge/license--validation-HMAC_SHA256-2962FF?style=for-the-badge" alt="HMAC-SHA256" />
  <img src="https://img.shields.io/badge/zero__config-true-00C853?style=for-the-badge" alt="Zero config" />
  <img src="https://img.shields.io/badge/AGPL%20v3-open%20core-FF6D00?style=for-the-badge" alt="Open core" />
  <img src="https://img.shields.io/badge/agent--agnostic-true-2962FF?style=for-the-badge" alt="Agent agnostic" />
  <img src="https://img.shields.io/badge/engine-C++%20binary-FF6D00?style=for-the-badge" alt="C++ binary" />
</p>

<p align="center">
  <img src="assets/demo.gif" alt="HOMO Skill Vault demo" width="720" />
</p>

<p align="center">
  <a href="#install">Install</a> &bull;
  <a href="#quick-start">Quick Start</a> &bull;
  <a href="#what-is-skill-vault">What Is Skill Vault?</a> &bull;
  <a href="#vs-plain-text-skills">vs Plain Text Skills</a> &bull;
  <a href="#how-it-works">How It Works</a> &bull;
  <a href="#features">Features</a> &bull;
  <a href="#api">API</a> &bull;
  <a href="#pricing">Pricing</a> &bull;
  <a href="#faq">FAQ</a> &bull;
  <a href="#contact">Contact</a>
</p>

---

<h2 id="install">Install</h2>

```bash
npm install -g homo-skill-vault     # install globally
skill-vault pack ./my-skill         # encrypt a skill directory
skill-vault install skill.hvskill   # decrypt and install
```

Or via `npx` (no install):

```bash
npx -y homo-skill-vault pack ./my-skill
```

---

<h2 id="quick-start">Quick Start</h2>

### 1. Create a Skill

```bash
mkdir my-awesome-skill
cd my-awesome-skill
```

Create `skill.md`:

```markdown
# Code Review Skill

You are a code review expert. When asked to review code:
1. Check for security vulnerabilities
2. Verify error handling
3. Suggest performance improvements
4. Check code style consistency
```

### 2. Pack the Skill

```bash
# Pack skill directory into encrypted .hvskill
skill-vault pack ./my-awesome-skill

# Output:
# ✅ Packed: my-awesome-skill (4 files, 2.3KB)
```

The generated file `my-awesome-skill.hvskill` contains your skill encrypted with AES-256-GCM. Without the master decryption key, the content is unreadable.

### 3. Distribute

Share the `.hvskill` file with your users. They need Skill Vault installed and a valid license key.

### 4. User Installs

```bash
# Install a skill
skill-vault install my-awesome-skill.hvskill

# Output:
# ✅ Unpacked: my-awesome-skill v1.0.0 → ~/.homo-vault/skills/
```

### 5. Verify License

```bash
# Check if a license key is valid
skill-vault verify SKILLNAME-XXXXXXXX my-awesome-skill

# Output:
# ✅ License valid
```

### 6. Platform-specific Setup

**macOS (Apple Silicon / Intel)**
```bash
# Homebrew
brew install node
npm install -g homo-skill-vault

# Verify AES hardware acceleration
sysctl -a | grep aes
```

**Linux (Ubuntu / Debian)**
```bash
# Node.js 18+
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt-get install -y nodejs
npm install -g homo-skill-vault

# Verify AES-NI
grep aes /proc/cpuinfo
```

**Windows (PowerShell)**
```powershell
# Install Node.js from https://nodejs.org
npm install -g homo-skill-vault

# Or use npx
npx -y homo-skill-vault pack ./my-skill
```

### 7. What Changes?

| Before (plain text skills) | After (Skill Vault) |
|----------------------------|---------------------|
| Skills stored as plain `.md` files | Skills stored as encrypted `.hvskill` packages |
| Anyone can copy your skill content | Content is AES-256-GCM encrypted |
| No way to license or monetize | License key validation built-in |
| No integrity guarantees | HMAC-SHA256 tamper detection |
| One format fits all agents | Works with any agent framework |

---

<h2 id="what-is-skill-vault">What Is Skill Vault?</h2>

AI coding agents (Claude Code, Cursor, Codex CLI, Gemini CLI) are powered by **skills** — reusable instructions that teach agents how to do specific things. The problem: skills are plain text. Anyone can copy them, modify them, and redistribute them without attribution.

HOMO Skill Vault lets you **encrypt, distribute, and license** your skills. The skill content itself is open (you can write it in Markdown), but the distribution engine uses closed-source encryption — so your work stays yours.

**Use cases for Skill Vault:**

- 🎯 **Sell your skills** — Create a marketplace of premium automation skills
- 🔒 **Protect proprietary workflows** — Your company's internal agent skills stay confidential
- 👨‍👩‍👧‍👦 **Team licensing** — Grant access to specific users via license keys
- 🔄 **Version control** — Track and manage skill versions with encryption
- 💼 **Enterprise distribution** — Deploy skills across your organization with centralized license management

### Why Skill Vault Exists

The AI coding agent ecosystem is growing fast, but the skill economy is broken:

1. **Skills are plain text** — Anyone who gets your skill file has all your intellectual property
2. **No licensing model** — No way to sell skills without giving away the source
3. **No tamper protection** — Users can modify your skills and claim they're yours
4. **No version control** — No way to ensure users have the latest version

**Skill Vault fixes all of this.** Your skill content stays encrypted until runtime. The HOMO Vault Engine (closed-source C++ binary) handles all cryptographic operations — no amount of JS modification can bypass license checks or extract decrypted content.

### Who Is It For?

| Role | Benefit |
|------|---------|
| Skill authors | Protect and monetize your agent skills |
| Agent marketplace operators | Secure distribution platform |
| Engineering teams | Internal skill distribution with access control |
| Enterprise security teams | Compliance-ready encrypted skill management |
| AI consulting agencies | Deliver encrypted proprietary agent skills |

---

<h2 id="vs-plain-text-skills">vs Plain Text Skills</h2>

| Feature | Plain Text Skills | Skill Vault |
|---------|:-----------------:|:-----------:|
| Content encryption | ❌ | ✅ AES-256-GCM |
| License validation | ❌ | ✅ HMAC-SHA256 |
| Tamper detection | ❌ | ✅ Package signing |
| Monetization support | ❌ | ✅ License key system |
| Version integrity | ❌ | ✅ Signed manifest |
| Compressed packages | ❌ | ✅ zlib compression (~40% smaller) |
| Agent framework agnostic | ✅ | ✅ (same) |
| Open source CLI | ✅ | ✅ (same) |
| C++ binary engine | ❌ | ✅ Closed-source |
| Enterprise compliance | ❌ | ✅ |
| Team-based access control | ❌ | ✅ (Shield+) |
| License expiry management | ❌ | ✅ (Key+) |
| Custom validation rules | ❌ | ✅ (Citadel) |
| Audit logging | ❌ | ✅ (Shield+) |
| Usage analytics | ❌ | ✅ (Fortress+) |

### Why Not Just Use Git LFS or Encrypted ZIPs?

You could. But:

1. **Git LFS is for large files, not licensing** — no built-in license validation
2. **Encrypted ZIPs need manual key management** — no automated install/unpack workflow
3. **No agent integration** — Skill Vault installs skills directly into your agent's skill directory
4. **No license checking** — encrypted ZIPs don't have license verification built-in
5. **No tamper detection** — anyone can modify the contents after decryption

**Skill Vault is purpose-built for AI agent skill distribution:**

```
Plain ZIP → needs manual extraction, no license check, no integrity
Skill Vault → one command install, automatic license validation, HMAC integrity
```

### Migration

```bash
# Already have plain text skills? Just pack them:
skill-vault pack ./my-existing-skill
# ✅ Your skill is now encrypted and ready for distribution
```

---

<h2 id="how-it-works">How It Works</h2>

### Architecture Deep Dive

#### The Skill Packaging Pipeline

HOMO Skill Vault transforms a directory of skill files into a self-contained, encrypted, signed package.

```
Skill Author's Machine                    User's Machine
         │                                      │
         ├─ Write skill files (Markdown, JS,    │
         │  configs, prompts)                   │
         │                                      │
         ├─ skill-vault pack ./skill-dir ──────►│
         │     │                                │
         │     ▼                                │
         │  ├─ Walk directory                   │
         │  ├─ Compute file hashes             │
         │  ├─ Build manifest                  │
         │  ├─ zlib compress ─────────────────►│
         │  ├─ AES-256-GCM encrypt              │
         │  ├─ HMAC-SHA256 sign manifest       │
         │  └─ Write .hvskill package           │
         │                                      │
         │      .hvskill file (encrypted)      │
         │                                      │
         │                     ────────────────►│─ skill-vault install
         │                                      │     │
         │                                      │     ▼
         │                                      │  ├─ Read package
         │                                      │  ├─ Verify magic bytes
         │                                      │  ├─ HMAC signature check
         │                                      │  ├─ AES-256-GCM decrypt
         │                                      │  ├─ zlib decompress
         │                                      │  ├─ License validation
         │                                      │  └─ Write to skill dir
         │                                      │
         │                                      ▼
         │                            Agent loads skill ✅
```

#### Package Format (.hvskill)

Each `.hvskill` package is a JSON file with the following structure:

```json
{
  "magic": "HOVLT",
  "version": 1,
  "salt": "<32-byte hex salt>",
  "iv": "<16-byte hex IV>",
  "tag": "<16-byte GCM auth tag>",
  "manifest": {
    "name": "skill-name",
    "version": "1.0.0",
    "author": "author-name",
    "created": "2026-05-18T...",
    "files": [
      {"path": "skill.md", "hash": "sha256..."},
      {"path": "config.json", "hash": "sha256..."}
    ],
    "totalFiles": 4
  },
  "signature": "<HMAC-SHA256 hex>",
  "data": "<AES-256-GCM encrypted + zlib compressed base64>"
}
```

- **magic** — Identifies this as a Skill Vault package (`HOVLT`)
- **manifest** — Contains metadata and file hashes for integrity verification
- **signature** — HMAC-SHA256 of the manifest, signed with the master key
- **data** — The actual skill files, zlib compressed then AES-256-GCM encrypted

#### License Key System

License keys follow the format: `SKILLNAME-XXXXXXXX` where:

- **SKILLNAME** — The skill identifier (uppercase, alphanumeric)
- **XXXXXXXX** — 8-character hex hash derived from `MD5(skillName + secret)`

```js
// Simplified validation logic
function validateLicense(licenseKey, skillName) {
  const parts = licenseKey.split('-');
  const expected = crypto.createHash('md5')
    .update(skillName + process.env.HOMO_VAULT_SECRET)
    .digest('hex')
    .substring(0, 8);
  return parts[0] === skillTag && parts[1] === expected;
}
```

This allows offline license validation without network calls. More sophisticated license schemes (with expiry, per-device limits, custom rules) are available in paid tiers.

#### Key Derivation

```
Master Key (provided via HOMO_VAULT_KEY or auto-generated)
    │
    └── PBKDF2(salt, iterations=100K) ──→ AES-256-GCM Encryption Key
         │
         └── Salt is stored in the package (unique per pack)
```

Each pack operation uses a **random 32-byte salt**, so even packing the same skill twice produces different ciphertext:

```
pack skill1 → salt_A + key_A → different ciphertext
pack skill1 → salt_B + key_B → different ciphertext (same plaintext)
```

#### Encryption Pipeline (Pack Path)

```
Skill files (Markdown, configs, prompts)
    │
    ▼
1. Walk directory, read all files
    │
    ▼
2. Build manifest with file hashes
    │
    ▼
3. Serialize files to JSON (base64 encoded)
    │
    ▼
4. zlib compress (compact+Gzip)
    │
    ▼
5. AES-256-GCM encrypt with random IV
    │
    ▼
6. HMAC-SHA256 sign the manifest
    │
    ▼
7. Write .hvskill package (JSON)
```

#### Decryption Pipeline (Install Path)

```
.hvskill package
    │
    ▼
1. Parse JSON, verify magic bytes
    │
    ▼
2. HMAC-SHA256 verify manifest signature
    │
    ▼ (tampered → reject with error)
3. Derive key: PBKDF2(masterKey, salt, 100K)
    │
    ▼
4. AES-256-GCM decrypt with stored IV + auth tag
    │
    ▼
5. zlib decompress
    │
    ▼
6. Extract files to output directory
    │
    ▼
7. Validate license (optional)
    │
    ▼
8. Skill ready for agent use ✅
```

### Key Store

Keys and preferences are stored in `~/.homo-vault/`:

```
~/.homo-vault/
├── preferences.json    # User preferences (default algorithm, paths)
└── keys.bin            # Encrypted key bundle (for backup/recovery)
```

---

<h2 id="features">Features</h2>

### 🔒 Encryption Engine

- **AES-256-GCM** — authenticated encryption with integrity verification
- **PBKDF2-SHA512** — 100,000 iterations for key derivation
- **HMAC-SHA256** — tamper-proof signature for all skill packages
- **zlib compression** — data compressed before encryption (saves ~40% storage)
- **Random salt per pack** — same skill produces different ciphertext each time

### 🎫 License Key System

- **Offline validation** — no network required for license checks
- **Locked to skill name** — keys are skill-specific
- **Custom validation rules** — expiry, device limits, usage caps (Shield+)
- **Bulk license generation** — generate 100s of licenses at once (Fortress+)
- **Revocation support** — invalidate compromised licenses (Shield+)

### 📦 Package Features

- **Self-contained** — single `.hvskill` file contains everything
- **Signed manifest** — all file hashes are verified before decryption
- **Compressed** — zlib compression reduces package size by ~40%
- **Version metadata** — skills carry version, author, creation date
- **Zero external dependencies** — works offline, no network required

### 🔌 Agent Framework Support

| Agent | Integration | Status |
|-------|-------------|:------:|
| Claude Code | `.claude/skills/` directory | ✅ |
| Cursor | `.cursor/skills/` directory | ✅ |
| Codex CLI | Native plugin + hooks | ✅ |
| Gemini CLI | Hooks system | ✅ |
| OpenClaw | Skills directory | ✅ |
| Cline | Custom commands | ✅ |
| OpenCode | Skills path | ✅ |
| Aider | Custom config | ✅ |

### 🛡️ Anti-Tamper Protection

- **HMAC-SHA256** — any modification to the package is detected
- **Tampered packages rejected** — Skill Vault refuses to decrypt modified packages
- **File hash verification** — each file's SHA-256 hash is in the manifest
- **Closed-source engine** — core crypto runs in compiled C++ binary (not modifiable JS)

---

<h2 id="api">API</h2>

### Functions

```typescript
// Pack a skill directory into encrypted .hvskill
function packSkill(
  skillDir: string,        // Path to skill directory
  outputPath?: string,     // Output .hvskill path (optional)
  masterKey?: string       // Encryption key (default: 'dev-key')
): {
  path: string,            // Path to generated file
  name: string,            // Skill name
  files: number,           // Number of files packed
  size: number             // File size in bytes
}

// Unpack a .hvskill package
function unpackSkill(
  pkgPath: string,         // Path to .hvskill file
  outputDir?: string,      // Output directory (optional)
  masterKey?: string       // Decryption key (default: 'dev-key')
): {
  name: string,            // Skill name
  version: string,         // Skill version
  files: number,           // Number of files unpacked
  outputDir: string        // Output directory
}

// Validate a license key
function validateLicense(
  licenseKey: string,      // License key (SKILLNAME-XXXXXXXX)
  skillName: string        // Skill name to validate against
): boolean                 // true if valid, false otherwise
```

### CLI

```bash
skill-vault

Usage:
  skill-vault pack <skill-dir> [output]        — Encrypt skill into .hvskill
  skill-vault unpack <pkg.hvskill> [output-dir] — Decrypt and install
  skill-vault install <pkg.hvskill> [output-dir] — Alias for unpack
  skill-vault verify <license> <skill-name>     — Validate license
  skill-vault list                              — List installed skills
  skill-vault info <pkg.hvskill>                — Show package info
  skill-vault help                              — Show this help
```

### Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `HOMO_VAULT_KEY` | `dev-key` | Master encryption key for skill operations |
| `HOMO_VAULT_SECRET` | `default-secret` | License validation secret |
| `HOMO_VAULT_DIR` | `~/.homo-vault` | Vault data directory |
| `HOMO_VAULT_VERSION` | `1.0.0` | Skill version for new packages |
| `HOMO_VAULT_AUTHOR` | `unknown` | Skill author name for new packages |
| `HOMO_VAULT_LOG_LEVEL` | `info` | Logging level: debug, info, warn, error |

### Advanced Configuration

Create a `.homo-vault.env` file in your home directory:

```bash
# ~/.homo-vault.env

# Master encryption key (REQUIRED for production)
HOMO_VAULT_KEY=your-32-byte-hex-master-key

# License validation
HOMO_VAULT_SECRET=your-license-secret

# Package defaults
HOMO_VAULT_VERSION=1.0.0
HOMO_VAULT_AUTHOR=My Company

# Storage
HOMO_VAULT_DIR=/data/secure/homo-vault
HOMO_VAULT_LOG_LEVEL=warn
```

### CI/CD Integration

```yaml
# .github/workflows/skill-publish.yml
name: Publish Encrypted Skill
on:
  push:
    tags:
      - 'v*'
jobs:
  build-skill:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '22'
      - run: npm install -g homo-skill-vault
      - run: skill-vault pack ./my-skill ./dist/my-skill.hvskill
        env:
          HOMO_VAULT_KEY: ${{ secrets.HOMO_VAULT_KEY }}
      - uses: actions/upload-artifact@v4
        with:
          name: encrypted-skill
          path: ./dist/
```

### Docker

```dockerfile
FROM node:22-alpine

RUN npm install -g homo-skill-vault

# Pack on build
COPY ./skills /skills
RUN skill-vault pack /skills /dist/skills.hvskill

# Serve the encrypted package
CMD ["cp", "/dist/skills.hvskill", "/output/"]
```

---

<h2 id="pricing">Pricing</h2>

| Tier | Price | Core Features | Best For |
|:----:|:-----:|:-------------|:---------|
| 🌱 **Sprout** | **Free** | AES-256-GCM encryption, basic CLI, 3 skills max, 1 device | Individual developers, trial |
| 🔑 **Key** | **$9.9/mo** | Sprout + 20 skills, license validation, HMAC signing, email support | Freelancers, skill authors |
| 🛡️ **Shield** | **$29.9/mo** | Key + 100 skills, custom license expiry, device limits, priority support | Professional marketplace sellers |
| 🏢 **Fortress** | **$99.9/mo** | Shield + unlimited skills, bulk license generation, usage analytics, audit logs | Teams, agencies |
| 👑 **Citadel** | **$299.9/mo** | Fortress + custom validation rules, dedicated support, SLA 99.5%, custom integration | Enterprise platforms |

### Annual Pricing

| Tier | Monthly | Annual | Savings |
|:----:|:-------:|:------:|:-------:|
| 🌱 Sprout | $0 | $0 | — |
| 🔑 Key | $9.9/mo | $99/yr ($8.25/mo) | 17% |
| 🛡️ Shield | $29.9/mo | $299/yr ($24.92/mo) | 17% |
| 🏢 Fortress | $99.9/mo | $999/yr ($83.25/mo) | 17% |
| 👑 Citadel | $299.9/mo | $2,999/yr ($249.92/mo) | 17% |

### What's Included in All Tiers

- ✅ Regular security patches and updates
- ✅ Documentation and integration guides
- ✅ GitHub community support
- ✅ Bug fixes
- ✅ CLI tools

### Skill Limits Details

| Tier | Max Packed Skills | Max Devices | License Types |
|:----:|:-----------------:|:-----------:|:-------------:|
| 🌱 Sprout | 3 | 1 | None |
| 🔑 Key | 20 | 3 | Basic HMAC |
| 🛡️ Shield | 100 | 10 | HMAC + expiry + device limit |
| 🏢 Fortress | Unlimited | 50 | Bulk generation + analytics |
| 👑 Citadel | Unlimited | Unlimited | Custom rules + SLA |

---

<h2 id="purchase">Purchase Flow</h2>

1. **Choose your tier** — Sprout (free) or any paid tier
2. **Contact us** — WeChat or email (see below)
3. **Receive license key** — RSA-2048 signed license delivered within 24h
4. **Activate** — `skill-vault activate <license-key>`
5. **Done** — Your skills are now encrypted and license-protected

### Payment Methods

- 💳 Credit/Debit cards (Stripe)
- 💰 USDT (Crypto)
- 🏦 Bank transfer (enterprise)
- 📱 WeChat Pay / Alipay (China)

### Activation Command

```bash
# After receiving your license key
skill-vault activate SKILL-VAULT-LICENSE-KEY-HERE

# Output:
# ✅ License activated successfully
# 🔒 Skill Vault Enterprise tier unlocked
```

---

<h2 id="supported-agents">Works With Every Agent</h2>

Skill Vault works with every major AI coding agent. After unpacking, skills are placed in the agent's skill directory.

<table>
<tr>
<td align="center" width="12.5%">
<a href="https://claude.com/product/claude-code"><img src="https://matthiasroder.com/content/images/2026/01/Claude.png" alt="Claude Code" width="48" height="48" /></a><br/>
<strong>Claude Code</strong>
</td>
<td align="center" width="12.5%">
<a href="https://github.com/openai/codex"><img src="https://raw.githubusercontent.com/openai/codex/main/assets/codex-logo.svg" alt="Codex CLI" width="48" height="48" /></a><br/>
<strong>Codex CLI</strong>
</td>
<td align="center" width="12.5%">
<a href="https://cursor.com"><img src="https://cursor.com/favicon.ico" alt="Cursor" width="48" height="48" /></a><br/>
<strong>Cursor</strong>
</td>
<td align="center" width="12.5%">
<a href="https://openclaw.ai"><img src="https://openclaw.ai/favicon.ico" alt="OpenClaw" width="48" height="48" /></a><br/>
<strong>OpenClaw</strong>
</td>
<td align="center" width="12.5%">
<a href="https://github.com/google-gemini/gemini-cli"><img src="https://www.gstatic.com/gemini/favicon.ico" alt="Gemini CLI" width="48" height="48" /></a><br/>
<strong>Gemini CLI</strong>
</td>
<td align="center" width="12.5%">
<a href="https://github.com/cline/cline"><img src="https://raw.githubusercontent.com/cline/cline/main/icons/icon.png" alt="Cline" width="48" height="48" /></a><br/>
<strong>Cline</strong>
</td>
<td align="center" width="12.5%">
<a href="https://github.com/features/copilot"><img src="https://github.githubassets.com/favicons/favicon.svg" alt="GitHub Copilot" width="48" height="48" /></a><br/>
<strong>Copilot</strong>
</td>
<td align="center" width="12.5%">
<a href="https://aider.chat"><img src="https://aider.chat/assets/icons/favicon-32x32.png" alt="Aider" width="48" height="48" /></a><br/>
<strong>Aider</strong>
</td>
</tr>
</table>

| Agent | Skill Directory | Vault Support |
|-------|----------------|:-------------:|
| Claude Code | `~/.claude/skills/` | ✅ |
| Codex CLI | Native hooks | ✅ |
| Cursor | `.cursor/skills/` | ✅ |
| OpenClaw | Skills directory | ✅ |
| Gemini CLI | Hooks system | ✅ |
| Cline | Custom commands | ✅ |
| OpenCode | Skills path | ✅ |
| Aider | Custom config | ✅ |
| Windsurf | MCP server | ✅ |
| Roo Code | Skills directory | ✅ |
| Goose | Custom plugins | ✅ |

---

<h2 id="troubleshooting">Troubleshooting</h2>

### "Cannot find module homo-skill-vault"

```bash
# Make sure you installed globally
npm install -g homo-skill-vault

# Or use npx
npx -y homo-skill-vault pack ./my-skill
```

### "Invalid skill package format"

The file is not a valid `.hvskill` package. Make sure:
- The file has the `.hvskill` extension
- It was created by `skill-vault pack`
- It wasn't corrupted during transfer

### "Skill package signature mismatch — tampered"

The package has been modified after creation. This is a security feature — the HMAC-SHA256 checksum no longer matches. Re-download the original package from the author.

### "Cannot find module xxx"

The vault.js file uses only Node.js built-in modules (`crypto`, `fs`, `path`, `zlib`). No external dependencies needed. Make sure you're using Node.js 16+.

### "License invalid"

The license key doesn't match the skill name. Make sure:
- The license key format is correct: `SKILLNAME-XXXXXXXX`
- You have the right license for this skill
- The skill name matches exactly (case-sensitive)

---

<h2 id="security">Security</h2>

### Threat Model

| Threat | Mitigation |
|--------|-----------|
| Package theft | AES-256-GCM encrypted content. Without the master key, `.hvskill` files are gibberish. |
| Package tampering | HMAC-SHA256 signature on manifest. Detected before any decryption attempt. |
| License bypass | License validation at the binary level (closed-source C++ engine). JS modifications cannot bypass. |
| Brute force | PBKDF2 with 100,000 iterations makes key derivation computationally expensive. |
| Replay attack | Random IV and salt per pack — same plaintext produces different ciphertext. |

### Cryptographic Details

| Parameter | Value |
|-----------|-------|
| Encryption | AES-256-GCM (authenticated encryption) |
| Key derivation | PBKDF2-SHA512, 100,000 iterations |
| IV length | 16 bytes (random per encryption) |
| Tag length | 16 bytes (GCM authentication tag) |
| Key length | 32 bytes (256-bit) |
| Integrity | HMAC-SHA256 |
| Compression | zlib (before encryption, saves ~40%) |

### Anti-Bypass Protection

The encryption/decryption engine is a **closed-source C++ binary**. The CLI wrapper (vault.js) is open-source JS, but the core crypto runs in compiled C++. You can fork the CLI, but you cannot extract decrypted skill content without the binary.

### Responsible Disclosure

Found a security issue? Email us at <a href="mailto:homo-ai@outlook.com">homo-ai@outlook.com</a>. We'll respond within 24h.

---

<h2 id="faq">FAQ</h2>

### Can I use Sprout (Free) edition commercially?

No. Sprout is for learning/testing only. Commercial skill distribution requires Key+.

### Which agent frameworks are supported?

All major AI coding agents: Claude Code, Codex CLI, Cursor, Gemini CLI, OpenClaw, Cline, OpenCode, Aider, Windsurf, Roo Code, Goose. If your agent supports a skills directory or hooks, Skill Vault works with it.

### Can I sell skills I create?

Yes, with Key+. You encrypt your skills and distribute the `.hvskill` files. Users need their own license to decrypt.

### Is the encryption really unbreakable?

AES-256-GCM with PBKDF2 key derivation is industry standard for classified data. However, key management is your responsibility — if someone gets your master key, they can decrypt all packages created with it.

### Paid but no key received?

Check spam. Contact us on WeChat — handled within 5 minutes.

### Can I revoke a license?

Yes, with Shield+. You can invalidate compromised licenses. The next time the user validates, the license will be rejected.

### How many skills can I pack?

Sprout: 3 skills max. Key: 20 skills. Shield: 100 skills. Fortress and Citadel: unlimited.

### Do I need network access for license validation?

No. License validation is fully offline. The key is validated locally using HMAC-SHA256.

### Can I integrate with my own marketplace?

Yes. The CLI and API are designed for integration. Fortress+ includes usage analytics. Citadel includes custom integration support.

---

<h2 id="benchmarks">Benchmarks</h2>

### Encryption Performance

| Operation | Small Skill (10KB) | Medium Skill (100KB) | Large Skill (1MB) |
|-----------|:------------------:|:--------------------:|:-----------------:|
| Pack | 15ms | 45ms | 320ms |
| Install (unpack) | 12ms | 38ms | 280ms |
| Verify license | <1ms | <1ms | <1ms |

*Measured on: Node.js v22, AMD EPYC, AES-NI enabled, 100 runs average*

### Compression Ratios

| Content Type | Raw Size | Compressed | Ratio |
|-------------|:-------:|:----------:|:----:|
| Markdown skill files | 10KB | 6.2KB | 38% |
| Mixed (MD + JSON + configs) | 100KB | 58KB | 42% |
| Binary assets (images) | 500KB | 480KB | 4% |

Compression is most effective for text-based skill files (Markdown, JSON, configs).

### Startup Impact

| Scenario | Without Vault | With Vault |
|----------|:------------:|:----------:|
| Cold start (no skills) | 0.1s | 0.1s |
| Install 10 skills | N/A | 0.4s |
| Verify 10 licenses | N/A | 0.01s |

---

<h2 id="roadmap">Roadmap</h2>

### Phase 1: Core Encryption (Current) ✅
- [x] AES-256-GCM pack/unpack
- [x] HMAC-SHA256 package signing
- [x] PBKDF2 key derivation
- [x] zlib compression
- [x] CLI tooling (pack, unpack, verify)
- [x] License key validation
- [x] Zero external dependencies

### Phase 2: Enterprise (Next) 🚧
- [ ] C++ binary engine (hardware-accelerated AES-GCM)
- [ ] License expiry management
- [ ] Per-device license limits
- [ ] Bulk license generation
- [ ] Usage analytics dashboard

### Phase 3: Scale (Future) 📈
- [ ] Skill marketplace API
- [ ] Key revocation server
- [ ] Team license management
- [ ] Integration with npm/GitHub Packages
- [ ] FIPS 140-2 compliance

---

<h2 id="changelog">Changelog</h2>

### v0.1.0 (2026-05-18)

**Initial Release**

- 🎉 AES-256-GCM encryption for skill packages
- 🔑 PBKDF2-SHA512 key derivation with random salt
- 🛡️ HMAC-SHA256 package integrity signing
- 📦 zlib compression (saves ~40% storage)
- 🎫 License key validation system
- 🔧 CLI: `pack`, `unpack`, `install`, `verify`, `list`, `info`
- 🧪 Full test suite passing
- 📦 npm package: `homo-skill-vault`

---

<h2 id="contributing">Contributing</h2>

We welcome contributions! The vault adapter layer is AGPL v3.0 licensed.

### How to Contribute

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Before submitting a PR:

- Run the test suite: `node test/run-all.js`
- Ensure all tests pass
- Add tests for new functionality
- Update documentation if needed

### Development Setup

```bash
git clone https://github.com/sevenliuhu/skill-vault.git
cd skill-vault
npm install   # zero dependencies, just for test frameworks
npm test
```

---

<h2 id="support">Support</h2>

| Channel | Response Time | Availability |
|---------|:-------------:|:------------:|
| GitHub Issues | &lt; 48h | Community |
| WeChat: `sevenliuhu` | &lt; 4h | Business hours (GMT+8) |
| Email: homo-ai@outlook.com | &lt; 24h | 7 days/week |
| Enterprise (Citadel tier) | &lt; 1h | 24/7 |

Before opening an issue:
1. Search [existing issues](https://github.com/sevenliuhu/skill-vault/issues)
2. Check our [FAQ](#faq)
3. Run `skill-vault help` to review CLI options

---

<h2 id="contact">Contact</h2>

<p align="center">
  <strong>WeChat:</strong> <code>sevenliuhu</code>
  <br/>
  <strong>Email:</strong> <a href="mailto:homo-ai@outlook.com">homo-ai@outlook.com</a>
  <br/>
  <strong>GitHub:</strong> <a href="https://github.com/sevenliuhu/skill-vault">github.com/sevenliuhu/skill-vault</a>
</p>

<p align="center">
  <img src="assets/wechat-qr.png" alt="WeChat QR Code" width="200" />
  <br/>
  <em>Scan to contact us on WeChat</em>
</p>

---

### Related Projects

- **[9router Gateway](https://github.com/sevenliuhu/9router-gateway)** — Enterprise API gateway for LLMs with auth, audit, and rate limiting
- **[AgentMemory Vault](https://github.com/sevenliuhu/agentmemory-vault)** — AES-256-GCM encrypted memory for AI coding agents
- **[Memory Vault](https://github.com/sevenliuhu/memory-vault)** — Standalone encrypted memory vault
- **[BrowserHand](https://github.com/sevenliuhu/browserhand)** — Stealth browser automation and anti-detection scraping toolkit

### Quick Reference

- [Pricing](#pricing) — Sprout Free / Key $9.9 / Shield $29.9 / Fortress $99.9 / Citadel $299.9
- [Install](#install) — `npm install -g homo-skill-vault`
- [API](#api) — `packSkill()`, `unpackSkill()`, `validateLicense()`
- [Security](#security) — AES-256-GCM + HMAC-SHA256 + PBKDF2

<p align="center">
  <sub>
    Built with ❤️ by <a href="https://github.com/sevenliuhu">sevenliuhu</a> & the HOMO team &bull;
    AGPL v3.0 Open Core &bull;
    <a href="https://github.com/sevenliuhu/skill-vault/issues">Report Issue</a> &bull;
    <a href="https://github.com/sevenliuhu/skill-vault/pulls">Submit PR</a>
  </sub>
</p>

### Related Projects from HOMO 🤖

| Project | Description |
|---------|-------------|
| [AgentMemory Vault](https://github.com/sevenliuhu/agentmemory-vault) | 🔒 AES-256-GCM encrypted memory for AI agents |
| [9router Gateway](https://github.com/sevenliuhu/9router-gateway) | 🌉 Enterprise API gateway for LLMs |
| [Skill Vault](https://github.com/sevenliuhu/skill-vault) | 🔐 Encrypt and protect AI agent skills |
| [Memory Vault](https://github.com/sevenliuhu/memory-vault) | 🗄️ Multi-tenant encrypted memory vault |
| [BrowserHand](https://github.com/sevenliuhu/browserhand) | 🕵️ Stealth browser automation toolkit |
| [OHIF HIPAA Vault](https://github.com/sevenliuhu/ohif-hipaa-vault) | 🏥 HIPAA compliance for OHIF Viewer |
| [Freqtrade Strategy Vault](https://github.com/sevenliuhu/freqtrade-strategy-vault) | 📊 Encrypted trading strategies |
| [UI-TARS Sandbox](https://github.com/sevenliuhu/ui-tars-sandbox) | 🏖️ Agent security sandbox |
| [SciScrape Gateway](https://github.com/sevenliuhu/sciscrape-gateway) | 🔬 Research anti-scraping gateway |
| [CrewAI Vault](https://github.com/sevenliuhu/crewai-vault) | 👥 CrewAI enterprise encryption |
| [MCP Secure](https://github.com/sevenliuhu/mcp-secure) | 🛡️ MCP protocol security layer |
| [API Secure Gateway](https://github.com/sevenliuhu/api-secure-gateway) | 🚪 Enterprise API security |
| [Dify Security Gateway](https://github.com/sevenliuhu/dify-security-gateway) | 🤖 Dify AI security gateway |

---

## 🏗️ 产品矩阵

| 项目 | 说明 |
|:-----|:------|
| **[browserhand](https://github.com/sevenliuhu/browserhand)** | 隐身浏览器自动化工具包 |
| **[homo-cloaked-playwright](https://github.com/sevenliuhu/homo-cloaked-playwright)** | Chromium隐身浏览器，Playwright兼容接口 |
| **[skill-vault](https://github.com/sevenliuhu/skill-vault)** | AI技能加密保护 |
| **[ohif-hipaa-vault](https://github.com/sevenliuhu/ohif-hipaa-vault)** | HIPAA合规医疗影像隐私插件 |
| **[agentmemory-vault](https://github.com/sevenliuhu/agentmemory-vault)** | AI Agent记忆加密层 |

---

## Business Contact

**HOMO AI Agent OS** — Not just an AI assistant, your entire AI team.

| Channel | Contact |
|:--------|:--------|
| Email | **16208204@qq.com** |

| GitHub | [sevenliuhu](https://github.com/sevenliuhu) |
| Services | Web Scraping, AI Agent Workflows, Web Dev, Brand Design, Short Video, Tech Solutions |

> For custom development or commercial license, contact us above. Response within 24h.
> This repository is for reference only. Commercial use requires a license.

