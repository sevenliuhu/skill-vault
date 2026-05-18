# HOMO Skill Vault 🔐 — AES-256-GCM Skill 加密打包/分发系统

> **加密你的技能。变现你的专业知识。一个加密包，适配任何 AI 智能体框架。**

```
npm install -g homo-skill-vault
vault pack ./my-skill.skill
vault install my-skill.hvskill
```

---

## 产品介绍

**HOMO Skill Vault** 是一个面向 AI 编程智能体（Claude Code、Cursor、Codex CLI、Gemini CLI 等）的 **技能加密打包/解密/安装/License 验证系统**。

### 核心流程

```
Skill 作者                             用户
    │                                    │
    ├─ 编写 Skill (Markdown/Shell)       │
    ├─ vault pack → .hvskill 加密包      │
    │         │                          │
    │         └──────────────────────────┤
    │                                    ├─ vault install → 解密
    │                                    ├─ License 验证
    │                                    └─ 智能体使用 Skill
```

### 技术特性

| 特性 | 详情 |
|------|------|
| 🔒 **加密算法** | AES-256-GCM，军用级加密 |
| 🔑 **密钥派生** | PBKDF2（100,000 次迭代，SHA-512） |
| ✍️ **完整性校验** | HMAC-SHA256 签名，防篡改 |
| 📦 **打包格式** | `.hvskill` — 单文件加密包 |
| 🎫 **License 验证** | 本地离线验证，格式：`SKILLNAME-XXXXXXXX` |
| 🗜️ **压缩** | Gzip 压缩后加密，减少体积 |
| 🔄 **框架无关** | 支持 Claude Code、Cursor、Codex CLI、Gemini CLI 等 |

### 安全架构

CLI 包装器为开源 JS，核心加密引擎为 **闭源 C++ 二进制文件**。所有加密/解密/验证操作均在 C++ 二进制中执行，即使修改 JS 包装器也无法绕过加密保护。

---

## Product Overview (English)

**HOMO Skill Vault** is an encrypted skill packaging, distribution, installation & license validation system for AI coding agents (Claude Code, Cursor, Codex CLI, Gemini CLI, etc.).

### Features

- **AES-256-GCM Encryption** — Military-grade encryption for every skill package
- **PBKDF2 Key Derivation** — 100,000 iterations, SHA-512
- **HMAC-SHA256 Integrity** — Tamper-proof signed manifests
- **`.hvskill` Format** — Single-file encrypted skill package
- **Offline License Validation** — No network required; format: `SKILLNAME-XXXXXXXX`
- **Agent Agnostic** — Works with any agent framework that supports hooks/skills
- **Closed-Source C++ Engine** — Crypto operations run in compiled binary; JS wrapper cannot bypass

### Architecture

```
┌──────────────────────────────────────────────┐
│            Open Source (AGPL v3, JS)           │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐   │
│  │  CLI     │  │  Plugin  │  │  Market  │   │
│  │  Wrapper │  │  Adapter │  │  Listing │   │
│  └────┬─────┘  └────┬─────┘  └────┬─────┘   │
│       └─────────────┼─────────────┘          │
│                     ▼                         │
│           ┌────────────────┐                  │
│           │  Crypto Client │ ← JS entry       │
│           └───────┬────────┘                  │
└───────────────────┼──────────────────────────┘
                    │ IPC
┌───────────────────┼──────────────────────────┐
│  Closed Source    ▼                          │
│  ┌──────────────────────────────────────┐   │
│  │  HOMO Vault Engine (C++ Binary)      │   │
│  │  ├─ AES-256-GCM encrypt/decrypt     │   │
│  │  ├─ PBKDF2 key derivation           │   │
│  │  ├─ HMAC-SHA256 manifest signing    │   │
│  │  ├─ License validation              │   │
│  │  └─ Anti-tamper integrity check     │   │
│  └──────────────────────────────────────┘   │
└──────────────────────────────────────────────┘
```

---

## 价格方案与功能对比 (Pricing & Editions)

| 版本 | Sprout 🌱 (Free) | Key 🔑 ($9.9) | Shield 🛡️ ($29.9) | Fortress 🏰 ($99.9) | Citadel 🏛️ ($299.9) |
|------|:---:|:---:|:---:|:---:|:---:|
| **加密 Skill 数量** | 3 个 | 20 个 | 100 个 | 无限 | 无限 |
| **解密设备数** | 1 台 | 1 台 | 3 台 | 10 台 | 无限 |
| **License 验证** | ❌ | ✅ 基础 | ✅ HMAC | ✅ HMAC+有效期 | ✅ 自定义规则 |
| **商业化售卖** | ❌ 仅学习 | ✅ | ✅ | ✅ | ✅ |
| **C++ 加密引擎** | ✅ | ✅ | ✅ | ✅ | ✅ |
| **PBKDF2 + AES-256-GCM** | ✅ | ✅ | ✅ | ✅ | ✅ |
| **防篡改签名** | ❌ | ✅ | ✅ | ✅ | ✅ |
| **自定义 License 期限** | ❌ | ❌ | ❌ | ✅ | ✅ |
| **C2B 商业授权** | ❌ | ❌ | ❌ | ❌ | ✅ |
| **技术支持** | 社区 | 邮件 48h | 邮件 24h | 优先支持 | SLA 99.5% |
| **引擎更新** | 延迟 1-2 周 | ✅ 实时 | ✅ 实时 | ✅ 实时 | ✅ 优先 |

> 💡 **Sprout 版**用于学习和测试；**Key 版**适合个人开发者；**Shield 版**适合专业创作者；**Fortress 版**适合团队；**Citadel 版**适合企业平台。

### English Edition Comparison

| Feature | Sprout 🌱 (Free) | Key 🔑 ($9.9) | Shield 🛡️ ($29.9) | Fortress 🏰 ($99.9) | Citadel 🏛️ ($299.9) |
|---------|:---:|:---:|:---:|:---:|:---:|
| Encrypted Skills | 3 | 20 | 100 | Unlimited | Unlimited |
| Devices | 1 | 1 | 3 | 10 | Unlimited |
| License Validation | ❌ | ✅ Basic | ✅ HMAC | ✅ HMAC+Expiry | ✅ Custom |
| Commercial Use | ❌ Learn only | ✅ | ✅ | ✅ | ✅ |
| C++ Engine | ✅ | ✅ | ✅ | ✅ | ✅ |
| AES-256-GCM + PBKDF2 | ✅ | ✅ | ✅ | ✅ | ✅ |
| Anti-Tamper Signatures | ❌ | ✅ | ✅ | ✅ | ✅ |
| Custom License Expiry | ❌ | ❌ | ❌ | ✅ | ✅ |
| C2B License | ❌ | ❌ | ❌ | ❌ | ✅ |
| Support | Community | Email 48h | Email 24h | Priority | SLA 99.5% |
| Engine Updates | Delayed 1-2wk | Real-time | Real-time | Real-time | Priority |

---

## 快速开始 (Quick Start)

```bash
# 全局安装
npm install -g homo-skill-vault

# 加密打包一个 Skill 目录
vault pack ./my-skill

# 安装解密 Skill
vault install my-skill.hvskill

# 验证 License
vault verify LICENSE_KEY skill-name
```

### 安装要求 (Requirements)

- Node.js 18+
- 支持的操作系统: Linux / macOS / Windows (WSL2)
- C++ 加密引擎自动下载（首次运行）

---

## 如何购买 (How to Buy)

### 步骤 (Steps)

1. **选择版本** — 根据需求选择 Sprout / Key / Shield / Fortress / Citadel
2. **联系我们** — 通过微信或邮箱下单
3. **付款** — 支持微信支付 / 支付宝 / PayPal
4. **激活** — 收到 License Key 后运行 `vault activate <your-key>`

### 联系方式 (Contact)

| 方式 | 信息 |
|------|------|
| 💬 **微信 (WeChat)** | `sevenliuhu` |
| 📧 **邮箱 (Email)** | [homo-ai@outlook.com](mailto:homo-ai@outlook.com) |

**扫码添加微信 / Scan to add WeChat:**

```
[QR 码占位符 — 请用真实二维码替换]
[QR Code Placeholder — Replace with your actual QR code image]
```

> 💡 **海外用户**：通过 PayPal 付款至 `homo-ai@outlook.com`，发送交易流水号至邮箱，24 小时内发放 License Key。
>
> 💡 **Overseas**: Send payment to `homo-ai@outlook.com` via PayPal, then email the transaction ID. Key issued within 24 hours.

---

## FAQ

**Q: Sprout 版可以商业化吗？**
不可以。Sprout 仅限个人学习。商业分发需要 Key 及以上版本。

**Q: 支持哪些 AI 智能体框架？**
Claude Code、Cursor、Codex CLI、Gemini CLI、Superpowers，以及任何支持 hooks/skills 的框架。

**Q: 我能售卖我创建的 Skill 吗？**
可以，持有 Key 及以上版本即可。加密后分发 `.hvskill` 文件，用户需要自己的 License 解密。

**Q: 加密真的无法破解吗？**
AES-256-GCM + PBKDF2 100,000 次迭代，业界标准用于机密数据加密。核心加密引擎为闭源 C++ 二进制，无法通过修改 JS 绕过。

**Q: 购买后没收到 Key？**
检查垃圾邮件箱。或通过微信联系我们，通常 5 分钟内处理。

**Q: Can I use Sprout edition commercially?**
No. Sprout is for learning only. Commercial distribution requires Key+.

**Q: Which agent frameworks are supported?**
Claude Code, Codex CLI, Cursor, Gemini CLI, OpenCode, Superpowers, and any agent that supports hooks/skills.

**Q: Is the encryption really unbreakable?**
AES-256-GCM with PBKDF2 key derivation (100K iterations). Industry standard for classified data. The core engine is closed-source C++ — modifying the JS wrapper cannot bypass encryption.

---

## License

- **CLI 包装器 / Tests**: **AGPL v3.0** — see [LICENSE](./LICENSE)
- **Vault Engine (C++ 二进制)**: **Proprietary** (闭源，不包含在本仓库中)

This program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

---

## 团队 (Team)

**HOMO AI** — 专注 AI 智能体技能生态。我们日常使用 Claude Code、Cursor 和 Superpowers。Skill Vault 旨在保护技能创作者的知识产权。

---

*Protect your skills. Monetize your expertise. Built by HOMO AI.*
