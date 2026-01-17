import {
  getRoles,
  getRoleById,
  createRole,
  updateRole,
  deleteRole,
} from "@/services/roles.service.js";

const listRoles = (req, res) => {
  res.json(getRoles());
};

const showRole = (req, res) => {
  const role = getRoleById(req.params.id);
  if (!role) {
    return res.status(404).json({ message: "Role not found" });
  }
  res.json(role);
};

const createRoleHandler = (req, res) => {
  const { name, price, description } = req.body;
  if (!name) {
    return res.status(400).json({ message: "name is required" });
  }

  const parsedPrice = Number(price);
  if (price !== undefined && Number.isNaN(parsedPrice)) {
    return res.status(400).json({ message: "price must be a number" });
  }

  const newRole = createRole({
    name,
    price: price === undefined ? 0 : parsedPrice,
    description: description || "",
  });

  res.status(201).json(newRole);
};

const updateRoleHandler = (req, res) => {
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

  const role = updateRole(req.params.id, updates);
  if (!role) {
    return res.status(404).json({ message: "Role not found" });
  }
  res.json(role);
};

const deleteRoleHandler = (req, res) => {
  const deleted = deleteRole(req.params.id);
  if (!deleted) {
    return res.status(404).json({ message: "Role not found" });
  }
  res.status(204).end();
};

export {
  listRoles,
  showRole,
  createRoleHandler,
  updateRoleHandler,
  deleteRoleHandler,
};
