const users = require("../models/UsersModel");

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
    const queryLocalId = pReq.query.userId;
    const email = pReq.query.email;

    if (queryLocalId) {
        users
            .find({ userId: queryLocalId })
            .then((user) => qRes.json(user))
            .catch((err) => qRes.status(400).json("Error:" + err));
    }
    if (email) {
        users
            .find({ email: email })
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
};