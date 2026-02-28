---
title: Development Guide
sidebar_label: Development
sidebar_position: 9
description: Contributing, code style, testing, and debugging guides for Ever Teams.
---

# Development Guide

This guide covers everything you need to contribute to Ever Teams — code conventions, testing practices, debugging tips, and the contribution workflow.

## Contributing

### Getting Started

1. **Fork** the [Ever Teams repository](https://github.com/ever-co/ever-teams)
2. **Clone** your fork locally
3. **Create a branch** from `develop`: `git checkout -b feature/my-feature develop`
4. **Make changes** and commit with [Conventional Commits](https://www.conventionalcommits.org/)
5. **Push** and open a Pull Request against `develop`

### Commit Convention

All commits must follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

| Type       | Description              |
| ---------- | ------------------------ |
| `feat`     | New feature              |
| `fix`      | Bug fix                  |
| `test`     | Adding or updating tests |
| `build`    | Build system changes     |
| `refactor` | Code refactoring         |
| `docs`     | Documentation changes    |
| `chore`    | Maintenance tasks        |

Tools: `commitizen` (interactive commit helper), `commitlint` (commit message validation), `husky` (git hooks)

### Pull Request Guidelines

- Base your PR against the `develop` branch
- Include a clear description of the changes
- Reference any related issues
- Ensure all CI checks pass
- Follow the PR template in `.github/PULL_REQUEST_TEMPLATE.md`

## Code Style

### TypeScript

- **Strict mode** enabled across all packages
- Use TypeScript for all new code
- Avoid `any` types — use proper typing

### Formatting

| Tool          | Configuration                                                   |
| ------------- | --------------------------------------------------------------- |
| **Prettier**  | `.prettierrc` — 120 char width, single quotes, tabs, semicolons |
| **ESLint**    | `.eslintrc.json` — TypeScript, React, and Next.js rules         |
| **Stylelint** | `.stylelintrc.json` — CSS/SCSS rules                            |

### Editor Configuration

| Setting         | Value                         |
| --------------- | ----------------------------- |
| Print width     | 120                           |
| Quotes          | Single                        |
| Indentation     | Tabs (4 spaces for SCSS/YAML) |
| Semicolons      | Yes                           |
| Trailing commas | None                          |
| Arrow parens    | Always                        |

### Running Formatters

```bash
# Format all code
yarn format

# Lint code
yarn lint

# Auto-fix lint issues
yarn lint-fix

# Spell check
yarn spell
```

## Testing

### Unit Tests

```bash
# Run all tests
yarn test

# Run tests for a specific app
cd apps/web && yarn test
```

### E2E Tests

```bash
# Run E2E tests
yarn e2e

# Run E2E CI
yarn e2e:ci
```

### Mobile Tests

```bash
# Unit tests
cd apps/mobile && yarn test

# E2E tests (Detox)
cd apps/mobile && yarn detox:build && yarn detox:test
```

## Debugging

### Web Application

1. **Browser DevTools** — React DevTools, Network tab
2. **Recoil DevTools** — For state inspection
3. **Next.js Debug Mode** — `NODE_OPTIONS='--inspect' yarn start:web:dev`
4. **Logging** — Client and server-side loggers (see [API Layer](../architecture/api-layer))

### VS Code Configuration

The project includes VS Code settings in `.vscode/`:

- Recommended extensions
- Debug launch configurations
- Editor settings

### Common Debug Scenarios

| Scenario       | Approach                                                |
| -------------- | ------------------------------------------------------- |
| API errors     | Check Network tab, look at proxy route logs             |
| State issues   | Use Recoil DevTools, add console logs in stores         |
| Build failures | Check `yarn build:web` output, review TypeScript errors |
| Performance    | Use `ANALYZE=true yarn build:web` for bundle analysis   |

## Project Scripts

| Script               | Description                    |
| -------------------- | ------------------------------ |
| `yarn start:web:dev` | Start web with hot-reload      |
| `yarn build:web`     | Production build               |
| `yarn dev:web`       | Build packages + start web dev |
| `yarn lint`          | Lint all packages              |
| `yarn format`        | Format all code                |
| `yarn test`          | Run test suite                 |
| `yarn spell`         | Check spelling                 |
| `yarn knip:web`      | Find unused code (web)         |
| `yarn dep-graph`     | View dependency graph          |

## Tooling

| Tool            | Purpose                            |
| --------------- | ---------------------------------- |
| **NX**          | Workspace orchestration            |
| **Turborepo**   | Build caching and pipelines        |
| **Lerna**       | Package versioning                 |
| **Husky**       | Git hooks (pre-commit, commit-msg) |
| **lint-staged** | Run linters on staged files        |
| **Commitizen**  | Interactive commit helper          |
| **cspell**      | Code spell checker                 |
