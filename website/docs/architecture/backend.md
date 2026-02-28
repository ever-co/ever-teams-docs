---
id: backend
title: Backend Integration
sidebar_label: Backend integration
sidebar_position: 6
description: How Ever Teams integrates with the Ever Gauzy API platform.
---

# Backend Integration

Ever Teams is a frontend-focused platform that relies on **[Ever Gauzy](https://github.com/ever-co/ever-gauzy)** (an open-source Business Management Platform) as its backend. This page explains the integration architecture and how to set up a self-hosted backend.

## What is Ever Gauzy?

**Ever® Gauzy™** is a comprehensive ERP/CRM/HRM platform built with NestJS. It provides:

- REST and GraphQL APIs
- Multi-tenant architecture
- Organization and employee management
- Time tracking engine
- Task and project management
- Role-based access control (RBAC)
- Integration framework (GitHub, JIRA, etc.)
- File storage (S3/MinIO)
- Full-text search (Elasticsearch)
- Analytics engine (Cube.js)

## API Endpoints

| Endpoint        | URL                        | Description             |
| --------------- | -------------------------- | ----------------------- |
| **Production**  | `https://api.ever.team`    | Official production API |
| **Demo**        | `https://apidemo.gauzy.co` | Demo/sandbox API        |
| **Self-hosted** | `http://localhost:3000`    | Local development API   |

## Running a Self-Hosted Backend

### Quick Setup with Docker

The easiest way to run a self-hosted backend is with Docker Compose:

```bash
# Clone Ever Teams (includes Docker Compose configs)
git clone https://github.com/ever-co/ever-teams.git
cd ever-teams

# Start all services (API + infrastructure)
docker-compose up
```

This brings up:

- **Gauzy API** on port `3000`
- **PostgreSQL** on port `5432`
- **Redis** on port `6379`
- **MinIO** on port `9000`
- **Elasticsearch** on port `9200`
- **Cube.js** on port `4000`
- **Zipkin** (tracing) on port `9411`

### Manual Setup

For manual backend setup, refer to the [Ever Gauzy README](https://github.com/ever-co/ever-gauzy/blob/develop/README.md):

```bash
# Clone Ever Gauzy
git clone https://github.com/ever-co/ever-gauzy.git
cd ever-gauzy

# Install dependencies
yarn install

# Start the API server
yarn start:api
```

### Connecting Ever Teams to Your Backend

Update the `.env` file in `apps/web/`:

```bash
# Point to your self-hosted API
GAUZY_API_SERVER_URL=http://localhost:3000/api
NEXT_PUBLIC_GAUZY_API_SERVER_URL=http://localhost:3000
```

## Infrastructure Services

The Ever Gauzy API depends on several infrastructure services:

### PostgreSQL

Primary database for all structured data (users, organizations, tasks, time logs, etc.).

```yaml
# docker-compose.infra.yml
db:
  image: postgres:15
  environment:
    POSTGRES_DB: gauzy
    POSTGRES_USER: postgres
    POSTGRES_PASSWORD: root
  ports:
    - "5432:5432"
```

### Redis

Used for caching, session storage, and pub/sub messaging.

```yaml
redis:
  image: redis:7-alpine
  ports:
    - "6379:6379"
```

### MinIO (S3-Compatible Storage)

Object storage for uploaded files, screenshots, and attachments.

```yaml
minio:
  image: quay.io/minio/minio
  command: server /data --console-address ":9001"
  ports:
    - "9000:9000"
    - "9001:9001"
```

### Elasticsearch

Full-text search engine for fast search across tasks, projects, and users.

```yaml
elasticsearch:
  image: docker.elastic.co/elasticsearch/elasticsearch:8.11.0
  ports:
    - "9200:9200"
```

### Cube.js

OLAP analytics engine for reporting dashboards and data aggregation.

```yaml
cube:
  image: cubejs/cube:latest
  ports:
    - "4000:4000"
```

## API Authentication

Ever Teams authenticates with the Gauzy API using **JWT tokens**:

1. User logs in via passcode/password/social login on the Ever Teams frontend
2. The auth flow exchanges credentials for a JWT token from Gauzy API
3. The JWT token is stored in the NextAuth.js session (server-side)
4. All subsequent API requests include the JWT in the `Authorization` header
5. The proxy layer (`app/api/`) injects these headers automatically

## Multi-Tenancy

The Gauzy API supports **multi-tenant architecture**:

- Each user can belong to multiple **organizations**
- Each organization has its own **teams**, **projects**, **tasks**, and **settings**
- The `tenant-id` header identifies the current tenant context
- Organization switching is handled by the workspace selector in the UI
