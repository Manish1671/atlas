import jwt from "jsonwebtoken";
import { env } from "../config/env.js";
export type TokenUser = { sub: string; role: "STUDENT" | "MENTOR" | "ADMIN"; email: string };
export const signAccessToken = (user: TokenUser) => jwt.sign(user, env.JWT_ACCESS_SECRET, { expiresIn: env.ACCESS_TOKEN_TTL });
export const signRefreshToken = (user: TokenUser) => jwt.sign(user, env.JWT_REFRESH_SECRET, { expiresIn: `${env.REFRESH_TOKEN_TTL_DAYS}d` });
export const verifyAccessToken = (token: string) => jwt.verify(token, env.JWT_ACCESS_SECRET) as TokenUser;
