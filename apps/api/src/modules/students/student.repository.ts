import { prisma } from "../../lib/prisma.js";
export class StudentRepository {
  findDigitalTwin(studentId: string) {
    return prisma.student.findUnique({ where: { id: studentId }, include: { user: true, skills: true, semesters: { include: { subjects: { include: { attendance: true, assignments: true } } } }, projects: true, certificates: true, timelineEvents: { orderBy: { date: "desc" }, take: 20 }, recommendations: { where: { completedAt: null }, orderBy: { priority: "desc" } }, applications: { include: { company: true, interviews: true } } } });
  }
  listForMentor(filters: { riskLevel?: "LOW" | "MEDIUM" | "HIGH"; minReadiness?: number; search?: string }) {
    return prisma.student.findMany({ where: { riskLevel: filters.riskLevel, readinessScore: filters.minReadiness ? { gte: filters.minReadiness } : undefined, user: filters.search ? { name: { contains: filters.search, mode: "insensitive" } } : undefined }, include: { user: true, skills: true }, orderBy: [{ riskLevel: "desc" }, { readinessScore: "desc" }], take: 50 });
  }
}
