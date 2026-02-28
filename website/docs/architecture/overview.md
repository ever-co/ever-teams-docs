---
id: overview
title: System Overview
sidebar_label: System overview
sidebar_position: 1
description: High-level architecture of Ever Teams — technology stack, system components, and data flow.
---

# System Overview

Ever Teams is a modern, full-stack, cross-platform application built with industry-standard open-source technologies. This page provides a high-level view of the system architecture.

## Technology Stack

### Frontend

| Technology                                         | Usage                                                 |
| -------------------------------------------------- | ----------------------------------------------------- |
| **[Next.js](https://nextjs.org)** (v16)            | Server-side rendering, file-based routing, API routes |
| **[React](https://reactjs.org)** (v19)             | UI component library                                  |
| **[Tailwind CSS](https://tailwindcss.com)**        | Utility-first CSS framework                           |
| **[shadcn/ui](https://ui.shadcn.com)**             | Accessible, customizable component primitives         |
| **[Radix UI](https://www.radix-ui.com)**           | Headless UI component library                         |
| **[HeadlessUI](https://headlessui.com)**           | Unstyled, accessible UI components                    |
| **[Recoil](https://recoiljs.org)**                 | State management for React                            |
| **[next-intl](https://next-intl-docs.vercel.app)** | Internationalization (13+ locales)                    |
| **[Sentry](https://sentry.io)**                    | Error tracking and performance monitoring             |

### Mobile

| Technology                                  | Usage                                      |
| ------------------------------------------- | ------------------------------------------ |
| **[React Native](https://reactnative.dev)** | Cross-platform mobile framework            |
| **[Expo](https://expo.dev)**                | Development toolchain and managed workflow |

### Desktop

| Technology                                 | Usage                     |
| ------------------------------------------ | ------------------------- |
| **[Electron](https://www.electronjs.org)** | Desktop application shell |

### Browser Extensions

| Technology                           | Usage                       |
| ------------------------------------ | --------------------------- |
| **[Plasmo](https://www.plasmo.com)** | Browser extension framework |

### Build & Tooling

| Technology                                                     | Usage                             |
| -------------------------------------------------------------- | --------------------------------- |
| **[NX](https://nx.dev)**                                       | Monorepo build orchestration      |
| **[Turborepo](https://turbo.build)**                           | Build system and caching          |
| **[Lerna](https://lerna.js.org)**                              | Package versioning and publishing |
| **[Yarn Workspaces](https://yarnpkg.com/features/workspaces)** | Dependency management             |
| **[TypeScript](https://www.typescriptlang.org)**               | Type-safe JavaScript              |

### Backend (Ever Gauzy API)

Ever Teams relies on the [Ever Gauzy](https://github.com/ever-co/ever-gauzy) platform for its backend:

| Technology                                   | Usage                        |
| -------------------------------------------- | ---------------------------- |
| **[NestJS](https://nestjs.com)**             | Server framework             |
| **[PostgreSQL](https://www.postgresql.org)** | Primary database             |
| **[Redis](https://redis.io)**                | Caching and pub/sub          |
| **[MinIO](https://min.io)**                  | S3-compatible object storage |
| **[Elasticsearch](https://www.elastic.co)**  | Full-text search             |
| **[Cube.js](https://cube.dev)**              | Analytics / OLAP engine      |

## System Architecture

```mermaid
graph TB
    subgraph "Client Applications"
        WEB["Web App<br/>(Next.js)"]
        MOB["Mobile App<br/>(Expo)"]
        DSK["Desktop App<br/>(Electron)"]
        EXT["Browser Extension<br/>(Plasmo)"]
    end

    subgraph "Ever Teams Frontend"
        PROXY["API Proxy Layer<br/>(Next.js API Routes)"]
        AUTH["Auth Layer<br/>(NextAuth.js)"]
    end

    subgraph "Ever Gauzy Backend"
        API["Gauzy API<br/>(NestJS)"]
        GQL["GraphQL<br/>Endpoint"]
        REST["REST API<br/>Endpoint"]
    end

    subgraph "Infrastructure"
        DB["PostgreSQL"]
        REDIS["Redis"]
        MINIO["MinIO / S3"]
        ES["Elasticsearch"]
        CUBE["Cube.js"]
    end

    subgraph "External Services"
        MEET["Jitsi / LiveKit<br/>(Video)"]
        GH["GitHub<br/>(Integration)"]
        JIRA["JIRA<br/>(Integration)"]
        SENTRY["Sentry<br/>(Monitoring)"]
    end

    WEB --> PROXY
    MOB --> API
    DSK --> API
    EXT --> PROXY

    PROXY --> AUTH
    AUTH --> API

    API --> REST
    API --> GQL
    API --> DB
    API --> REDIS
    API --> MINIO
    API --> ES
    API --> CUBE

    WEB -.-> MEET
    WEB -.-> SENTRY
    API -.-> GH
    API -.-> JIRA
```

## Data Flow

### Authentication Flow

```mermaid
sequenceDiagram
    participant U as User
    participant WEB as Web App
    participant AUTH as NextAuth.js
    participant API as Gauzy API

    U->>WEB: Visit /auth/passcode
    WEB->>API: POST /auth/signin.email
    API-->>WEB: Magic code sent
    U->>WEB: Enter passcode
    WEB->>AUTH: Verify passcode
    AUTH->>API: POST /auth/signin.email/confirm
    API-->>AUTH: JWT Token + User data
    AUTH-->>WEB: Session created
    WEB-->>U: Redirect to dashboard
```

### Timer Flow

```mermaid
sequenceDiagram
    participant U as User
    participant WEB as Web App
    participant STORE as Recoil Store
    participant API as Gauzy API

    U->>WEB: Click Start Timer
    WEB->>STORE: Update timer state
    WEB->>API: POST /timer/start
    API-->>WEB: Timer started

    loop Polling
        WEB->>API: GET /timer/status
        API-->>WEB: Current timer state
        WEB->>STORE: Update elapsed time
    end

    U->>WEB: Click Stop Timer
    WEB->>API: POST /timer/stop
    API-->>WEB: Time log created
    WEB->>STORE: Reset timer state
```

## Deployment Architecture

### Docker Compose (Production)

```mermaid
graph LR
    subgraph "Docker Network"
        WEBAPP["ever-teams-webapp<br/>:3030"]
        API2["gauzy-api<br/>:3000"]
        DB2["PostgreSQL<br/>:5432"]
        REDIS2["Redis<br/>:6379"]
        MINIO2["MinIO<br/>:9000"]
        ES2["Elasticsearch<br/>:9200"]
        CUBE2["Cube.js<br/>:4000"]
        ZIPKIN["Zipkin<br/>:9411"]
    end

    WEBAPP --> API2
    API2 --> DB2
    API2 --> REDIS2
    API2 --> MINIO2
    API2 --> ES2
    API2 --> CUBE2
    API2 -.-> ZIPKIN
```

## Key Design Decisions

| Decision                          | Rationale                                                                |
| --------------------------------- | ------------------------------------------------------------------------ |
| **Next.js API proxy**             | Avoids CORS issues, keeps API keys server-side, enables middleware       |
| **Recoil for state**              | Fine-grained subscriptions, async selectors, atom-based architecture     |
| **Monorepo with shared packages** | Code reuse across web, mobile, and desktop apps                          |
| **Ever Gauzy as backend**         | Leverages a mature ERP/CRM/HRM platform instead of building from scratch |
| **Docker Compose for infra**      | One-command deployment of all required services                          |
| **TypeScript everywhere**         | Type safety across the full stack                                        |
