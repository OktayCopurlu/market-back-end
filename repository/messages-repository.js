const messages = require("../models/messagesModel");
const {
  addMessage,
  getProductMessages,
} = require("../repository/products-repository");
const { getUserMessages } = require("../repository/users-repository");

async function create(pMessage) {
  const newMessage = new messages(pMessage);
  const message = await newMessage.save();
  await addMessage(message);
}

async function filter(pReq, pRes) {
  const productID = pReq.query.productID;
  const senderID = pReq.query.senderID;
  const receipientID = pReq.query.recipientID;
  const _id = pReq.query._id;

  if (senderID) {
    const senderMessages = await getUserMessages(senderID);
    return await senderMessages;
  } else if (receipientID) {
    const recipientMessages = await getUserMessages(receipientID);
    return await recipientMessages;
  } else if (_id) {
    const userMessages = await getUserMessages(_id);
    return await userMessages;
  } else {
    const productMessages = await getProductMessages(productID);
    return await productMessages;
  }
}
async function getAll() {
  return await messages.find();
}
module.exports = { getAll, filter, create };
