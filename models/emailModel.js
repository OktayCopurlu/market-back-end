const mongoose = require("mongoose");

const EmailSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    title: { type: String, required: true },
    message: { type: String, required: true },
    
});

const email = mongoose.model("email", EmailSchema);
module.exports = email;