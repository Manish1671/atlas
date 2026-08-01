import { Router } from "express";
import { requireAuth } from "../../middleware/auth.js";
import { requireRole } from "../../middleware/rbac.js";
import { StudentController } from "./student.controller.js";
const router = Router();
const controller = new StudentController();
router.get("/", requireAuth, requireRole("MENTOR", "ADMIN"), controller.list);
router.get("/:studentId/digital-twin", requireAuth, controller.getMe);
export { router as studentRoutes };
