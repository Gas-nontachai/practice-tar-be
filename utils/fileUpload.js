import fs from "node:fs";
import path from "node:path";
import multer from "multer";

const resolvePrefix = (prefix, req, file) => {
  if (!prefix) return "";
  if (typeof prefix === "function") return prefix(req, file) || "";
  return String(prefix);
};

const sanitizeSegment = (value) =>
  String(value).replace(/[^a-zA-Z0-9._-]/g, "_");

const ensureDir = (dir) => {
  fs.mkdirSync(dir, { recursive: true });
};

const createStorage = ({ baseDir, folderPrefix, filenamePrefix }) =>
  multer.diskStorage({
    destination(req, file, cb) {
      const folder = resolvePrefix(folderPrefix, req, file);
      const safeFolder = folder ? sanitizeSegment(folder) : "";
      const targetDir = safeFolder ? path.join(baseDir, safeFolder) : baseDir;
      ensureDir(targetDir);
      cb(null, targetDir);
    },
    filename(req, file, cb) {
      const prefix = resolvePrefix(filenamePrefix, req, file);
      const safePrefix = prefix ? sanitizeSegment(prefix) : "";
      const original = path.basename(file.originalname);
      const safeOriginal = sanitizeSegment(original);
      const fileName = safePrefix
        ? `${safePrefix}-${Date.now()}-${safeOriginal}`
        : `${Date.now()}-${safeOriginal}`;
      cb(null, fileName);
    },
  });

export const createUploader = (options = {}) => {
  const {
    baseDir = "uploads",
    folderPrefix,
    filenamePrefix,
    limits,
    fileFilter,
  } = options;

  return multer({
    storage: createStorage({ baseDir, folderPrefix, filenamePrefix }),
    limits,
    fileFilter,
  });
};

export const singleUpload = (fieldName, options) =>
  createUploader(options).single(fieldName);

export const multipleUpload = (fieldName, maxCount, options) =>
  createUploader(options).array(fieldName, maxCount);
