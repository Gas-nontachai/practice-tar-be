import express from "express";
import {
  listUsers,
  showUser,
  createUserHandler,
  updateUserHandler,
  deleteUserHandler,
} from "@/controllers/users.controller.js";

const router = express.Router();

router.get("/", listUsers);
router.get("/:id", showUser);
router.post("/", createUserHandler);
router.put("/:id", updateUserHandler);
router.delete("/:id", deleteUserHandler);

export default router;
