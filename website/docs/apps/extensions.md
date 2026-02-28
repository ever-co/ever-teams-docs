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
| **Browsers**  | Chrome, Firefox, Edge            |
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

### Production Build

```bash
yarn build
```

## CI/CD

- `extensions.dev.yml` — Development builds
- `extensions.prod.yml` — Production builds and store submission
