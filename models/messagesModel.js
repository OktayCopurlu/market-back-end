const mongoose = require("mongoose");

const MessagesSchema = new mongoose.Schema({
    recipientID: { type: String, required: true },
    senderID: { type: String, required: true },
    senderEmail: { type: String, required: true },
    message: { type: String, required: true },
    productID:{ type: String, required: false, ref: 'products'},
    recipientEmail: { type: String, required: true}
}, {
    timestamps: true,
});

const messages = mongoose.model("messages", MessagesSchema);
module.exports = messages;