import express from "express";

const router = express.Router();

let products = [
  { id: 1, name: "tar" },
  { id: 2, name: "best" },
];

router.get("/", (req, res) => {
  res.json(products);
});

router.get("/:id", (req, res) => {
  const product = products.find((u) => u.id === Number(req.params.id));
  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }
  res.json(product);
});

router.post("/", (req, res) => {
  if (!req.body?.name) {
    return res.status(400).json({ message: "name is required" });
  }

  const newProduct = {
    id: Date.now(),
    name: req.body.name,
  };

  products.push(newProduct);
  res.status(201).json(newProduct);
});

router.put("/:id", (req, res) => {
  const product = products.find((u) => u.id === Number(req.params.id));
  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  product.name = req.body.name ?? product.name;
  res.json(product);
});

router.delete("/:id", (req, res) => {
  products = products.filter((u) => u.id !== Number(req.params.id));
  res.status(204).end();
});

export default router;
