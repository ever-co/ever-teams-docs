---
title: Security
sidebar_label: Security
sidebar_position: 11
description: Security practices, best practices, and vulnerability reporting for Ever Teams.
---

# Security

Ever Teams follows industry security best practices. This page outlines the security model and how to report vulnerabilities.

## Security Model

### Authentication

| Mechanism          | Description                                      |
| ------------------ | ------------------------------------------------ |
| **Magic Code**     | Email-based passwordless authentication          |
| **Password**       | Traditional password authentication              |
| **OAuth / Social** | Google, GitHub, Facebook, Twitter SSO            |
| **JWT Tokens**     | Server-side session tokens with refresh rotation |
| **CAPTCHA**        | reCAPTCHA protection on auth pages               |

### Authorization

| Mechanism            | Description                                                                      |
| -------------------- | -------------------------------------------------------------------------------- |
| **RBAC**             | Role-Based Access Control with granular permissions                              |
| **Tenant isolation** | Multi-tenant architecture with per-organization data isolation                   |
| **API proxy**        | All API calls routed through server-side proxy (secrets never exposed to client) |

### Data Protection

| Practice               | Description                                                    |
| ---------------------- | -------------------------------------------------------------- |
| **HTTPS/TLS**          | All production endpoints use HTTPS                             |
| **Secrets management** | Environment variables for all secrets, never committed to code |
| **Password hashing**   | Bcrypt hashing for stored passwords (backend)                  |
| **Session security**   | Secure, HTTP-only cookies with SameSite                        |
| **Input validation**   | Server-side validation on all API endpoints                    |

## Production Security Checklist

Before deploying to production, ensure:

- [ ] **Change `AUTH_SECRET`** — Use a strong random string (32+ characters)
- [ ] **Enable HTTPS** — All client-server communication encrypted
- [ ] **Configure CAPTCHA** — Protect auth pages from bots
- [ ] **Set up CORS** — Restrict allowed origins
- [ ] **Enable CSP headers** — Content Security Policy
- [ ] **Restrict image domains** — Only allow trusted hosts in `NEXT_PUBLIC_IMAGES_HOSTS`
- [ ] **Secure OAuth secrets** — Use environment variables, not code
- [ ] **Configure SMTP securely** — Use TLS for email transmission
- [ ] **Set up Sentry** — Monitor for errors and security events
- [ ] **Regular updates** — Keep dependencies up to date
- [ ] **Use `snyk`** — The project includes Snyk for vulnerability scanning

## Vulnerability Reporting

:::caution
If you discover a security vulnerability, **do NOT create a public GitHub issue**. Instead, please report it responsibly:

📧 Email: **security@ever.co**
:::

## Dependency Security

| Tool           | Purpose                                  |
| -------------- | ---------------------------------------- |
| **Snyk**       | Automated vulnerability scanning         |
| **FOSSA**      | License compliance and security analysis |
| **Dependabot** | Automated dependency updates             |

## Disclaimer

Ever Teams Platform is provided **AS IS** without any warranty. While we follow good security practices, 100% security cannot be guaranteed in any software. Use at your own risk. See [LICENSES.md](https://github.com/ever-co/ever-teams/blob/master/LICENSES.md) for details.
