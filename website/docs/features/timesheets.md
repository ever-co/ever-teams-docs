---
id: timesheets
title: Timesheet Management
sidebar_label: Timesheets
sidebar_position: 10
description: Reviewing, correcting and approving the team's tracked time in Ever Teams.
---

# Timesheet Management

Timesheets is where a manager reads the team's tracked time, corrects it and approves it. Open **Reports > Timesheets**.

The page is for team managers and administrators. An administrator sees everyone in the organization, and a team manager sees the members of the team they have open. A member reads and corrects their own time in **My work > Work diary**.

## The views

| View | What it shows |
| ---- | ------------- |
| Sheet | One member at a time, picked from the list of members: a row per task, a column per day, with the total of each day and of the period |
| List | The entries, grouped by day. **Group similar entries** folds the entries of the same task together |
| Week, Month | The period as a calendar; a click on a day opens that day in the list |
| Screenshots | A member's day in ten-minute slots, each with its screenshot, activity and apps |

The page opens on the view you used last.

The period is one of Today, Yesterday, This week, Last week, Last 7 days, This month or Last month. Entries can be filtered by member, project, task, client, billable time and label, and searched. The cards above the entries (All, Pending and the other statuses) filter every view except Screenshots.

## Adding and correcting time

### Add time

**Add time** opens a form with the task, the member, the project, whether the time is billable, notes, the date and the start and end times. **Add another period** adds a second range in the same form.

In the Sheet view, time can also be typed straight into a cell, as `1:30`, `1.5` or `90m`. **Add row** adds a task to the sheet, and **Copy last week** fills the week from the one before.

### Edit, delete, reuse

Each entry has a menu: **Edit**, **Delete**, **Approve**, **Reject**, **Change status**, **Billable**, **Continue** (start the timer on that task again) and **Duplicate**. An entry also keeps its history of changes.

Select several entries to **Approve**, **Reject** or **Delete** them together, or to change their project, task or billable setting in one go.

### What cannot be changed

A cell of the sheet is locked when filters hide part of the time, on a future day, on an approved day, and while a timer is running on that task that day. Approved entries and running timers are also left out of an edit of several entries.

Who may add, change or delete time depends on two things together:

- **The organization's switches**: manual time, changing time and deleting time can each be turned off for the whole organization.
- **The role's permissions**: `ALLOW_MANUAL_TIME`, `ALLOW_MODIFY_TIME` and `ALLOW_DELETE_TIME`.

An administrator can add time for anyone. Someone who only holds the permission to add time adds their own.

## Approving time

Time is approved by timesheet, which is a member's week: approving or rejecting changes the whole week at once.

| Status | Meaning |
| ------ | ------- |
| Pending | Waiting for a decision |
| In review | Being looked at |
| Approved | Accepted. Every day of that week is locked |
| Rejected | Sent back. A reason can be given, and is optional |
| Draft | Not yet put forward |

A team manager approves or rejects the timesheets of the members of the teams they manage, never their own. A person whose role has the permission to approve timesheets can set any status, on their own timesheet too.

## Screenshots, breaks and running timers

- **Screenshots**: time tracked with the timer of the web app has none, and the view says so.
- **Breaks**, where the organization uses them (**Settings > Workspace**), are listed apart: they are not in the sheet and not in the total.
- **A running timer** shows as "now" in the list, and locks its cell in the sheet until it stops.

## Exporting

**Export** gives the entries on screen, with the filters applied, as a CSV file, an Excel file or a PDF. Each line has the date, start, end, member, project, task, status, billable, labels, duration and notes. The Excel file and the PDF end with a total, and the PDF lists the filters.

## Related

- **[Time Tracking](./time-tracking)**: where the time comes from
- **[Reports](./reports)**: the same time, summed and compared
- **[Roles and Permissions](./roles-permissions)**: who holds which permission
