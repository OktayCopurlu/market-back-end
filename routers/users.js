const router = require("express").Router();
const {
  createUser,
  deleteUser,
  getAllUsers,
  getUserById,
  updateUser,
  filterUser,
} = require("../services/users-service");
const { checkJwt } = require("../auth/check-jwt");

//get all users
router.route("/").get((req, res) => {
  getAllUsers()
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json("Error:" + err));
});

//filter user
router.route("/filter").get((req, res) => {
  filterUser(req, res)
});

//create a user
router.route("/").post((req, res) => {
  createUser(req)
    .then(() => res.json("user added!"))
    .catch((err) => res.status(400).json("Error :" + err));
});

//get a user
router.route("/:id").get((req, res) => {
  getUserById(req.params.id)
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json("Error :" + err));
});

//delete users
router.delete("/:id", checkJwt, (req, res) => {
  deleteUser(req.params.id)
    .then(() => res.json("user deleted!"))
    .catch((err) => res.status(400).json("Error :" + err));
});

//edit user
router.put("/edit/:id", checkJwt, (req, res) => {
  updateUser(req)
    .then(() => res.json("user updated"))
    .catch((err) => res.status(400).json("Error :" + err));
});

module.exports = router;
