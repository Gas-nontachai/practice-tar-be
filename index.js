import express from "express";
import cors from "cors";
import userRoutes from "@/routes/users.js";
import productRoutes from "@/routes/products.js";

const app = express();
const PORT = 5120;

app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.json({ message: "API is running" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
