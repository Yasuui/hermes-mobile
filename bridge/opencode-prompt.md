Scaffold a production-ready Bun + Hono Mac-side bridge for Hermes Mobile.

Requirements:
- HTTP server that binds ONLY to the Tailscale interface (use the Tailscale IP or 0.0.0.0 with Tailscale routing).
- On first run, generate a secure API key and store it in .env (use crypto.randomUUID or similar).
- Basic health endpoint.
- Clean project structure with src/, .env.example, package.json (Bun style).
- Good logging and graceful shutdown.
- Use Hono for the framework.
- Make it secure and self-hosted only.
- Include a README for the bridge.
- Follow the overall project: Tailscale-only, no public exposure.

Output the full scaffold in the current directory.
