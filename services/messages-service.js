const { getAll, filter, create } = require("../repository/messages-repository");
async function createNewMessage(pMessage) {
  await create(pMessage);
}

async function filterMessages(qReq, qRes) {
  return await filter(qReq, qRes);
}

async function getAllMessages() {
  return await getAll();
}

module.exports = { getAllMessages, filterMessages, createNewMessage };
