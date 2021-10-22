const {
  getAll,
  findById,
  remove,
  create,
  update,
  filter,
  
} = require("../repository/users-repository");

//create a new user
async function createUser(pUser) {
  return await create(pUser);
}

//delete the user
async function deleteUser(pId) {
  return await remove(pId);
}

//get all the users
async function getAllUsers() {
  return await getAll();
}

//get an user
async function getUserById(pId) {
  let user = await findById(pId);
  return user;
}

//edit the user
async function updateUser(pReq) {
    await update(pReq);
}

//filter an user for personal page
async function filterUser(pReq, qRes) {
  return await filter(pReq, qRes);
}

module.exports = {
  createUser,
  deleteUser,
  getAllUsers,
  getUserById,
  updateUser,
  filterUser,
};
