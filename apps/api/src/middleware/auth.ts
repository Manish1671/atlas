import type { RequestHandler } from "express";
import { AppError } from "./errorHandler.js";
import { verifyAccessToken, type TokenUser } from "../lib/tokens.js";
declare global { namespace Express { interface Request { id?: string; user?: TokenUser } } }
export const requireAuth: RequestHandler = (req, _res, next) => {
  const token = req.header("authorization")?.replace("Bearer ", "");
  if (!token) throw new AppError(401, "Authentication required", "UNAUTHENTICATED");
  req.user = verifyAccessToken(token);
  next();
};
