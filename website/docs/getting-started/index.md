---
id: getting-started
title: Getting started
sidebar_label: Getting started
sidebar_position: 2
description: Get up and running with Ever Teams — prerequisites, installation, and first-run configuration.
---

# Getting Started

This section walks you through everything you need to set up Ever Teams for local development or production use. Pick the path that matches your goal:

| Goal                            | Guide                                                             |
| ------------------------------- | ----------------------------------------------------------------- |
| **Run locally for development** | [Installation](./installation) → [Configuration](./configuration) |
| **Deploy with Docker quickly**  | [Docker Quick Start](../deployment/docker-quick-start)            |
| **Deploy to a cloud platform**  | [Deployment Guide](../deployment/)                                |

## Prerequisites

Before you begin, make sure you have the following installed:

| Tool                                               | Minimum Version | Purpose                                            |
| -------------------------------------------------- | --------------- | -------------------------------------------------- |
| [Node.js](https://nodejs.org)                      | `>= 24.x`       | JavaScript runtime                                 |
| [Yarn](https://yarnpkg.com)                        | `>= 1.13.0`     | Package manager                                    |
| [Git](https://git-scm.com)                         | Latest          | Version control                                    |
| [Docker](https://www.docker.com)                   | `>= 20.10`      | Containerization (optional, for Docker deployment) |
| [Docker Compose](https://docs.docker.com/compose/) | `>= 2.20`       | Multi-container orchestration (optional)           |

## Quick Start (3 Steps)

```bash
# 1. Clone the repository
git clone https://github.com/ever-co/ever-teams.git
cd ever-teams

# 2. Install dependencies
yarn install

# 3. Start the web app in development mode
yarn start:web:dev
```

Open [http://localhost:3030](http://localhost:3030) in your browser.

:::info
By default, the web frontend connects to the production Ever Gauzy API at `https://api.ever.team`. To use a self-hosted backend, see the [Configuration](./configuration) guide.
:::

## What's Next?

- **[Installation](./installation)** — Detailed installation instructions for all platforms.
- **[Configuration](./configuration)** — Environment variables, API endpoints, OAuth, and more.
- **[Architecture Overview](../architecture/overview)** — Understand how the codebase is organized.
