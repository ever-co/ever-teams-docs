---
id: mobile
title: Mobile Application
sidebar_label: Mobile app
sidebar_position: 2
description: The Ever Teams mobile application built with Expo and React Native.
---

# Mobile Application

The Ever Teams mobile app (`apps/mobile`) provides native iOS and Android experiences built with **Expo** and **React Native**.

## Key Details

| Property             | Value              |
| -------------------- | ------------------ |
| **Framework**        | Expo               |
| **UI Framework**     | React Native       |
| **Boilerplate**      | Ignite             |
| **State Management** | MobX-State-Tree    |
| **Navigation**       | React Navigation   |
| **Testing**          | Jest + Detox (E2E) |

## Features

The mobile app supports core Ever Teams functionality:

- ✅ Authentication (email, social login)
- ✅ Team overview with member status
- ✅ Task management (create, edit, view)
- ✅ Time tracking with timer controls
- ✅ Profile management
- ✅ Push notifications
- ✅ Offline support (partial)

## Development

### Prerequisites

- Node.js 24+
- Expo CLI (`npx expo`)
- iOS Simulator (macOS) or Android Emulator

### Getting Started

```bash
cd apps/mobile
yarn install
yarn start
```

### Platform-Specific

```bash
# iOS
yarn ios

# Android
yarn android

# Web (Expo Web)
yarn web
```

## Project Structure

```
apps/mobile/
├── app/
│   ├── components/     # UI components
│   ├── models/         # MobX-State-Tree models
│   ├── navigators/     # Navigation configuration
│   ├── screens/        # Screen components
│   ├── services/       # API service layer
│   ├── theme/          # Theming and styling
│   └── utils/          # Utility functions
├── assets/             # Images, fonts, icons
├── detox/              # E2E test configuration
└── test/               # Unit tests
```

## Building for Production

### EAS Build (Recommended)

```bash
# Configure EAS
eas build:configure

# Build for iOS
eas build --platform ios

# Build for Android
eas build --platform android
```

### CI/CD

Mobile builds are automated via GitHub Actions:

- `mobile.apps.ios.yml` — iOS production build
- `mobile.apps.android.yml` — Android production build
- `mobile.apps.stage.ios.yml` — iOS staging build
- `mobile.apps.stage.android.yml` — Android staging build

## Branding

The mobile app supports custom branding (see `apps/mobile/BRANDING.md`):

- App name and bundle ID
- App icons and splash screens
- Color scheme
- API endpoint configuration
