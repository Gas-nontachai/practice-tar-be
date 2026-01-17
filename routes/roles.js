import express from "express";
import {
  listRoles,
  showRole,
  createRoleHandler,
  updateRoleHandler,
  deleteRoleHandler,
} from "@/controllers/roles.controller.js";

const router = express.Router();

router.get("/", listRoles);
router.get("/:id", showRole);
router.post("/", createRoleHandler);
router.put("/:id", updateRoleHandler);
router.delete("/:id", deleteRoleHandler);

export default router;
