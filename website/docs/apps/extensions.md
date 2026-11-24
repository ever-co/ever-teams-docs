---
id: extensions
title: Browser Extensions
sidebar_label: Browser extensions
sidebar_position: 4
description: Ever Teams browser extension for Chrome and Firefox.
---

# Browser Extensions

The Ever Teams browser extension (`apps/extensions`) enables quick time tracking from any browser tab.

## Key Details

| Property      | Value                            |
| ------------- | -------------------------------- |
| **Framework** | [Plasmo](https://www.plasmo.com) |
| **Manifest**  | Chrome MV3                       |
| **Browsers**  | Chrome, Firefox                  |
| **Styling**   | Tailwind CSS                     |

## Features

- ✅ Quick timer start/stop from any tab
- ✅ Task selection and switching
- ✅ Current task status display
- ✅ Time tracking summary
- ✅ Quick links to web app

## Architecture

```
apps/extensions/
├── background.ts      # Service worker (timer logic, API calls)
├── popup.tsx           # Extension popup UI
├── content.tsx         # Content script (page injection)
├── components/         # UI components
├── hooks/              # Extension-specific hooks
├── typescript/         # TypeScript utility types
└── misc/               # Utility functions
```

### Components

| Component         | Purpose                                           |
| ----------------- | ------------------------------------------------- |
| **background.ts** | Service worker for background timer and API sync  |
| **popup.tsx**     | Main extension popup with timer and task controls |
| **content.tsx**   | Content script for page-level integrations        |

## Development

```bash
cd apps/extensions
yarn install
yarn dev
```

### Loading in Chrome

1. Go to `chrome://extensions`
2. Enable **Developer mode**
3. Click **Load unpacked**
4. Select `apps/extensions/build/chrome-mv3-dev`

The steps above load the Chrome (Manifest V3) development build. The same walkthrough also appears in [Installation](../getting-started/installation.md#run-the-browser-extension).

### Production Build

```bash
yarn build
```

From the monorepo root, `yarn build:extensions` builds the extension too (see the [build scripts reference](../getting-started/installation.md#build-scripts-reference)).

## Related Pages

- [Time Tracking](../features/time-tracking.md) — time entries record where they were tracked, including from the extension
- [Applications](./index.md) — how the extension fits with the web, mobile and desktop apps
- [Monorepo Structure](../architecture/monorepo.md) — where `apps/extensions` sits among the other apps and shared packages

## CI/CD

- `extensions.dev.yml` — Development builds
- `extensions.prod.yml` — Production builds and store submission
