---
id: daily-plans
title: Daily Plans
sidebar_label: Daily plans
sidebar_position: 5
description: Daily planning feature for structured work planning in Ever Teams.
---

# Daily Plans

The Daily Plans feature helps team members plan their workday by selecting and organizing tasks they intend to work on each day.

## Overview

Daily planning provides:

- **Structured work planning** — Choose tasks for today from your backlog
- **Time estimation** — Set estimated hours for each planned task
- **Progress tracking** — See how your actual work compares to your plan
- **Team visibility** — Managers can see what each team member has planned

## Creating a Daily Plan

1. Navigate to the **Team view** or **Dashboard**
2. Open the **Daily Plan** panel
3. Browse available tasks from your team's backlog
4. Add tasks to today's plan
5. Set estimated hours for each task
6. Start working through your planned tasks

## Plan States

| State            | Description                              |
| ---------------- | ---------------------------------------- |
| **Planned**      | Tasks added to the plan, not yet started |
| **In Progress**  | Timer running on a planned task          |
| **Completed**    | Task marked as done                      |
| **Carried Over** | Unfinished tasks moved to the next day   |

## Features

### Task Selection

- Browse all team tasks
- Filter by assignee, status, project
- Drag to reorder priority within the plan

### Time Estimation

- Set expected hours per task
- View total planned hours vs. available hours
- Track actual vs. estimated time

### Past Plans

- View historical daily plans
- Review completion rate over time
- Identify patterns in planning accuracy

## Related Hooks

| Hook                  | Purpose                        |
| --------------------- | ------------------------------ |
| `useDailyPlan`        | Daily plan data and operations |
| `useDailyPlanActions` | Plan CRUD actions              |

## Related API Routes

| Route                       | Methods          | Purpose                    |
| --------------------------- | ---------------- | -------------------------- |
| `/api/daily-plan`           | GET, POST        | List and create plans      |
| `/api/daily-plan/[id]`      | GET, PUT, DELETE | Plan CRUD                  |
| `/api/daily-plan/me`        | GET              | Current user's plans       |
| `/api/daily-plan/[id]/task` | POST, DELETE     | Add/remove tasks from plan |
