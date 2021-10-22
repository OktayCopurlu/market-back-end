const mongoose = require("mongoose");

const MessagesSchema = new mongoose.Schema({
    recipientID: { type: String, required: true },
    senderID: { type: String, required: true },
    senderName: { type: String, required: true },
    message: { type: String, required: true },
    productID:{ type: String, required: true, ref: 'products'}
});

const messages = mongoose.model("messages", MessagesSchema);
module.exports = messages;