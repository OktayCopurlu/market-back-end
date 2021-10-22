const products = require("../models/ProductsModel");
const users = require("../models/UsersModel");
//get all products
async function getAll() {
  return await products.find().sort({ _id: -1 });
}

//create a new Product
async function create(pProducts) {
  const newProducts = new products(pProducts);
  return await newProducts.save();
}

//find a product
async function findById(pId) {
  return await products.findById(pId);
}

//delete a product
async function remove(pId) {
  return await products.findByIdAndDelete(pId);
}

//update a product
async function update(pReq) {
  const apdatedProduct = await products.findByIdAndUpdate(
    pReq.params.id,
    pReq.body
  );
  return await apdatedProduct; // 07.10.2021 I changed someting
}

//send message id into product
async function addMessage(req) {
  const productID = req.productID;
  const senderID = req.senderID;
  const recipientID = req.recipientID;

  const messageID = req._id;
  await products.updateMany(
    { _id: productID },
    { $addToSet: { messages: messageID } }
  );
  await users.updateMany(
    { _id: senderID },
    { $addToSet: { messages: messageID } }
  );
  await users.updateMany(
    { _id: recipientID },
    { $addToSet: { messages: messageID } }
  );
}
//get products messages
async function getProductMessages(req) {
  const productID = req;
  const messages = await products.findById(productID).populate("messages");
  return await messages.messages;
}

//filter products
async function filter(pReq, pRes) {
  const userId = pReq.query.userId;
  const canton = pReq.query.canton;
  const mainCategory = pReq.query.mainCategory;

  if (pReq.query.userId) {
    products
      .find({ userId: userId })
      .then((product) => pRes.json(product))
      .catch((err) => pRes.status(400).json("Error:" + err));
  }

  if (canton && !mainCategory) {
    products
      .find({ canton: canton })
      .then((product) => pRes.json(product))
      .catch((err) => pRes.status(400).json("Error:" + err));
  }
  if (!canton && mainCategory) {
    products
      .find({ mainCategory: mainCategory })
      .then((product) => pRes.json(product))
      .catch((err) => pRes.status(400).json("Error:" + err));
  }

  if (canton && mainCategory) {
    products
      .find({ canton: canton, mainCategory: mainCategory })
      .then((product) => pRes.status(200).json(product))
      .catch((err) => pRes.status(400).json("Error:" + err));
  }
}

module.exports = {
  getProductMessages,
  addMessage,
  getAll,
  filter,
  findById,
  create,
  update,
  remove,
};
