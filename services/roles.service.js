import {
  listRoles,
  findRoleById,
  createRole as createRoleModel,
  updateRole as updateRoleModel,
  deleteRole as deleteRoleModel,
} from "@/models/roles.model.js";

const getRoles = () => listRoles();

const getRoleById = (id) => findRoleById(id);

const createRole = (payload) => createRoleModel(payload);

const updateRole = (id, updates) => updateRoleModel(id, updates);

const deleteRole = (id) => deleteRoleModel(id);

export { getRoles, getRoleById, createRole, updateRole, deleteRole };
