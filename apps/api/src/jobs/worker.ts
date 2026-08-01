import { Worker } from "bullmq";
import { redis } from "../lib/redis.js";
import { logger } from "../lib/logger.js";
new Worker("digital-twin-events", async job => {
  logger.info({ jobId: job.id, ...job.data }, "updating digital twin projections");
  return { ok: true };
}, { connection: redis });
