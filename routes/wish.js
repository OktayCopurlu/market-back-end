const router = require("express").Router();
const {
    createWish,
    deleteWish,
    getAllWishes,
    getWishById,
    filterWishes,
    updateWish,
} = require("../services/wishes-service");
const { checkJwt } = require("../auth/check-jwt");

//get all wishes
router.route("/").get((req, res) => {
    getAllWishes()
        .then((clothe) => res.json(clothe))
        .catch((err) => res.status(400).json("Error:" + err));
});

//create a new wish
router.post("/", checkJwt, (req, res) => {
    const dataBody = req.body;
    createWish(dataBody)
        .then(() => res.json("Wish added!"))
        .catch((err) => res.status(400).json("Error :" + err));
});

//filter wish list
router.route("/filter").get((req, res) => {
    const queryLocalId = req.query.userId;
    filterWishes(queryLocalId)
        .then((wish) => res.json(wish))
        .catch((err) => res.status(400).json("Error:" + err));
});

//get a product
router.route("/:id").get((req, res) => {
    getWishById(req.params.id)
        .then((wish) => res.json(wish))
        .catch((err) => res.status(400).json("Error :" + err));
});

//delete a wish
router.delete("/:id", checkJwt, (req, res) => {
    deleteWish(req.params.id)
        .then(() => res.json("wishes deleted!"))
        .catch((err) => res.status(400).json("Error :" + err));
});

//edit a wish
router.put("/edit/:id", checkJwt, (req, res) => {
    updateWish(req)
        .then(() => res.json("wishes updated"))
        .catch((err) => res.status(400).json("Error :" + err));
});

module.exports = router;