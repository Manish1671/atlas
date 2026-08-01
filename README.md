# Atlas

Atlas is an AI-powered Student Digital Twin Platform. It models each student's academic, coding, productivity, and career journey from event-driven data, then turns those events into analytics, readiness scores, recommendations, AI mentor answers, and weekly summaries.

## Milestones Implemented

1. Project architecture and monorepo setup.
2. Backend foundation with Express, TypeScript, Prisma, PostgreSQL, Redis, BullMQ, validation, logging, errors, and request IDs.
3. Authentication and RBAC with JWTs, refresh-token persistence, password hashing, role guards, and Google OAuth extension point.
4. Student profile schema for skills, goals, portfolio, GitHub, LinkedIn, resume, and certificates.
5. Academic schema for semesters, subjects, attendance, assignments, CGPA, credits, internals, and backlogs.
6. Timeline engine with searchable TimelineEvent records and queued projection jobs.
7. Coding intelligence integration boundaries for GitHub and LeetCode ingestion.
8. Career module schema for projects, applications, companies, interviews, and offers.
9. Recommendation engine persistence with priorities, due dates, and completion state.
10. AI Mentor service using Gemini against actual student twin data.
11. Weekly Wrapped schema with AI summary, metrics, recommendations, and PDF URL field.
12. Mentor dashboard UI with dense SaaS layout, charts, timeline, focus plan, and dark styling.
13. Dockerization with multi-stage API and web builds.
14. GitHub Actions CI/CD with quality, Docker push, Trivy, and Render deploy.
15. Documentation for architecture, ERD, API, env, Docker, deployment, testing, and roadmap.

## Quick Start

```bash
cp .env.example .env
pnpm install
pnpm db:generate
docker compose up -d postgres redis
pnpm db:migrate
pnpm dev
```

API: http://localhost:4000
Web: http://localhost:5173
Swagger: http://localhost:4000/docs

## Architecture

Backend flow: Controller -> Service -> Repository -> Prisma/PostgreSQL. Controllers only handle HTTP concerns. Services own workflows. Repositories own database access. Timeline events are the event stream for student digital twin projections.
