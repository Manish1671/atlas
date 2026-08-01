import type { RequestHandler } from "express";
import { AppError } from "./errorHandler.js";
export const requireRole = (...roles: Array<"STUDENT" | "MENTOR" | "ADMIN">): RequestHandler => (req, _res, next) => {
  if (!req.user || !roles.includes(req.user.role)) throw new AppError(403, "Insufficient permissions", "FORBIDDEN");
  next();
};
