import express from "express";
import {
  singleUpload,
  multipleUpload,
} from "@/utils/fileUpload.js";

const router = express.Router();

router.post(
  "/single",
  singleUpload("file", {
    folderPrefix: "single",
    filenamePrefix: "upload",
  }),
  (req, res) => {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    return res.json({
      message: "Single upload success",
      file: req.file,
    });
  }
);

router.post(
  "/multiple",
  multipleUpload("files", 10, {
    folderPrefix: "multiple",
    filenamePrefix: "upload",
  }),
  (req, res) => {
    const files = req.files || [];

    if (!files.length) {
      return res.status(400).json({ message: "No files uploaded" });
    }

    return res.json({
      message: "Multiple upload success",
      files,
    });
  }
);

export default router;
