import { Queue } from "bullmq";
import { redis } from "../../lib/redis.js";
import { EventRepository } from "./event.repository.js";
export const twinQueue = new Queue("digital-twin-events", { connection: redis });
export class EventService {
  constructor(private repo = new EventRepository()) {}
  async createTimelineEvent(input: any) {
    const event = await this.repo.create(input);
    await twinQueue.add("event.created", { eventId: event.id, studentId: event.studentId }, { attempts: 3, backoff: { type: "exponential", delay: 5000 } });
    return event;
  }
  search(studentId: string, query?: string) { return this.repo.search(studentId, query); }
}
