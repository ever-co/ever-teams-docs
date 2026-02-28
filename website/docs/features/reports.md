---
id: reports
title: Reports & Analytics
sidebar_label: Reports
sidebar_position: 11
description: Activity reports, time reports, and productivity analytics in Ever Teams.
---

# Reports & Analytics

Ever Teams provides comprehensive reporting capabilities for time tracking, activity monitoring, and productivity analysis at `/reports`.

## Report Types

### Weekly Report

- Weekly time summary per team member
- Task completion metrics
- Activity level breakdown
- Planned vs. actual hours
- Exportable format

### Time & Activity Report

- Detailed time logs with activity levels
- Application and URL activity breakdown
- Screenshot review (desktop app data)
- Day-by-day breakdown
- Grouped by employee, task, project, or date

### Apps & URLs Report

- Application usage breakdown
- Website/URL visit tracking
- Time spent per app/URL
- Activity classification

### Manual Time Report

- Review manually entered time
- Compare manual vs. tracked time
- Identify discrepancies

## Filtering options

| Filter             | Description                                      |
| ------------------ | ------------------------------------------------ |
| **Date range**     | Select custom or preset time periods             |
| **Team members**   | Filter by one or more members                    |
| **Projects**       | Filter by project                                |
| **Tasks**          | Filter by specific tasks                         |
| **Activity level** | Filter by activity percentage                    |
| **Source**         | Filter by tracking source (web, desktop, mobile) |

## Export

Reports can be exported in multiple formats:

- **CSV** — For spreadsheet analysis
- **PDF** — For formal reporting

## Related Hooks

| Hook                    | Purpose                  |
| ----------------------- | ------------------------ |
| `useReportActivity`     | Report data fetching     |
| `useTimeActivityStats`  | Activity statistics      |
| `useTimeDailyActivity`  | Daily activity breakdown |
| `useExportProgress`     | Export progress tracking |
| `useTimeActivityExport` | Time activity export     |
