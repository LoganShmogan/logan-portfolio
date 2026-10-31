# Security Policy

This portfolio site is maintained by **Save Point Limited**.

## Reporting a problem

If you find a security issue with loganportfolio.savepoint.co.nz or this repository, please email **[support@savepoint.co.nz](mailto:support@savepoint.co.nz)** with the subject line "Security: Portfolio". **Do not** open a public GitHub issue for it. We will acknowledge your report within 2 working days.

## Secrets

The site is static and needs no keys, tokens or environment variables. If any are added, they belong in `portfolio-website/.env.local` locally and in the Vercel project for production. Every `.env*` file is git-ignored, so they are never committed.

If a GitHub or Vercel token leaks, revoke it at github.com/settings/tokens or vercel.com/account/tokens and create a new one.
