import crypto from "node:crypto";
import { Role } from "@prisma/client";
import { AppError } from "../../middleware/errorHandler.js";
import { hashPassword, verifyPassword } from "../../lib/password.js";
import { signAccessToken, signRefreshToken } from "../../lib/tokens.js";
import { AuthRepository } from "./auth.repository.js";
export class AuthService {
  constructor(private repo = new AuthRepository()) {}
  async register(input: { name: string; email: string; password: string; role: Role }) {
    if (await this.repo.findByEmail(input.email)) throw new AppError(409, "Email already registered", "EMAIL_EXISTS");
    const user = await this.repo.createUser({ name: input.name, email: input.email, role: input.role, passwordHash: await hashPassword(input.password) });
    return this.issueTokens(user);
  }
  async login(input: { email: string; password: string }) {
    const user = await this.repo.findByEmail(input.email);
    if (!user?.passwordHash || !(await verifyPassword(input.password, user.passwordHash))) throw new AppError(401, "Invalid credentials", "INVALID_CREDENTIALS");
    return this.issueTokens(user);
  }
  private async issueTokens(user: { id: string; email: string; role: Role; name: string }) {
    const payload = { sub: user.id, email: user.email, role: user.role };
    const refreshToken = signRefreshToken(payload);
    await this.repo.createRefreshToken({ userId: user.id, tokenHash: crypto.createHash("sha256").update(refreshToken).digest("hex"), expiresAt: new Date(Date.now() + 30 * 864e5) });
    return { user: { id: user.id, email: user.email, role: user.role, name: user.name }, accessToken: signAccessToken(payload), refreshToken };
  }
}
