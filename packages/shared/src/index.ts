export const roles = ["STUDENT", "MENTOR", "ADMIN"] as const;
export type Role = typeof roles[number];
export type TimelineEventType = "ACADEMIC" | "CODING" | "CAREER" | "ACHIEVEMENT" | "SYSTEM";
