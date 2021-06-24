const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    email: { type: String, required: true },
    name: { type: String, required: false },
    birthDate: { type: Date, required: false },
    job: { type: String, required: false },
    detail: { type: String, required: false },
    canton: { type: String, required: false },
    city: { type: String, required: false },
    address: { type: String, required: false },
    contactNumber: { type: Number, required: false },
    photos: { type: Array, required: false },

});

const users = mongoose.model("users", UsersSchema);
module.exports = users;