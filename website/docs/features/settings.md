---
id: settings
title: Settings
sidebar_label: Settings
sidebar_position: 14
description: Application, organization, and team settings in Ever Teams.
---

# Settings

Ever Teams provides comprehensive settings management accessible via `/settings`.

## Settings Categories

### General Settings

- **Organization name** — Display name for the organization
- **Timezone** — Default timezone for the organization
- **Date format** — Preferred date format
- **Time format** — 12-hour or 24-hour

### Team Settings

- **Team name** — Display name
- **Team prefix** — Task numbering prefix (e.g., "ET-")
- **Default task status** — Status for new tasks
- **Timer settings** — Auto-stop timer, idle detection
- **Work schedule** — Working hours and days

### Task Configuration

- **Task Statuses** — Custom status definitions
- **Task Priorities** — Priority levels
- **Task Sizes** — Estimation sizes
- **Issue Types** — Task type categories
- **Tags / Labels** — Organization-wide labels
- **Task Versions** — Version/release management

### Personal Settings

- **Profile** — Name, avatar, bio
- **Notifications** — Email and in-app notification preferences
- **Theme** — Dark / Light / System
- **Language** — Interface language
- **Timezone** — Personal timezone override

### Danger Zone

- **Delete team** — Permanently delete a team and its data
- **Leave organization** — Remove yourself from an organization
- **Transfer ownership** — Transfer organization ownership

## Related Routes

| Route       | Path                    |
| ----------- | ----------------------- |
| General     | `/settings`             |
| Members     | `/settings/members`     |
| Team        | `/settings/team`        |
| Danger Zone | `/settings/danger-zone` |
