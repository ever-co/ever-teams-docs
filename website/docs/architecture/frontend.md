---
id: frontend
title: Frontend Architecture
sidebar_label: Frontend architecture
sidebar_position: 3
description: Next.js web application architecture — routing, components, and rendering strategy.
---

# Frontend Architecture

The Ever Teams web application (`apps/web`) is built with **Next.js 16** using the **App Router**. This page explains how the frontend is structured and how the pieces fit together.

## Routing Architecture

Ever Teams uses Next.js App Router with **internationalized routing** via `next-intl`:

```
app/
├── layout.tsx                    # Root layout (HTML, providers)
├── [locale]/                     # Dynamic locale segment
│   ├── layout.tsx                # Locale layout (theme, intl providers)
│   ├── page-component.tsx        # Locale-aware page wrapper
│   ├── auth/                     # Authentication routes (public)
│   │   ├── passcode/             # Magic code sign-in
│   │   ├── password/             # Password sign-in
│   │   ├── signup/               # New user registration
│   │   ├── accept-invite/        # Team invitation acceptance
│   │   ├── social-welcome/       # Post social-login onboarding
│   │   ├── workspace/            # Workspace selection
│   │   └── error/                # Auth error handling
│   └── (main)/                   # Authenticated layout group
│       ├── layout.tsx            # Main layout (sidebar, header)
│       ├── (teams)/              # Team-scoped route group
│       ├── board/                # Whiteboard/collaboration
│       ├── calendar/             # Calendar view
│       ├── dashboard/            # Analytics dashboard
│       ├── integration/          # Integrations management
│       ├── kanban/               # Kanban board view
│       ├── meet/                 # Video conferencing
│       ├── permissions/          # Permissions management
│       ├── profile/              # User profile
│       ├── projects/             # Projects management
│       ├── reports/              # Reports (weekly, time & activity)
│       ├── settings/             # Application settings
│       └── task/                 # Task detail view
└── api/                          # API route handlers
    ├── auth/                     # Auth API proxy
    ├── timer/                    # Timer API proxy
    ├── tasks/                    # Tasks API proxy
    ├── organization-team/        # Teams API proxy
    ├── daily-plan/               # Daily plan API proxy
    ├── timesheet/                # Timesheet API proxy
    ├── integration/              # Integration API proxy
    └── ...                       # ~32 more API route groups
```

### Route Groups

Ever Teams uses Next.js **route groups** (parenthesized folders) for layout organization:

- **`(main)`** — Wraps all authenticated routes with the main application layout (sidebar, header, breadcrumbs).
- **`(teams)`** — Adds team-level context and navigation to team-scoped pages.

### Internationalization

All user-facing routes are wrapped in a `[locale]` dynamic segment. Supported locales (13 languages):

`en`, `fr`, `ar`, `bg`, `zh`, `nl`, `de`, `he`, `it`, `pl`, `pt`, `ru`, `es`

Translation files are stored in `apps/web/locales/` as JSON files.

## Component Architecture

Components are organized by domain in `core/components/`:

```
core/components/
├── activities/        # Time tracking, activity logs, timesheets
├── analytics/         # Dashboard charts and metrics
├── auth/              # Login, signup, SSO components
├── collaborate/       # Real-time collaboration features
├── common/            # Shared UI primitives and utilities
├── daily-plan/        # Daily planning components
├── features/          # Feature flags and toggles
├── icons/             # Custom icon components
├── integration/       # GitHub, JIRA integration UIs
├── layouts/           # Page layouts, sidebar, header
├── pages/             # Full-page components
├── projects/          # Project management components
├── providers/         # React context providers
├── roles/             # Role management UI
├── settings/          # Settings panel components
├── svgs/              # SVG graphic components
├── tasks/             # Task cards, lists, details
├── teams/             # Team management components
├── timer/             # Timer widget, controls
├── timesheet/         # Timesheet views and forms
└── users/             # User profile, avatar components
```

### Component Patterns

1. **Container/Presenter Pattern** — Most features use a hook for logic (in `core/hooks/`) and a component for rendering.

2. **Page Components** — Full pages are composed in `app/[locale]/(main)/` and delegate to components in `core/components/pages/`.

3. **Shared UI Library** — Reusable primitives come from `packages/ui` (built on shadcn/ui), while app-specific components live in `core/components/`.

## Custom Hooks

Ever Teams has an extensive custom hooks layer (~135 hooks) organized by domain:

| Domain           | Hooks | Examples                                                                               |
| ---------------- | ----- | -------------------------------------------------------------------------------------- |
| **Activities**   | 22    | `useTimer`, `useTimesheet`, `useTimeLogs`, `useTimeSlots`, `useActivityFilters`        |
| **Auth**         | 14    | `useAuthenticateUser`, `useAcceptInvite`, `useWorkspaces`, `useAuthenticationPasscode` |
| **Tasks**        | 10+   | `useTaskInput`, `useTaskStatus`, `useTaskFilters`, `useTaskStatistics`                 |
| **Teams**        | 8+    | `useOrganizationTeams`, `useTeamTasks`, `useCollaborative`                             |
| **Common**       | 20+   | `useModal`, `useHotkeys`, `usePagination`, `useDetectOS`, `useColorTheme`              |
| **Timer**        | 8     | `useTimerPolling`, `useTimerOptimisticUI`, `useStartStopTimerHandler`                  |
| **Daily Plan**   | 5+    | `useDailyPlan`, `useDailyPlanActions`                                                  |
| **Integrations** | 4     | `useIntegration`, `useGitHubIntegration`                                               |

## API Routes (Proxy Layer)

The web app includes a comprehensive proxy layer (`app/api/`) that:

1. **Forwards requests** to the Ever Gauzy API backend
2. **Injects authentication tokens** server-side
3. **Handles errors** uniformly
4. **Avoids CORS** by keeping API calls same-origin

There are **32+ API route groups** covering:

| API Group                                                | Purpose                                         |
| -------------------------------------------------------- | ----------------------------------------------- |
| `auth`                                                   | Authentication (login, signup, social, invites) |
| `timer`                                                  | Timer start/stop, time logs, time slots         |
| `tasks`                                                  | CRUD operations on tasks                        |
| `organization-team`                                      | Team CRUD, member management                    |
| `daily-plan`                                             | Daily planning endpoints                        |
| `timesheet`                                              | Timesheet submissions and approvals             |
| `integration`                                            | Third-party integration management              |
| `organization-projects`                                  | Project management                              |
| `tags`, `task-statuses`, `task-priorities`, `task-sizes` | Task metadata                                   |
| `roles`, `role-permissions`                              | RBAC management                                 |
| `user`, `employee`                                       | User and employee profiles                      |
| `invite`                                                 | Invitation management                           |
| `livekit`                                                | Video conferencing tokens                       |

## Rendering Strategy

Ever Teams uses a **hybrid rendering** approach:

| Route Type | Strategy                       | Reason                               |
| ---------- | ------------------------------ | ------------------------------------ |
| Auth pages | Server-side rendered           | SEO, fast initial load               |
| Dashboard  | Client-side rendered           | Real-time data updates               |
| Settings   | Server-side + client hydration | Mostly static with interactive forms |
| API routes | Edge/serverless                | Low-latency API proxy                |

## Styling

- **Tailwind CSS** — Primary styling approach with utility classes
- **CSS Modules** — Used for component-specific styles in `styles/`
- **shadcn/ui** — Component library providing accessible, customizable base components
- **Dark / Light / Black** theme support via CSS custom properties

## Configuration

Key Next.js configuration (`next.config.js`):

- **`next-intl`** plugin for i18n
- **Sentry** integration for error tracking (production only)
- **Bundle Analyzer** (when `ANALYZE=true`)
- **Standalone output** support for Docker builds
- **Package optimization** for shared `@ever-teams/*` packages
- **Turbopack** file system caching for faster dev builds
