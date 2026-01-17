import {
  listProducts,
  findProductById,
  createProduct as createProductModel,
  updateProduct as updateProductModel,
  deleteProduct as deleteProductModel,
} from "@/models/products.model.js";

const getProducts = () => listProducts();

const getProductById = (id) => findProductById(id);

const createProduct = (payload) => createProductModel(payload);

const updateProduct = (id, updates) => updateProductModel(id, updates);

const deleteProduct = (id) => deleteProductModel(id);

export {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
