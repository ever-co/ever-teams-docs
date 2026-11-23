---
id: mobile
title: Mobile Application
sidebar_label: Mobile app
sidebar_position: 2
description: The Ever Teams mobile application for iOS and Android, built with Expo and React Native.
---

# Mobile Application

The Ever Teams mobile app (`apps/mobile`) is the iOS and Android app, built with **Expo** and **React Native**. It talks to the same API as the web app, so a timer started on the phone shows on the web and the other way round.

## Key Details

| Property             | Value                                                              |
| -------------------- | ------------------------------------------------------------------ |
| **Framework**        | Expo 57, React Native 0.86, React 19                               |
| **Boilerplate**      | Ignite                                                             |
| **Routing**          | Expo Router: the screens are the files under `src/app`             |
| **State Management** | MobX-State-Tree                                                    |
| **Languages**        | 14 (the web app's 13, plus Korean), in `locales/`                  |
| **Session**          | Kept in the device's secure storage (`expo-secure-store`)          |
| **Testing**          | Jest for unit tests, Maestro flows for end-to-end runs (`.maestro`) |
| **License**          | GPL-3.0                                                            |

## What the app does

The screens of the app, as its routes list them:

- **Sign-in** with the code sent by email.
- **Work**: the timer, with the task being worked on, and correcting or discarding a run.
- **Team**: the team and its members, and a member's profile.
- **Tasks**: the team's tasks, and a task's page.
- **My week**.
- **Settings**: personal settings, and the team's settings (members, statuses, priorities, sizes, labels, versions).

A timer keeps running when the app is closed, and the app finds it again when it opens.

## Development

### Prerequisites

- Node.js 24+
- Android Studio with an emulator, or Xcode with an iOS simulator (macOS)
- A copy of `.env.template` saved as `.env`, with the API address the app talks to

### Getting Started

The app runs as a **development build**, so build and install it on the emulator or simulator first:

```bash
cd apps/mobile
yarn install

# Android
yarn android

# iOS
yarn ios
```

Then, in another terminal, `yarn start` runs Expo's development server for that build (`expo start --dev-client`):

```bash
cd apps/mobile
yarn start
```

Each of these scripts first writes the app's configuration from your `.env` (`yarn config:mobile`).

### Checks

```bash
# Type check
yarn compile

# Unit tests
yarn test
```

The end-to-end flows sign in, start and stop the timer, correct and discard a run, open the team and a task, and sign out. They run with [Maestro](https://maestro.dev) against an installed build and an API with test data, and they need two values: the app's identifier, and the address of a small helper that gives the flows the sign-in code the API sent by email. From the repository root:

```bash
maestro test apps/mobile/.maestro \
  -e APP_ID=<the app's Android package or iOS bundle identifier> \
  -e HELPER=http://127.0.0.1:3999
```

`apps/mobile/.maestro/README.md` says how to set up the helper and the test data.

## Project Structure

```
apps/mobile/
├── src/
│   ├── app/            # The screens, as Expo Router routes
│   ├── components/     # UI components of the current screens
│   ├── data/           # The data cache and the timer's reads and writes
│   ├── home/           # The Work screen's timer
│   ├── navigation/     # The shell around the screens
│   ├── state/          # The session and the person's preferences
│   └── theme/          # Colors, fonts and spacing, following the web app's
├── app/                # Earlier code still in use: models, services, i18n, helpers
├── locales/            # Translations, one file per language
├── assets/             # Images, fonts, icons
├── .maestro/           # End-to-end flows
└── test/               # Test helpers and stand-ins
```

## Building for Production

### EAS Build

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

- `mobile.apps.ios.yml`: iOS production build
- `mobile.apps.android.yml`: Android production build
- `mobile.apps.stage.ios.yml`: iOS staging build
- `mobile.apps.stage.android.yml`: Android staging build

Three more workflows check the app without building it: `mobile.dev.yml` (on a push to `develop` that touches the mobile app), `mobile.stage.yml` and `mobile.prod.yml` (on a push to `main`) install the packages and type-check the app. `mobile.before-merge.yml` checks a pull request that promotes a release (develop to stage, stage to main). None of them produces an installable app.

## Branding

The mobile app supports custom branding (see `apps/mobile/BRANDING.md`):

- App name and bundle ID
- App icons and splash screens
- Color scheme
- API endpoint configuration
