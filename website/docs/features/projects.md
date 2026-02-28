---
id: projects
title: Projects
sidebar_label: Projects
sidebar_position: 4
description: Project management in Ever Teams — creating, organizing, and managing projects.
---

# Projects

Projects in Ever Teams provide a way to organize tasks, track time, and manage work for specific initiatives, clients, or product areas.

## Overview

A project is a container for:

- **Tasks** — Work items associated with the project
- **Time logs** — Time tracked against the project
- **Members** — Team members working on the project
- **Settings** — Project-specific configuration

## Creating Projects

1. Navigate to **Projects** from the sidebar
2. Click **Create Project**
3. Fill in project details:
   - **Name** — Project title
   - **Description** — Project overview
   - **Color** — Visual identifier
   - **Members** — Team members assigned
   - **Billing** — Budget and billing settings (optional)

## Project Views

### Project List

The main projects page shows all projects with:

- Project name and color
- Member count
- Total tracked time
- Task count
- Status indicator

### Project Detail

Click a project to see:

- Project overview and description
- Member list and roles
- Task list (filtered to this project)
- Time tracking summary
- Budget utilization (if configured)

## Assigning Tasks to Projects

Tasks can be assigned to projects during creation or later:

- When creating a task, select the project from the dropdown
- In task detail view, change the project association
- Drag tasks between projects in the project view

## Project Settings

Each project has configurable settings:

| Setting                | Description                             |
| ---------------------- | --------------------------------------- |
| **Name & Description** | Basic project information               |
| **Color**              | Project color for visual identification |
| **Members**            | Team members with access                |
| **Billing**            | Budget, rate, and billing configuration |
| **Status**             | Active, archived, or completed          |

## Budget & Billing

Projects can have budget tracking:

| Feature           | Description               |
| ----------------- | ------------------------- |
| **Budget hours**  | Total budgeted hours      |
| **Budget amount** | Total budget in currency  |
| **Hourly rate**   | Rate per hour for billing |
| **Spent**         | Hours/amount already used |
| **Remaining**     | Available budget          |

## Related API Routes

| Route                                | Methods          | Purpose                  |
| ------------------------------------ | ---------------- | ------------------------ |
| `/api/organization-projects`         | GET, POST        | List and create projects |
| `/api/organization-projects/[id]`    | GET, PUT, DELETE | Project CRUD             |
| `/api/organization-projects/setting` | GET, PUT         | Project settings         |
