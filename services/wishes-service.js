const {
  getAll,
  findById,
  remove,
  create,
  update,
  filter,
} = require("../repository/wishes-repository");

//get all wishes
async function getAllWishes() {
  return await getAll();
}


//create a wish
async function createWish(pWish) {
  return await create(pWish);
}


//delete a wish
async function deleteWish(pId) {
  return await remove(pId);
}


//get a Wish
async function getWishById(pId) {
  let Wish = await findById(pId);
  return Wish;
}

//update a wish
async function updateWish(pReq) {
  return await update(pReq);
}

//filter wishes
async function filterWishes(pQueryLocalId) {
  return await filter(pQueryLocalId)
}
module.exports = {
  createWish,
  deleteWish,
  getAllWishes,
  getWishById,
  filterWishes,
  updateWish,
};
