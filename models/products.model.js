import productsData from "@/mock/products.json" with { type: "json" };
import { generateID } from "@/utils/generateID.js";

let products = [...productsData];

const listProducts = () => products;

const findProductById = (id) => products.find((p) => p.id === id) || null;

const createProduct = ({ name, price, description, img_path }) => {
  const newProduct = {
    id: generateID("product", 5),
    name,
    price,
    description,
    img_path: img_path || "",
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
    product.description = updates.description;
  }
  if (updates.img_path !== undefined) {
    product.img_path = updates.img_path;
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
