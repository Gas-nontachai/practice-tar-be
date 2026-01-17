import rolesData from "@/mock/roles.json" with { type: "json" };

let roles = [...rolesData];

const listRoles = () => roles;
const findRoleById = (id) => roles.find((p) => p.id === id) || null;
const generateRoleId = () => {
  const random = Math.floor(1000 + Math.random() * 9000);
  return `Role-${random}`;
};

const createRole = ({ name, description }) => {
  const newRole = {
    id: generateRoleId(),
    name,
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

export { listRoles, findRoleById, createRole, updateRole, deleteRole };
