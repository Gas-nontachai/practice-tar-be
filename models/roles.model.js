import rolesData from "@/mock/roles.json" with { type: "json" };

let roles = [...rolesData];

const listRoles = () => roles;

const findRoleById = (id) => roles.find((p) => p.id === id) || null;

const createRole = ({ name, price, description }) => {
  const newRole = {
    id: String(Date.now()),
    name,
    price,
    description,
  };

  roles = [...roles, newRole];
  return newRole;
};

const updateRole = (id, updates) => {
  const role = findRoleById(id);
  if (!role) return null;

  if (updates.name !== undefined) {
    role.name = updates.name;
  }
  if (updates.price !== undefined) {
    role.price = updates.price;
  }
  if (updates.description !== undefined) {
    role.description = updates.description;
  }

  return role;
};

const deleteRole = (id) => {
  const beforeCount = roles.length;
  roles = roles.filter((p) => p.id !== id);
  return roles.length !== beforeCount;
};

export {
  listRoles,
  findRoleById,
  createRole,
  updateRole,
  deleteRole,
};
