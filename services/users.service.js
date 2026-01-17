import {
  listUsers,
  findUserById,
  createUser as createUserModel,
  updateUser as updateUserModel,
  deleteUser as deleteUserModel,
} from "@/models/users.model.js";

const getUsers = () => listUsers();

const getUserById = (id) => findUserById(id);

const createUser = (name) => createUserModel(name);

const updateUser = (id, updates) => updateUserModel(id, updates);

const deleteUser = (id) => deleteUserModel(id);

export { getUsers, getUserById, createUser, updateUser, deleteUser };
