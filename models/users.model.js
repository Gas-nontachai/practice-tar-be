import usersData from "@/mock/users.json" with { type: "json" };

let users = [...usersData];

const listUsers = () => users;

const findUserById = (id) => users.find((u) => u.id === id) || null;

const createUser = (name) => {
  const newUser = {
    id: Date.now(),
    name,
  };

  users = [...users, newUser];
  return newUser;
};

const updateUser = (id, updates) => {
  const user = findUserById(id);
  if (!user) return null;

  if (updates.name !== undefined) {
    user.name = updates.name;
  }

  return user;
};

const deleteUser = (id) => {
  const beforeCount = users.length;
  users = users.filter((u) => u.id !== id);
  return users.length !== beforeCount;
};

export { listUsers, findUserById, createUser, updateUser, deleteUser };
