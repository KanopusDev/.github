<div align="center">

<a href="https://kanopus.org"><img src="https://img.shields.io/badge/kanopus.org-verified-1a6bff?style=for-the-badge&logo=checkmarx&logoColor=white" alt="Verified Domain" /></a>
<a href="https://github.com/vrip7"><img src="https://img.shields.io/badge/Part_of-VRIP7_Group-0f1a3d?style=for-the-badge" alt="VRIP7 Group" /></a>
<a href="https://github.com/sponsors/KanopusDev"><img src="https://img.shields.io/badge/Sponsor-Kanopus-ea4aaa?style=for-the-badge&logo=githubsponsors&logoColor=white" alt="Sponsor" /></a>

# Kanopus Development

**Open-Source AI Tooling & Developer Infrastructure**

*The technology arm of [VRIP7 Group](https://github.com/vrip7) — building intelligent, open-source developer tools from India.*

[Website](https://kanopus.org) · [Discussions](https://github.com/orgs/KanopusDev/discussions) · [Sponsor Us](https://github.com/sponsors/KanopusDev)

---

</div>

## Who We Are

Kanopus is [VRIP7](https://github.com/vrip7)'s open-source AI tooling organization. We build developer infrastructure, intelligent automation frameworks, and enterprise-grade tools — all open source, all built in public.

While VRIP7 operates across six business verticals (IT hardware, real estate, defence R&D, hospitality, angel investment, and consultancy), Kanopus is where the code lives. Every framework, every tool, every experiment — shipped here.

## Projects

### Active

| Project | What It Does | Stack |
|---------|-------------|-------|
| [**Kale**](https://github.com/KanopusDev/Kale) | Enterprise email API — send via your own SMTP with template management, API keys, and analytics | `Python` `FastAPI` |
| [**Castor**](https://github.com/vrip7/Castor) | Production auth API with E2E encryption and comprehensive security measures | `Python` |
| [**MindWall**](https://github.com/vrip7/MindWall) | Self-hosted cybersecurity platform — detects psychological manipulation in communications using local LLMs | `Python` |

### In Development

| Project | Status | Description |
|---------|--------|-------------|
| **Sileru** | 🔨 Active | SaaS platform — branded link shortening, dynamic QR codes, cross-channel click analytics, and email campaigns |
| **Asterion** | 🔨 Active | Overhauled Stable Diffusion XL frontend — FastAPI backend + React UI replacing Gradio |

### Heritage Projects

These projects established Kanopus and contributed to the AI/ML open-source ecosystem. Some have been archived or folded into newer work:

| Project | What It Was |
|---------|-------------|
| **Canopus** | AI-powered voice assistant for developers — speech recognition, code navigation, semantic search |
| **Aoede** | Multi-agent AI coding team — 6 specialized agents collaborating on code generation |
| **Nova** | AI-enhanced search engine with BERT embeddings, web crawling, and Prometheus monitoring |
| **Aurelis** | Enterprise AI coding assistant — multi-modal processing with GPT-4, DeepSeek R1, and O3-mini |
| **Polris** | Code generation transformer with memory-optimized training for CPU environments |

## Tech DNA

```
Languages       Python · TypeScript · React
Backend         FastAPI · uvicorn · Celery
AI/ML           PyTorch · LangGraph · Qdrant · Local LLMs · SDXL
Data            PostgreSQL · Redis · SQLAlchemy
Auth            Argon2id · AES-256-GCM · SHA-256 · JWT (in-memory only)
Infra           Docker · uv (Python) · pnpm (JS) · Vite
```

## Architecture Principles

We enforce these across every Kanopus project:

- **JWT stored in Zustand memory only** — never `localStorage`
- **Argon2id** for password hashing, always
- **AES-256-GCM** for secrets at rest
- **SHA-256** for API key storage with prefixed keys
- **Integer cents** for all monetary values
- **`uv`** for Python, **`pnpm`** for JavaScript — no exceptions
- **HMAC `compare_digest()`** first in webhook handlers
- **Celery idempotency guard** as first line of every task

## Contributing

We welcome contributions at every level — from typo fixes to core feature development.

1. Check [open issues](https://github.com/orgs/KanopusDev/repositories) across our repos
2. Join the [Discussions](https://github.com/orgs/KanopusDev/discussions) to propose ideas
3. Fork → branch → PR. We review everything.

No CLA required. MIT licensed unless stated otherwise.

## Connect

| | |
|---|---|
| 🌐 Kanopus | [kanopus.org](https://kanopus.org) |
| 🏢 VRIP7 Group | [github.com/vrip7](https://github.com/vrip7) |
| 💼 LinkedIn | [company/vrip7](https://linkedin.com/company/vrip7) |
| 🐦 X/Twitter | [@_vrip7](https://x.com/_vrip7) |
| 📸 Instagram | [@_vrip7](https://instagram.com/_vrip7) |
| 📧 Email | [support@vrip7.com](mailto:support@vrip7.com) |

---

<div align="center">

**Built by [VRIP7 Group](https://github.com/vrip7) from Ujjain, India.**

<sub>Open source isn't a strategy. It's a conviction.</sub>

</div>
