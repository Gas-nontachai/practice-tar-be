import express from "express";
import cors from "cors";
import path from "node:path";
import userRoutes from "@/routes/users.js";
import productRoutes from "@/routes/products.js";
import roleRoutes from "@/routes/roles.js";
import uploadRoutes from "@/routes/uploads.js";

const app = express();
const PORT = 5120;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(process.cwd(), "public")));

app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/roles", roleRoutes);
app.use("/api/uploads", uploadRoutes);

app.get("/", (req, res) => {
  res.json({ message: "API is running" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
