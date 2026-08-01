export class DigitalTwinService {
  calculateReadiness(input: { cgpa?: number | null; attendanceRate?: number | null; codingConsistency?: number; projectQuality?: number; interviewScore?: number }) {
    const cgpa = Math.min(((input.cgpa ?? 0) / 10) * 25, 25);
    const attendance = Math.min(((input.attendanceRate ?? 0) / 100) * 15, 15);
    const coding = Math.min((input.codingConsistency ?? 0) * 0.25, 25);
    const projects = Math.min((input.projectQuality ?? 0) * 0.2, 20);
    const interviews = Math.min((input.interviewScore ?? 0) * 0.15, 15);
    return Math.round(cgpa + attendance + coding + projects + interviews);
  }
  riskFromScore(score: number) { return score < 45 ? "HIGH" : score < 70 ? "MEDIUM" : "LOW"; }
}
