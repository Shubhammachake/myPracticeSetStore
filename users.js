let users;
let updt;
const addUsers = (val) => {
  users = val;
};

const addUpdt = (val) => {
  updt = val;
};

const getAllUpdate = () => {
  return updt;
};
const getAllUsers = () => {
  return users;
};

export { addUsers, getAllUsers, addUpdt, getAllUpdate };
