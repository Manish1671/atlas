# Architecture

```mermaid
flowchart LR
  Web[React Web] --> API[Express API]
  API --> Controllers
  Controllers --> Services
  Services --> Repositories
  Repositories --> Prisma
  Prisma --> Postgres[(PostgreSQL)]
  Services --> Redis[(Redis)]
  Services --> BullMQ[BullMQ Queues]
  BullMQ --> Workers[Projection Workers]
  Workers --> Gemini[Gemini API]
```
