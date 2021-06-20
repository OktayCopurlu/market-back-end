const router = require("express").Router();
const { checkJwt } = require("../auth/check-jwt");

const {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  filterProduct,
} = require("../services/products-service"); //import all methods

//get all products
router.route("/").get((req, res) => {
  getAllProducts()
    .then((product) => res.json(product))
    .catch((err) => res.status(400).json("Error:" + err));
});

//create a new product
router.post("/", checkJwt, (req, res) => {
  const body = req.body;
  createProduct(body)
    .then(() => res.json("products added!"))
    .catch((err) => res.status(400).json("Error :" + err));
});

//filter products
router.route("/filter").get((req, res) => {
  filterProduct(req, res);
});

//get a product
router.route("/:id").get((req, res) => {
  getProductById(req.params.id)
    .then((product) => res.json(product))
    .catch((err) => res.status(400).json("Error :" + err));
});

//delete a product
router.delete("/:id", checkJwt, (req, res) => {
  deleteProduct(req.params.id)
    .then(() => res.json("products deleted!"))
    .catch((err) => res.status(400).json("Error :" + err));
});

//edit product
router.put("/edit/:id", checkJwt, (req, res) => {
  updateProduct(req)
    .then(() => res.json("product updated"))
    .catch((err) => res.status(400).json("Error :" + err));
});

module.exports = router;
