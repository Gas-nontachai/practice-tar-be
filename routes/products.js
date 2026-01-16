import express from "express";

const router = express.Router();

let products = [
  {
    id: "1",
    name: "Wireless Mouse",
    price: 25.99,
    description: "A wireless mouse with ergonomic design and adjustable DPI.",
  },
  {
    id: "2",
    name: "Mechanical Keyboard",
    price: 79.99,
    description: "A mechanical keyboard with blue switches and RGB backlight.",
  },
];

router.get("/", (req, res) => {
  res.json(products);
});

router.get("/:id", (req, res) => {
  const product = products.find((p) => p.id === req.params.id);
  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }
  res.json(product);
});

router.post("/", (req, res) => {
  const { name, price, description } = req.body;
  if (!name) return res.status(400).json({ message: "name is required" });

  const newProduct = {
    id: String(Date.now()),
    name,
    price: Number(price) || 0,
    description: description || "",
  };

  products.push(newProduct);
  res.status(201).json(newProduct);
});

router.put("/:id", (req, res) => {
  const product = products.find((p) => p.id === req.params.id);
  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  product.name = req.body.name ?? product.name;
  product.price = req.body.price ?? product.price;
  product.description = req.body.description ?? product.description;
  res.json(product);
});

router.delete("/:id", (req, res) => {
  products = products = products.filter((p) => p.id !== req.params.id);
  res.status(204).end();
});

export default router;
