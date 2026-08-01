import { AppError } from "../../middleware/errorHandler.js";
import { StudentRepository } from "./student.repository.js";
export class StudentService {
  constructor(private repo = new StudentRepository()) {}
  async getDigitalTwin(studentId: string) {
    const student = await this.repo.findDigitalTwin(studentId);
    if (!student) throw new AppError(404, "Student not found", "STUDENT_NOT_FOUND");
    return student;
  }
  listForMentor(filters: { riskLevel?: "LOW" | "MEDIUM" | "HIGH"; minReadiness?: number; search?: string }) { return this.repo.listForMentor(filters); }
}
