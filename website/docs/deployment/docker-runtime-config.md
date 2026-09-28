---
id: docker-runtime-config
title: Runtime Configuration of the Docker Image
sidebar_label: Runtime configuration
sidebar_position: 2
description: The Ever Teams web image is built once and configured with container environment variables.
---

# Runtime Configuration of the Docker Image

The published web image (`everco/ever-teams-webapp`, `ghcr.io/ever-co/ever-teams-webapp`) contains nothing deployment-specific. The API URL, CAPTCHA keys, branding, analytics keys, Meet and Board endpoints, and every secret are read from the **container environment** at runtime — when the server starts, and on every page request.

To change a setting, update the environment and restart the container. No rebuild, no `--build-arg`.

:::info
Older images inlined deployment values into the browser bundle at build time, so the published image only worked for `app.ever.team`. That is no longer the case: a deployment value passed as a build argument has no effect.
:::

## docker run

```bash
docker run -d -p 3030:3030 \
  -e GAUZY_API_SERVER_URL=https://api.example.com \
  -e NEXT_PUBLIC_GAUZY_API_SERVER_URL=https://api.example.com \
  -e AUTH_SECRET="$(openssl rand -base64 32)" \
  -e APP_NAME="Acme Teams" \
  everco/ever-teams-webapp
```

You can also pass the reference file as is:

```bash
docker run -d -p 3030:3030 --env-file .env.docker everco/ever-teams-webapp
```

## Docker Compose

```yaml
services:
  webapp:
    image: everco/ever-teams-webapp:latest
    ports:
      - '3030:3030'
    environment:
      GAUZY_API_SERVER_URL: https://api.example.com
      NEXT_PUBLIC_GAUZY_API_SERVER_URL: https://api.example.com
      AUTH_SECRET: ${AUTH_SECRET}
```

Apply a change with `docker-compose up -d`: Compose recreates the container with the new environment.

## Kubernetes

Keep the values in a Secret and mount it into the Deployment:

```yaml
envFrom:
  - secretRef:
      name: ever-teams-web
```

Update the Secret and roll out the Deployment. The image tag does not change.

## Variable reference

[`.env.docker`](https://github.com/ever-co/ever-teams/blob/develop/.env.docker) in the main repository is the reference list: every runtime variable, its default, and what it does. [Configuration](../getting-started/configuration.md) groups the same variables by topic.

Rules worth knowing:

- An empty value means "unset": the built-in default applies.
- Only `NEXT_PUBLIC_*` and branding values are sent to the browser. Never put a secret in one.
- `GAUZY_API_SERVER_URL` must be reachable from inside the container; `NEXT_PUBLIC_GAUZY_API_SERVER_URL` must be reachable from the browser. Both are origins, without a trailing `/api`.
- `AUTH_SECRET` is required in production.

## What is still decided at build time

Deployment settings are never build arguments. The only `NEXT_PUBLIC_*` values the build still takes are:

| Build argument                                       | Effect                                                          |
| ---------------------------------------------------- | --------------------------------------------------------------- |
| `NEXT_PUBLIC_BUILD_VERSION`, `NEXT_PUBLIC_BUILD_SHA` | Version stamp of the image                                       |
| `NEXT_PUBLIC_IMAGES_HOSTS`                           | The `next/image` optimizer allowlist                             |
| `NEXT_PUBLIC_DEMO`                                   | The image's default for demo mode, still overridable at runtime  |

Extra image hosts can be added at runtime with the same `NEXT_PUBLIC_IMAGES_HOSTS` variable. Hosts that were not in the build-time list are served without Next.js image optimization.

## Image variants

| Image                     | Built from | Notes                                           |
| ------------------------- | ---------- | ----------------------------------------------- |
| `ever-teams-webapp`       | `main`     | Production image                                |
| `ever-teams-webapp-stage` | `stage`    | Staging image                                   |
| `ever-teams-webapp-dev`   | `develop`  | Demo image; defaults to `NEXT_PUBLIC_DEMO=true` |

Each is published to Docker Hub (`everco/`) and to the GitHub Container Registry (`ghcr.io/ever-co/`).
