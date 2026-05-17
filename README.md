# Hermes Mobile

**A premium, native iOS experience for Hermes AI agents**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Swift](https://img.shields.io/badge/Swift-5.9-orange.svg)](https://swift.org)
[![Tailscale](https://img.shields.io/badge/Tailscale-Required-green.svg)](https://tailscale.com)

Hermes Mobile gives you a Claude-Code-like interface on your iPhone: streaming chat, live file diffs, an embedded terminal, and full visibility into every sub-agent action — all connected securely over Tailscale to your Mac.

No cloud. No public exposure. Fully self-hosted.

## Features

- **Streaming Chat** — Real-time responses with tool call cards
- **Live Activity Feed** — See which sub-agent is working and what file it's touching
- **Embedded Terminal** — SwiftTerm-powered, not a web view
- **File Explorer** — Git-aware with syntax highlighting and live pulses
- **Memory Context** — Agent profiles and wiki vault at a glance
- **Secure by Design** — Tailscale-only binding + single API key

## Architecture

```
iPhone (SwiftUI) 
   ↓ Tailscale
Mac Bridge (Bun + Hono)
   ↓ Local
Hermes Orchestrator + Wiki Vault
```

Full details in `docs/architecture.md`.

## Quick Start

(Coming in v0.1 — setup guide will be in docs/setup.md)

## Development

See `CONTRIBUTING.md` for how to contribute.

## Contributing

We welcome contributions! Please read `CONTRIBUTING.md` and open an issue or PR using our templates.

## License

MIT © Yonis

---

*Built as part of the Hermes ecosystem. Self-hosted. Open-source. Designed for power users who want to stay in the loop.*
