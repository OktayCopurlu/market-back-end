const {
  getAll,
  findById,
  remove,
  create,
  update,
  filter,
} = require("../repository/products-repository"); //import all methods

//get all products
async function getAllProducts() {
  return await getAll();
}

//create a new product
async function createProduct(pProduct) {
  return await create(pProduct);
}

//delete a product
async function deleteProduct(pId) {
  return await remove(pId);
}

//get a product
async function getProductById(pId) {
  let product = await findById(pId);
  return product;
}
//update a product
async function updateProduct(pReq) {
  return await update(pReq);
}
//filter products
async function filterProduct(qReq, qRes) {
  return await filter(qReq, qRes);
}
module.exports = {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  filterProduct,
};
