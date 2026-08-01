import type { Request, Response } from "express";
import { AuthService } from "./auth.service.js";
const service = new AuthService();
export class AuthController {
  register = async (req: Request, res: Response) => res.status(201).json(await service.register(req.body));
  login = async (req: Request, res: Response) => res.json(await service.login(req.body));
}
