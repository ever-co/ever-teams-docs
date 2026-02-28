---
id: web
title: Web Application
sidebar_label: Web application
sidebar_position: 1
description: The Ever Teams Next.js web application — architecture, features, and development.
---

# Web Application

The web application (`apps/web`) is the primary and most feature-complete Ever Teams client. It's built with **Next.js 16** and **React 19**.

## Key Details

| Property                 | Value                               |
| ------------------------ | ----------------------------------- |
| **Framework**            | Next.js 16 (App Router)             |
| **UI Library**           | React 19                            |
| **Styling**              | Tailwind CSS + shadcn/ui + Radix UI |
| **State Management**     | Recoil                              |
| **Internationalization** | next-intl (13 languages)            |
| **Authentication**       | NextAuth.js                         |
| **Error Tracking**       | Sentry                              |
| **Analytics**            | PostHog, Jitsu, Google Analytics    |
| **Default Port**         | `3030`                              |

## Production URLs

| Environment    | URL                                        |
| -------------- | ------------------------------------------ |
| **Production** | [app.ever.team](https://app.ever.team)     |
| **Demo**       | [demo.ever.team](https://demo.ever.team)   |
| **Staging**    | [stage.ever.team](https://stage.ever.team) |

## Development

```bash
# Development mode with hot-reload
yarn start:web:dev

# Build + start production server
yarn build:web && yarn start:web

# Build all packages then start dev
yarn dev:web
```

## Core Features

The web app includes all Ever Teams features:

- ✅ Time tracking with real-time timer
- ✅ Task management with multiple views (list, kanban, calendar)
- ✅ Team management and member activity monitoring
- ✅ Project management
- ✅ Daily planning
- ✅ Timesheet management
- ✅ Reports and analytics
- ✅ Video conferencing (Jitsi/LiveKit)
- ✅ GitHub and JIRA integrations
- ✅ Role-based access control
- ✅ Settings and administration
- ✅ Dark/light/system themes
- ✅ 13 language translations

## API Proxy

The web app includes a comprehensive API proxy layer (`app/api/`) with 32+ route groups that forward requests to the Ever Gauzy backend. See [API Layer](../architecture/api-layer) for details.

## Configuration

All configuration is done via environment variables. See [Configuration](../getting-started/configuration) for the complete reference.

## Build Outputs

| Output         | Use Case                          |
| -------------- | --------------------------------- |
| **Standard**   | Vercel, Node.js hosting           |
| **Standalone** | Docker deployment                 |
| **Export**     | Static hosting (limited features) |

Set the output mode via `NEXT_BUILD_OUTPUT_TYPE` environment variable.
