import type { Request, Response } from "express";
import { StudentService } from "./student.service.js";
const service = new StudentService();
export class StudentController {
  getMe = async (req: Request, res: Response) => res.json(await service.getDigitalTwin(req.params.studentId as string));
  list = async (req: Request, res: Response) => res.json(await service.listForMentor(req.query as any));
}
