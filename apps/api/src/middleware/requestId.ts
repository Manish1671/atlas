import type { RequestHandler } from "express";
import { nanoid } from "nanoid";
export const requestId: RequestHandler = (req, res, next) => {
  const id = req.header("x-request-id") ?? nanoid();
  req.id = id;
  res.setHeader("x-request-id", id);
  next();
};
