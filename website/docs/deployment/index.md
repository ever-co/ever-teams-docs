---
title: Deployment
sidebar_label: Deployment
sidebar_position: 6
description: Deploy Ever Teams to Docker, Vercel, DigitalOcean, and other platforms.
---

# Deployment

Ever Teams can be deployed in multiple ways — from one-click cloud deployments to self-hosted Docker setups.

## Deployment Options

| Method                                             | Best For                            | Time to Deploy |
| -------------------------------------------------- | ----------------------------------- | -------------- |
| **[Docker Quick Start](./docker-quick-start)**     | Quick exploration, self-hosted demo | ⚡ 5 minutes   |
| **[Runtime Configuration](./docker-runtime-config)** | Configuring a published image     | ⚡ 5 minutes   |
| **[Docker Production](./docker-dev-vs-prod)**      | Self-hosted production              | 🔧 15 minutes  |
| **[Vercel](./cloud-platforms#vercel)**             | Serverless, zero-ops                | ⚡ 2 minutes   |
| **[DigitalOcean](./cloud-platforms#digitalocean)** | Full control, VPS                   | 🔧 30 minutes  |
| **[Render](./cloud-platforms#render)**             | Simple PaaS                         | ⚡ 5 minutes   |
| **[Railway](./cloud-platforms#railway)**           | Modern PaaS                         | ⚡ 5 minutes   |
| **[Fly.io](./cloud-platforms#fly)**                | Edge deployment                     | 🔧 10 minutes  |
| **[Other](./cloud-platforms)**                     | Netlify, Heroku, Koyeb, Northflank  | Varies         |

## Prerequisites

For all deployment methods, you need:

- Access to an **Ever Gauzy API** instance (production at `https://api.ever.team` or self-hosted)
- **Environment variables** configured (see [Configuration](../getting-started/configuration))

## Guides

- **[Docker Quick Start](./docker-quick-start)** — Get running with Docker Compose in minutes
- **[Runtime Configuration](./docker-runtime-config)** — Configure the published image with container environment variables
- **[Docker Environments](./docker-dev-vs-prod)** — Development vs. production Docker configurations
- **[Deployment Secrets](./deployment-secrets)** — Managing secrets and sensitive configuration
- **[Cloud Platforms](./cloud-platforms)** — One-click deployment to Vercel, Render, Railway, and more
