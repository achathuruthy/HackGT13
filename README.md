# Habitat Watch

Housing-condition evidence workspace: **See → Prove → Understand → Act**.
Upload photographs and messages, review observations and timelines, consult curated legal sources, and export an evidence packet. No app sign-in or Cloudflare account is required to run locally.

## Run on your computer

Install Node.js 22.13+ and the pnpm version pinned in `package.json`. In this folder:

```sh
corepack enable
pnpm install --frozen-lockfile
pnpm local
```

Open **http://localhost:8787**. `pnpm local` builds the app, applies local database migrations, and starts the server. Stop it with Ctrl+C. Later, `pnpm start` reuses the last build; after code changes, run `pnpm local` again. Keep using the same browser and `localhost` address.

If Corepack is not installed, install the pinned pnpm with `npm install -g pnpm@11.25.0` and rerun the pnpm commands. On Windows, use PowerShell or a terminal with Node and pnpm available.

Data and original uploads are stored on your computer under `.wrangler/state/`, outside Git. Keep that directory to retain your data. Local changes do not sync to the hosted preview.

## Optional live AI

Copy `.env.example` to `.env` in the project root and fill in `XAI_API_KEY`. Restart the local server. The default `XAI_MODEL` is `grok-4.7`. Without a key, the manual workflow works and AI analysis is disabled. Keys stay on the server; never commit `.env`.

## No-sign-in workspace

The app creates a random HttpOnly cookie and checks it on case/evidence routes. Different browsers get separate workspaces. Clearing cookies, changing browser profiles, or switching between `localhost` and `127.0.0.1` loses access to the previous workspace. Anyone using your browser profile can access its cases. Export important packets before clearing cookies. There is no account recovery or cross-device synchronization in this MVP.

Previously account-owned hosted records are retained but are not reassigned to anonymous visitors. The hosted preview remains private at the hosting-platform level; this does not affect localhost.

## Development and checks

```sh
pnpm db:local              # After the first build; apply pending local migrations
pnpm dev                   # Hot reload at http://localhost:5173
pnpm test
pnpm build
pnpm test:integration
```

The built local server at port 8787 is the recommended demo path. Hot reload uses a different port, so use one server at a time. Tests use isolated Miniflare databases and anonymous sessions, not your saved cases.

## GitHub

The source is ready for a private repository named `habitat-watch`. If publishing it yourself with GitHub CLI after signing in with `gh auth login`, run from an extracted source folder:

```sh
git init -b main
git add .
git commit -m "Initial Habitat Watch MVP"
gh repo create habitat-watch --private --source=. --remote=origin --push
```

If you already have a Git checkout, skip `git init` and preserve its existing remotes. The source bundle excludes secrets, local data, dependencies and generated builds. `.openai/hosting.json` identifies the existing private preview, contains no credentials, and is not required as a GitHub credential. Creating a GitHub repository does not configure automatic deployment.

## Specification and limitations

[Product spec, development plan and legal-source audit](docs/MVP-HANDOFF.md) · [Full directory](FULL-DIRECTORY.txt)

Live model accuracy is not validated without a credential and representative evaluation data. Findings require human review. Legal references are information, not legal advice or official findings. Exporting a notice does not send it. All original evidence and sensitive details should be reviewed before sharing packets.

We winning this.
