---
id: cloud-platforms
title: Cloud Platform Deployment
sidebar_label: Cloud platforms
sidebar_position: 4
description: Deploy Ever Teams to Vercel, DigitalOcean, Render, Railway, Fly.io, and other cloud platforms.
---

# Cloud Platform Deployment

Ever Teams supports one-click deployment to several cloud platforms.

## Vercel

[Vercel](https://vercel.com) is the recommended platform for the web application (Next.js).

### One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fever-co%2Fever-teams&project-name=ever-teams&repository-name=ever-teams&output-directory=.next&build-command=yarn%20build&install-command=yarn%20install%20--frozen-lockfile&root-directory=apps%2Fweb)

### Manual Setup

1. Fork the [Ever Teams repository](https://github.com/ever-co/ever-teams)
2. Create a new project in [Vercel Dashboard](https://vercel.com/dashboard)
3. Import your fork
4. Set the **Root Directory** to `apps/web`
5. Configure environment variables (see [Configuration](../getting-started/configuration))
6. Deploy

### Key Settings

| Setting          | Value                            |
| ---------------- | -------------------------------- |
| Root Directory   | `apps/web`                       |
| Build Command    | `yarn build`                     |
| Install Command  | `yarn install --frozen-lockfile` |
| Output Directory | `.next`                          |

## DigitalOcean

Deploy to DigitalOcean's App Platform or a Droplet.

See the [Wiki guide](https://github.com/ever-co/ever-teams/wiki/Deploy-to-DigitalOcean) for detailed instructions.

### CI/CD Workflows

| Workflow              | Purpose                             |
| --------------------- | ----------------------------------- |
| `deploy-do-dev.yml`   | Deploy to DigitalOcean (dev)        |
| `deploy-do-stage.yml` | Deploy to DigitalOcean (staging)    |
| `deploy-do-prod.yml`  | Deploy to DigitalOcean (production) |
| `deploy-api-do-*.yml` | Deploy API to DigitalOcean          |

## Render

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/ever-co/ever-teams)

Render uses the `render.yaml` blueprint for configuration:

- Web service for the Next.js app
- Environment variables from the Render dashboard
- Auto-deploy on push to `main`

## Railway

[![Deploy to Railway](https://railway.app/button.svg)](https://railway.app/template/7_OfzR?referralCode=40jeja)

Railway provides:

- Automatic builds from GitHub
- Environment variable management
- Custom domains
- PostgreSQL and Redis add-ons

## Fly.io

[![Deploy to Fly](https://ever.team/fly.png)](https://github.com/ever-co/ever-teams/wiki/Deploy-to-Fly)

Uses `fly.toml` for configuration:

```toml
app = "ever-teams"

[build]
  image = "ghcr.io/ever-co/ever-teams-webapp:latest"

[[services]]
  internal_port = 3030
  protocol = "tcp"

  [[services.ports]]
    handlers = ["http"]
    port = 80

  [[services.ports]]
    handlers = ["tls", "http"]
    port = 443
```

## Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/ever-co/ever-teams)

## Heroku

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

Uses `heroku.yml` and `Procfile` for configuration.

## Koyeb

[![Deploy to Koyeb](https://www.koyeb.com/static/images/deploy/button.svg)](https://app.koyeb.com/deploy?name=ever-teams&type=docker&builder=dockerfile&image=ghcr.io/ever-co/ever-teams-webapp:latest&env[PORT]=3030&ports=3030;http;/)

## Northflank

[Deploy to Northflank](https://app.northflank.com/s/account/templates/new?data=656ed069216b5d387f5379c6)

## Docker Hub Images

Pre-built Docker images are available:

| Image                               | Registry                                                                                        |
| ----------------------------------- | ----------------------------------------------------------------------------------------------- |
| `everco/ever-teams-webapp`          | [Docker Hub](https://hub.docker.com/r/everco/ever-teams-webapp)                                 |
| `ghcr.io/ever-co/ever-teams-webapp` | [GitHub Container Registry](https://github.com/orgs/ever-co/packages?tab=packages&q=ever-teams) |
