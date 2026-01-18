import productsData from "@/mock/products.json" with { type: "json" };
import { withDefault } from "@/utils/defaultValue.js";

let products = [...productsData];

const listProducts = () => products;

const findProductById = (id) => products.find((p) => p.id === id) || null;

const createProduct = ({ name, price, description }) => {
  const newProduct = {
    id: String(Date.now()),
    name,
    price,
    description: withDefault(description),
  };

  products = [...products, newProduct];
  return newProduct;
};

const updateProduct = (id, updates) => {
  const product = findProductById(id);
  if (!product) return null;

  if (updates.name !== undefined) {
    product.name = updates.name;
  }
  if (updates.price !== undefined) {
    product.price = updates.price;
  }
  if (updates.description !== undefined) {
    product.description = withDefault(updates.description);
  }

  return product;
};

const deleteProduct = (id) => {
  const beforeCount = products.length;
  products = products.filter((p) => p.id !== id);
  return products.length !== beforeCount;
};

export {
  listProducts,
  findProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
