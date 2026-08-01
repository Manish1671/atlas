import type { Prisma } from "@prisma/client";
import { prisma } from "../../lib/prisma.js";
export class EventRepository {
  create(data: Prisma.TimelineEventUncheckedCreateInput) { return prisma.timelineEvent.create({ data }); }
  search(studentId: string, query?: string) { return prisma.timelineEvent.findMany({ where: { studentId, OR: query ? [{ title: { contains: query, mode: "insensitive" } }, { description: { contains: query, mode: "insensitive" } }, { tags: { has: query } }] : undefined }, orderBy: { date: "desc" }, take: 100 }); }
}
