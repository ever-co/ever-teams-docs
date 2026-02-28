---
title: Applications
sidebar_label: Applications
sidebar_position: 5
description: Overview of all Ever Teams applications — web, mobile, desktop, extensions, and server.
---

# Applications

Ever Teams is available across multiple platforms. Each application is a separate project within the monorepo.

## Platform Overview

| App                                   | Path                               | Technology            | Status        |
| ------------------------------------- | ---------------------------------- | --------------------- | ------------- |
| **[Web Application](./web)**          | `apps/web`                         | Next.js 16 (React 19) | ✅ Production |
| **[Mobile App](./mobile)**            | `apps/mobile`                      | Expo (React Native)   | ✅ Production |
| **[Desktop App](./desktop)**          | `apps/desktop` + `apps/server-web` | Electron              | ✅ Production |
| **[Browser Extension](./extensions)** | `apps/extensions`                  | Plasmo                | ✅ Production |
| **[Server Web](./server-web)**        | `apps/server-web`                  | Electron + Next.js    | ✅ Production |

## Shared Code

All applications share code through the `packages/` directory:

```mermaid
graph TD
    WEB["Web App"] --> UI["@ever-teams/ui"]
    WEB --> SVC["@ever-teams/services"]
    WEB --> HOOKS["@ever-teams/hooks"]
    WEB --> TYPES["@ever-teams/types"]
    MOB["Mobile App"] --> TYPES
    MOB --> SVC
    DSK["Desktop App"] --> UI
    DSK --> TYPES
    EXT["Extension"] --> TYPES
```
