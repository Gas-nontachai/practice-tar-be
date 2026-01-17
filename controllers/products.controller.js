import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "@/services/products.service.js";

const listProducts = (req, res) => {
  res.json(getProducts());
};

const showProduct = (req, res) => {
  const product = getProductById(req.params.id);
  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }
  res.json(product);
};

const createProductHandler = (req, res) => {
  const { name, price, description } = req.body;
  if (!name) {
    return res.status(400).json({ message: "name is required" });
  }

  const parsedPrice = Number(price);
  if (price !== undefined && Number.isNaN(parsedPrice)) {
    return res.status(400).json({ message: "price must be a number" });
  }

  const newProduct = createProduct({
    name,
    price: price === undefined ? 0 : parsedPrice,
    description: description || "",
  });

  res.status(201).json(newProduct);
};

const updateProductHandler = (req, res) => {
  const updates = {};
  if (req.body.name !== undefined) updates.name = req.body.name;
  if (req.body.price !== undefined) {
    const parsedPrice = Number(req.body.price);
    if (Number.isNaN(parsedPrice)) {
      return res.status(400).json({ message: "price must be a number" });
    }
    updates.price = parsedPrice;
  }
  if (req.body.description !== undefined) {
    updates.description = req.body.description;
  }

  const product = updateProduct(req.params.id, updates);
  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }
  res.json(product);
};

const deleteProductHandler = (req, res) => {
  const deleted = deleteProduct(req.params.id);
  if (!deleted) {
    return res.status(404).json({ message: "Product not found" });
  }
  res.status(204).end();
};

export {
  listProducts,
  showProduct,
  createProductHandler,
  updateProductHandler,
  deleteProductHandler,
};
