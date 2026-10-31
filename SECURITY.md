# Security Policy

This portfolio site is maintained by **Save Point Limited**.

## Reporting a problem

If you find a security issue with loganportfolio.savepoint.co.nz or this repository, please email **[support@savepoint.co.nz](mailto:support@savepoint.co.nz)** with the subject line "Security: Portfolio". **Do not** open a public GitHub issue for it. We will acknowledge your report within 2 working days.

## Secrets

The site is static and needs no keys, tokens or environment variables. If any are added, they belong in `portfolio-website/.env.local` locally and in a `.env` file next to `docker-compose.yml` on loganserver for production. Every `.env*` file is git-ignored, so they are never committed.

The site is self-hosted on loganserver behind a local-only Caddy proxy and a Cloudflare Tunnel, so no ports are open to the internet. The server is managed over Tailscale with hardware-key SSH.

## If something leaks

| Secret | What to do |
|---|---|
| GitHub token | Revoke it at github.com/settings/tokens and create a new one |
| Cloudflare Tunnel token | Cloudflare Zero Trust → Networks → Tunnels: rotate the tunnel's token and reinstall `cloudflared` on loganserver |
| An SSH key for loganserver | Remove it from `~/.ssh/authorized_keys` on the server and issue a new one |
