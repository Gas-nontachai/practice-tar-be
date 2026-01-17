import express from "express";
import {
  listProducts,
  showProduct,
  createProductHandler,
  updateProductHandler,
  deleteProductHandler,
} from "@/controllers/products.controller.js";

const router = express.Router();

router.get("/", listProducts);
router.get("/:id", showProduct);
router.post("/", createProductHandler);
router.put("/:id", updateProductHandler);
router.delete("/:id", deleteProductHandler);

export default router;
