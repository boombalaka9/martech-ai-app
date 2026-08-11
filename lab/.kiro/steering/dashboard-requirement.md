---
inclusion: always
---

# Dashboard Requirement

Every web application must include a dashboard view that shows an overall summary of the application's data and results.

## Rules

- Always create a dashboard page or view accessible from the main navigation
- The dashboard should provide a high-level overview of all key entities and their statuses
- Include summary cards with counts and category breakdowns (e.g. total, by status, by type)
- Include a visual distribution chart (bar chart, progress bars, or similar) showing how entities are distributed across categories
- Show an aggregate metric when applicable (e.g. average score, total count, completion rate)
- Items not yet processed should appear as "Not assessed" or "Pending" rather than being hidden
- Include a refresh button so users can reload the dashboard after performing actions elsewhere in the app
- The dashboard should be useful for demo purposes — it tells the story of the data at a glance
