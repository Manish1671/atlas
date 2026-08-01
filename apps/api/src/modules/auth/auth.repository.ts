import type { Prisma, Role } from "@prisma/client";
import { prisma } from "../../lib/prisma.js";
export class AuthRepository {
  findByEmail(email: string) { return prisma.user.findUnique({ where: { email } }); }
  createUser(data: { email: string; name: string; passwordHash: string; role: Role }) {
    return prisma.user.create({ data: { ...data, student: data.role === "STUDENT" ? { create: {} } : undefined, mentor: data.role === "MENTOR" ? { create: {} } : undefined } });
  }
  createRefreshToken(data: Prisma.RefreshTokenUncheckedCreateInput) { return prisma.refreshToken.create({ data }); }
}
