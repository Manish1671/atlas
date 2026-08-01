import type { ErrorRequestHandler } from "express";
import { ZodError } from "zod";
import { logger } from "../lib/logger.js";
export class AppError extends Error { constructor(public statusCode: number, message: string, public code = "APP_ERROR") { super(message); } }
export const errorHandler: ErrorRequestHandler = (error, req, res, _next) => {
  if (error instanceof ZodError) return res.status(400).json({ error: "VALIDATION_ERROR", issues: error.flatten() });
  const status = error instanceof AppError ? error.statusCode : 500;
  logger.error({ err: error, requestId: req.id }, "request failed");
  return res.status(status).json({ error: error.code ?? "INTERNAL_ERROR", message: status === 500 ? "Unexpected server error" : error.message });
};
