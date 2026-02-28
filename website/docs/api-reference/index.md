---
title: API Reference
sidebar_label: API Reference
sidebar_position: 10
description: Ever Teams API proxy routes and backend API reference.
---

# API Reference

Ever Teams communicates with the Ever Gauzy backend through a Next.js API proxy layer. This page documents the available API routes and their purposes.

## Authentication

| Route                            | Method | Description                                      |
| -------------------------------- | ------ | ------------------------------------------------ |
| `/api/auth/signin/email`         | POST   | Sign in with email (send magic code)             |
| `/api/auth/signin/email/confirm` | POST   | Confirm magic code sign-in                       |
| `/api/auth/signin/workspace`     | POST   | Sign in to a specific workspace                  |
| `/api/auth/register`             | POST   | Register a new account                           |
| `/api/auth/refresh`              | POST   | Refresh JWT token                                |
| `/api/auth/verify/code`          | POST   | Verify authentication code                       |
| `/api/auth/verify/resend`        | POST   | Resend verification code                         |
| `/api/auth/social/login`         | POST   | Social login (Google, GitHub, Facebook, Twitter) |

## Timer

| Route                       | Method           | Description               |
| --------------------------- | ---------------- | ------------------------- |
| `/api/timer/start`          | POST             | Start the timer           |
| `/api/timer/stop`           | POST             | Stop the timer            |
| `/api/timer/toggle`         | POST             | Toggle timer on/off       |
| `/api/timer/status`         | GET              | Get current timer status  |
| `/api/timer/timesheet`      | GET              | Get time log entries      |
| `/api/timer/timesheet/[id]` | GET, PUT, DELETE | Manage specific time log  |
| `/api/timer/time-log`       | GET, POST        | List and create time logs |
| `/api/timer/time-slot`      | GET              | Get time slots            |

## Tasks

| Route                 | Method           | Description               |
| --------------------- | ---------------- | ------------------------- |
| `/api/tasks`          | GET, POST        | List and create tasks     |
| `/api/tasks/[id]`     | GET, PUT, DELETE | Task CRUD                 |
| `/api/tasks/team`     | GET              | Get tasks for a team      |
| `/api/tasks/employee` | GET              | Get tasks for an employee |

## Teams & Organizations

| Route                                  | Method            | Description           |
| -------------------------------------- | ----------------- | --------------------- |
| `/api/organization-team`               | GET, POST         | List and create teams |
| `/api/organization-team/[id]`          | GET, PUT, DELETE  | Team CRUD             |
| `/api/organization-team/[id]/members`  | GET, POST, DELETE | Manage team members   |
| `/api/organization-team-employee`      | GET, PUT          | Manage team employees |
| `/api/organization-team-join`          | POST              | Join a team           |
| `/api/organization-team-join/validate` | POST              | Validate join request |

## Projects

| Route                                | Method           | Description              |
| ------------------------------------ | ---------------- | ------------------------ |
| `/api/organization-projects`         | GET, POST        | List and create projects |
| `/api/organization-projects/[id]`    | GET, PUT, DELETE | Project CRUD             |
| `/api/organization-projects/setting` | GET, PUT         | Project settings         |

## Daily Plans

| Route                       | Method           | Description                 |
| --------------------------- | ---------------- | --------------------------- |
| `/api/daily-plan`           | GET, POST        | List and create daily plans |
| `/api/daily-plan/[id]`      | GET, PUT, DELETE | Plan CRUD                   |
| `/api/daily-plan/me`        | GET              | Current user's plans        |
| `/api/daily-plan/[id]/task` | POST, DELETE     | Add/remove tasks from plan  |

## Timesheets

| Route                     | Method    | Description                        |
| ------------------------- | --------- | ---------------------------------- |
| `/api/timesheet`          | GET, POST | List and create timesheets         |
| `/api/timesheet/[action]` | POST      | Submit, approve, reject timesheets |
| `/api/timesheet/count`    | GET       | Timesheet count statistics         |

## User & Employee

| Route            | Method           | Description            |
| ---------------- | ---------------- | ---------------------- |
| `/api/user`      | GET, PUT         | Current user profile   |
| `/api/user/me`   | GET              | Get authenticated user |
| `/api/user/[id]` | GET, PUT, DELETE | User CRUD              |
| `/api/employee`  | GET              | List employees         |

## Invitations

| Route                  | Method           | Description                 |
| ---------------------- | ---------------- | --------------------------- |
| `/api/invite`          | GET, POST        | List and create invitations |
| `/api/invite/[id]`     | GET, PUT, DELETE | Invitation CRUD             |
| `/api/invite/validate` | POST             | Validate an invitation      |
| `/api/invite/resend`   | POST             | Resend an invitation        |

## Task Metadata

| Route                           | Method                 | Description         |
| ------------------------------- | ---------------------- | ------------------- |
| `/api/task-statuses`            | GET, POST              | Task statuses       |
| `/api/task-priorities`          | GET, POST              | Task priorities     |
| `/api/task-sizes`               | GET, POST              | Task sizes          |
| `/api/task-versions`            | GET, POST              | Task versions       |
| `/api/issue-types`              | GET, POST              | Issue types         |
| `/api/task-related-issue-types` | GET, POST              | Related issue types |
| `/api/tags`                     | GET, POST, PUT, DELETE | Tags/labels         |

## Roles & Permissions

| Route                   | Method           | Description                 |
| ----------------------- | ---------------- | --------------------------- |
| `/api/roles`            | GET, POST        | List and create roles       |
| `/api/roles/[id]`       | GET, PUT, DELETE | Role CRUD                   |
| `/api/role-permissions` | GET, PUT         | Role permission assignments |

## Integrations

| Route                     | Method         | Description                  |
| ------------------------- | -------------- | ---------------------------- |
| `/api/integration`        | GET, POST      | List and manage integrations |
| `/api/integration/[type]` | GET, POST, PUT | Type-specific operations     |
| `/api/integration-tenant` | GET, PUT       | Tenant integration settings  |

## Other

| Route               | Method | Description                  |
| ------------------- | ------ | ---------------------------- |
| `/api/languages`    | GET    | Available languages          |
| `/api/image-assets` | GET    | Image asset management       |
| `/api/email-reset`  | POST   | Password/email reset         |
| `/api/subscribe`    | POST   | Newsletter subscription      |
| `/api/health`       | GET    | Health check endpoint        |
| `/api/livekit`      | POST   | Generate LiveKit room tokens |
| `/api/public`       | GET    | Public team data             |

## Backend API Documentation

For the full Ever Gauzy API documentation (the backend), please refer to:

- [Ever Gauzy API Repository](https://github.com/ever-co/ever-gauzy/tree/develop/apps/api)
- [Swagger/OpenAPI Documentation](https://api.ever.team/swg) (if available)

## Request Format

All API requests should include:

```http
Content-Type: application/json
Authorization: Bearer <jwt-token>
Tenant-Id: <tenant-uuid>
Organization-Id: <org-uuid>
```

:::note
When using the web app, these headers are automatically injected by the API proxy layer. You only need to handle them when making direct API calls.
:::
