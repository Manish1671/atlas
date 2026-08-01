import type { Request, Response } from "express";
import { EventService } from "./event.service.js";
const service = new EventService();
export class EventController {
  create = async (req: Request, res: Response) => res.status(201).json(await service.createTimelineEvent(req.body));
  search = async (req: Request, res: Response) => res.json(await service.search(req.params.studentId, String(req.query.q ?? "")));
}
