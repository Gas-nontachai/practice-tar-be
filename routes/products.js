import express from "express";

const router = express.Router();

let products = [
  {
    id: "1",
    name: "Wireless Mouse",
    price: 25.99,
    description: "A wireless mouse with ergonomic design and adjustable DPI."
  },
  {
    id: "2",
    name: "Mechanical Keyboard",
    price: 79.99,
    description: "A mechanical keyboard with blue switches and RGB backlight."
  },
  {
    id: "3",
    name: "USB-C Hub",
    price: 39.5,
    description: "A USB-C hub with HDMI, USB 3.0, and SD card reader ports."
  },
  {
    id: "4",
    name: "External SSD",
    price: 129.0,
    description: "A portable external SSD with fast data transfer speed."
  },
  {
    id: "5",
    name: "Noise Cancelling Headset",
    price: 59.99,
    description: "A headset with noise cancelling microphone for online meetings."
  }
];

router.get("/", (req, res) => {
  res.json(products);
});

router.get("/:id", (req, res) => {
  const product = products.find((u) => u.id === req.params.id);
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
  const product = products.find((u) => u.id === req.params.id);
  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  product.name = req.body.name ?? product.name;
  res.json(product);
});

router.delete("/:id", (req, res) => {
  products = products.filter((u) => u.id !== req.params.id);
  res.status(204).end();
});

export default router;
