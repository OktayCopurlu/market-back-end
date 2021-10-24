const users = require("../models/UsersModel");

//get user messages
async function getUserMessages(req) {
  const userId = req;
  const messages = await users.findById(userId).populate("messages");
  return await messages.messages;
}

//get all users
async function getAll() {
  return await users.find();
}

//get an user
async function findById(pId) {
  return await users.findById(pId);
}

//create a new User
async function create(pUsers) {
  const userId = pUsers.body.userId;
  const email = pUsers.body.email;
  const newUser = new users({
    userId,
    email,
  });

  return await newUser.save();
}
//delete user
async function remove(pId) {
  return await users.findByIdAndDelete(pId);
}

//edit user profil
function update(pReq) {
  users.findByIdAndUpdate(pReq.params.id, pReq.body).then(() => {
    console.log("user detail updated successfully");
  });
}

//filter user for personal page
async function filter(pReq, qRes) {
  const _id = pReq.query._id;
  const email = pReq.query.email;
  const userId = pReq.query.userId;
  if (_id) {
    users
      .find({ _id: _id })
      .then((user) => qRes.json(user))
      .catch((err) => qRes.status(400).json("Error:" + err));
  }
  if (email) {
    users
      .find({ email: email })
      .then((user) => qRes.json(user))
      .catch((err) => qRes.status(400).json("Error:" + err));
  }
  if (userId) {
    return users
      .find({ userId: userId })
      .then((user) => qRes.json(user))
      .catch((err) => qRes.status(400).json("Error:" + err));
  }
}

module.exports = {
  getAll,
  filter,
  findById,
  create,
  update,
  remove,
  getUserMessages,
};
