---
title: Troubleshooting & FAQ
sidebar_label: Troubleshooting
sidebar_position: 12
description: Common issues, solutions, and frequently asked questions about Ever Teams.
---

# Troubleshooting & FAQ

Solutions to common issues and frequently asked questions.

## Installation Issues

### `ENOSPC: System limit for number of file watchers reached`

**Linux only** — Increase the inotify file watcher limit:

```bash
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf
sudo sysctl -p
```

### `sharp` module fails to install

Install platform-specific build tools:

```bash
# macOS
xcode-select --install

# Ubuntu/Debian
sudo apt install build-essential

# Windows
npm install -g windows-build-tools
```

### `EMFILE: too many open files`

Increase file handle limits:

```bash
# Set UV threadpool size
export UV_THREADPOOL_SIZE=64

# macOS: Increase open file limit
ulimit -n 10240
```

### Yarn install gets stuck or times out

```bash
# Clear yarn cache
yarn cache clean

# Try with a different registry
yarn install --registry https://registry.npmjs.org
```

---

## Build Issues

### TypeScript errors during build

```bash
# Ensure all packages are built first
yarn build:types
yarn build:constants
yarn build:services
yarn build:ui
yarn build:hooks
yarn build:utils

# Then build the web app
yarn build:web
```

### `Module not found` errors

Ensure dependencies are installed and packages built:

```bash
yarn install
yarn build
```

### Bundle size is too large

Enable the bundle analyzer:

```bash
ANALYZE=true yarn build:web
```

---

## Runtime Issues

### API connection errors

1. **Check API URL** — Verify `GAUZY_API_SERVER_URL` and `NEXT_PUBLIC_GAUZY_API_SERVER_URL` in `.env`
2. **Check API health** — Visit `https://api.ever.team/api/health`
3. **Check CORS** — Ensure your domain is allowed
4. **Check network** — Verify internet connectivity

### Login fails with "Invalid credentials"

1. **Check API URL** — Make sure the API endpoint is correct
2. **Clear cookies** — Browser cookies may be stale
3. **Check email** — Verify the registration was completed

### Timer doesn't start or stop

1. **Check API connection** — Timer requires a working API
2. **Select a task** — A task must be selected before starting
3. **Check permissions** — Ensure you have timer permissions
4. **Browser console** — Check for JavaScript errors

### Internationalization not working

1. **Check locale code** — Ensure `[locale]` matches a supported language code
2. **Check translation files** — Verify JSON files exist in `apps/web/locales/`
3. **Clear cache** — Clear `.next` cache and rebuild

---

## Docker Issues

### `docker-compose up` fails

1. **Docker version** — Ensure Docker Compose >= v2.20
2. **Port conflicts** — Check ports 3030, 3000, 5432, 6379 are free
3. **Memory** — Docker needs at minimum 4GB RAM allocated

### Container keeps restarting

```bash
# Check container logs
docker-compose logs webapp
docker-compose logs api

# Check health status
docker ps --format "table {{.Names}}\t{{.Status}}"
```

---

## Desktop App Issues

### Build fails on Windows

1. **Enable Developer Mode** — Required for symbolic links
2. **Set `USE_HARD_LINKS=false`** — Prevents file deduplication issues
3. **Increase memory** — Set `NODE_OPTIONS=--max-old-space-size=12288`

### macOS notarization fails

Ensure Apple ID credentials are configured:

- `APPLE_ID` — Apple Developer ID
- `APPLE_ID_APP_PASSWORD` — App-specific password
- `CSC_LINK` — Code signing certificate

---

## FAQ

### What is the relationship between Ever Teams and Ever Gauzy?

Ever Teams is a frontend platform for work and project management that uses **Ever Gauzy** as its backend API. Ever Gauzy is a comprehensive ERP/CRM/HRM platform that provides REST and GraphQL APIs.

### Can I use Ever Teams without the Gauzy backend?

No, Ever Teams requires access to the Ever Gauzy API for all data operations. You can either use the hosted API (`api.ever.team`) or self-host it.

### Is Ever Teams free to use?

Yes, the **Community Edition** is free and open-source under AGPL-3.0. Enterprise and Small Business licenses are also available for commercial use. See [LICENSES.md](https://github.com/ever-co/ever-teams/blob/master/LICENSES.md).

### How do I contribute translations?

Translations are managed via [Crowdin](https://ever.crowdin.com/ever-teams). You can contribute there or submit translation JSON files via Pull Request.

### What databases are supported?

The Ever Gauzy backend supports **PostgreSQL** (recommended for production) and **SQLite** (for development). Both TypeORM and MikroORM are supported.

### Can I white-label Ever Teams?

Yes! Ever Teams supports full white-labeling through environment variables. Customize the app name, logo, colors, company info, and more. See [Configuration](./getting-started/configuration#branding--white-labeling).

### How do I get support?

- 📧 **Email**: [gauzy@ever.co](mailto:gauzy@ever.co)
- 💬 **Discord**: [Join our Discord](https://discord.gg/hKQfn4j)
- 💬 **Slack**: [Join Gauzy Slack](https://join.slack.com/t/gauzy)
- 🐛 **GitHub Issues**: [File an issue](https://github.com/ever-co/ever-teams/issues)
- 📝 **Feature Requests**: [Request a feature](https://github.com/ever-co/feature-requests/issues)
