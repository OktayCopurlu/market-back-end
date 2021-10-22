const router = require("express").Router();
const {
  getAllMessages,
  filterMessages,
  createNewMessage,
} = require("../services/messages-service");
const { checkJwt } = require("../auth/check-jwt");

router.post("/", (req, res) => {
  const body = req.body;
  createNewMessage(body)
    .then(() => res.json("message added!"))
    .catch((err) => res.status(400).json("Error :" + err));
});

//filter messages
router.route("/filter").get((req, res) => {
  filterMessages(req, res)
    .then((messages) => {
      return res.json(messages);
    })
    .catch((err) => res.status(400).json("Error:" + err));
});

router.route("/").get((req, res) => {
  getAllMessages()
    .then((product) => {
      return res.json(product);
    })
    .catch((err) => res.status(400).json("Error:" + err));
});
module.exports = router;
