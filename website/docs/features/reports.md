---
id: reports
title: Reports & Analytics
sidebar_label: Reports
sidebar_position: 11
description: The reports of Ever Teams on tracked time, limits, plans, payments and budgets, with exports and shared links.
---

# Reports & Analytics

The **Reports** group of the sidebar holds seven pages. It is shown to team managers and administrators.

| Report | What it answers |
| ------ | --------------- |
| [Timesheets](./timesheets) | What did each member track, and is it approved? |
| Time & activity | Where did the time go, by day, member, project, task, client or label? |
| Manual time edits | How much time was added or changed by hand? |
| Weekly limit | Who is near or over their weekly limit? |
| Actual & expected hours | Did people work what they planned? |
| Payments due | What does the tracked time come to, at each member's rate? |
| Project budget | How much of each project's budget is used? |

A member without access to Reports still reads their own **Time & activity**, from **My work**.

## Time & activity

The report shows its key figures, a chart of the tracked time per day, and a table.

- **Group by**: date, week, member, project, task, client or label
- **Columns**: projects, tracked time, earnings, billable amount, activity and share
- **Filters**: teams, members, projects, tasks, clients, billable only, labels
- **Export**: PDF, Excel, CSV

### Saved reports

A set of filters and groupings can be saved under a name: **Save**, then **Update**, **Rename** or **Delete** it later. Saved reports exist for Time & activity only.

### Sharing a report by link

A saved report can be shared with someone who has no account, a client for example.

1. Open the saved report and choose to share it.
2. **Turn link on**. Optionally set an **Ends on** date, and choose whether to **Include amounts**.
3. **Copy** the address. It is shown only at this moment, so copy it before closing.

The person who opens the link reads the report's name, period, figures, chart and table, and can change nothing.

A link stops working when it is turned off, when it is replaced by a new one (**Replace link**), on its end date, or when the saved report is deleted. The page then says that the link no longer works.

:::note
A link cannot be turned on from a session opened with an API token: sign in to the web app to do it.
:::

## Manual time edits

Shows the time entries added by hand or edited afterwards, their share of all tracked time, and who adds time by hand.

- **Group by**: day or member
- **Filters**: members, projects, billable, the kind of change (added or edited)
- **Export**: CSV, PDF

## Weekly limit

Compares each member's tracked time with their weekly limit, or with the organization's standard when they have none. Each line reads **Within**, **Near** or **Over**.

- **Limit period**: weekly, or daily (a fifth of the weekly limit per day)
- **Group by**: date or member, with a filter on members
- **Export**: CSV, and PDF by day, by week or by member

## Actual & expected hours

Sets the hours planned in daily plans against the hours tracked, and shows who is **Over plan**, **Under plan** or **Without a plan**.

- **Group by**: member or day, with a filter on members
- **Export**: PDF, CSV

## Payments due

Multiplies the tracked time by each member's current rate, per currency.

- **Group by**: member or day, with a filter on members
- **Export**: PDF, CSV

:::note
This report computes what is due. Ever Teams does not record the payments themselves.
:::

## Project budget

Shows, for each project with a budget in hours or in cost, what is **Spent**, **Remaining** and **Used**, and flags the projects that are **Within**, **Near** (90 % or more) or **Over** their budget.

- **Budget scope**: the whole project, or a period
- **Filters**: projects, budget type, status
- **Export**: PDF, CSV

## Related

- **[Timesheet Management](./timesheets)**: approve and correct the time the reports sum
- **[Daily Plans](./daily-plans)**: the plans behind Actual & expected hours
- **[Time Tracking](./time-tracking)**: where the time comes from
