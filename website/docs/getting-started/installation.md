---
id: installation
title: Installation
sidebar_label: Installation
sidebar_position: 1
description: Step-by-step instructions for installing Ever Teams on Windows, macOS, and Linux.
---

# Installation

This guide covers how to install and run Ever Teams locally for development or production use.

## Prerequisites

| Requirement | Details                                                 |
| ----------- | ------------------------------------------------------- |
| **Node.js** | Version 24.x or higher ([download](https://nodejs.org)) |
| **Yarn**    | Version 1.13+ (`npm install -g yarn`)                   |
| **Git**     | Latest version ([download](https://git-scm.com))        |
| **OS**      | Windows 10+, macOS 12+, or Ubuntu 20.04+                |

## Clone the Repository

```bash
git clone https://github.com/ever-co/ever-teams.git
cd ever-teams
```

## Install Dependencies

Ever Teams uses a Yarn-based monorepo with workspaces. Install all dependencies from the root:

```bash
yarn install
```

This will install dependencies for all apps and packages, including:

- `apps/web` — Next.js web application
- `apps/mobile` — Expo React Native mobile app
- `apps/server-web` — Electron web server
- `packages/*` — Shared libraries (UI, services, hooks, types, etc.)

:::tip
If you encounter issues with native modules (e.g., `sharp`), ensure you have the necessary build tools installed:

- **Windows**: Install [Visual Studio Build Tools](https://visualstudio.microsoft.com/visual-cpp-build-tools/)
- **macOS**: Install Xcode Command Line Tools (`xcode-select --install`)
- **Linux**: Install `build-essential` (`sudo apt install build-essential`)
  :::

## Run the Web Application

### Development Mode

Start the web app with hot-reload:

```bash
yarn start:web:dev
```

This runs the Next.js development server on [http://localhost:3030](http://localhost:3030).

### Production Mode

Build and start the production server:

```bash
yarn build:web && yarn start:web
```

### Development with Package Rebuilds

If you are working on shared packages alongside the web app:

```bash
yarn dev:web
```

This command builds all shared packages (`services`, `types`, `constants`, `ui`, `hooks`, `utils`) first, then starts the web app in development mode.

## Run the Mobile Application

The mobile app uses [Expo](https://expo.dev) and React Native:

```bash
cd apps/mobile
yarn install
yarn start
```

This starts the Expo development server. You can then:

- Press `i` to open in iOS Simulator (macOS only)
- Press `a` to open in Android Emulator
- Scan the QR code with the Expo Go app on your physical device

## Run the Desktop Application

The desktop application is based on Electron:

```bash
# Build the web app for desktop
yarn build:web:desktop

# Prepare and start the server-web Electron app
yarn dev:server-web
```

## Run the Browser Extension

The browser extension is built with [Plasmo](https://www.plasmo.com/):

```bash
cd apps/extensions
yarn install
yarn dev
```

Load the extension in Chrome:

1. Navigate to `chrome://extensions`
2. Enable **Developer mode**
3. Click **Load unpacked**
4. Select the `apps/extensions/build/chrome-mv3-dev` directory

## Build Scripts Reference

| Script                  | Description                               |
| ----------------------- | ----------------------------------------- |
| `yarn start:web:dev`    | Start web app in dev mode                 |
| `yarn build:web`        | Build web app for production              |
| `yarn start:web`        | Start built web app                       |
| `yarn dev:web`          | Build all packages + start web dev server |
| `yarn build:mobile`     | Build mobile app                          |
| `yarn build:extensions` | Build browser extension                   |
| `yarn build:server-web` | Build Electron web server                 |
| `yarn build`            | Build everything (via Turbo)              |
| `yarn lint`             | Run linters across all packages           |
| `yarn test`             | Run test suite                            |
| `yarn format`           | Format code with Prettier                 |

## Verify Your Setup

After starting the web application, verify everything is working:

1. Open [http://localhost:3030](http://localhost:3030)
2. You should see the Ever Teams login/registration page
3. Register a new account or sign in with existing credentials
4. You're ready to start using Ever Teams!

## Troubleshooting

### Common Issues

| Issue                                            | Solution                                                                                                                     |
| ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------- |
| `ENOSPC: System limit for file watchers reached` | Increase the file watcher limit: `echo fs.inotify.max_user_watches=524288 \| sudo tee -a /etc/sysctl.conf && sudo sysctl -p` |
| `sharp` installation fails                       | Install platform-specific build tools (see Prerequisites)                                                                    |
| Port 3030 already in use                         | Kill the existing process or set a different port in `.env`                                                                  |
| `EMFILE: too many open files`                    | Increase file handle limits or set `UV_THREADPOOL_SIZE=64`                                                                   |

## Next Steps

- [Configuration](./configuration) — Customize your environment variables
- [Architecture Overview](../architecture/overview) — Understand the codebase structure
- [Development Guide](../development/) — Learn about contributing and code conventions
