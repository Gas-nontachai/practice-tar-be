import {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from "@/services/users.service.js";

const listUsers = (req, res) => {
  res.json(getUsers());
};

const showUser = (req, res) => {
  const id = Number(req.params.id);
  if (Number.isNaN(id)) {
    return res.status(400).json({ message: "Invalid user id" });
  }

  const user = getUserById(id);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  res.json(user);
};

const createUserHandler = (req, res) => {
  if (!req.body?.name) {
    return res.status(400).json({ message: "name is required" });
  }

  const newUser = createUser(req.body.name);
  res.status(201).json(newUser);
};

const updateUserHandler = (req, res) => {
  const id = Number(req.params.id);
  if (Number.isNaN(id)) {
    return res.status(400).json({ message: "Invalid user id" });
  }

  const user = updateUser(id, { name: req.body.name });
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  res.json(user);
};

const deleteUserHandler = (req, res) => {
  const id = Number(req.params.id);
  if (Number.isNaN(id)) {
    return res.status(400).json({ message: "Invalid user id" });
  }

  const deleted = deleteUser(id);
  if (!deleted) {
    return res.status(404).json({ message: "User not found" });
  }
  res.status(204).end();
};

export {
  listUsers,
  showUser,
  createUserHandler,
  updateUserHandler,
  deleteUserHandler,
};
