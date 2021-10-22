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
  messages: [{ type: mongoose.Types.ObjectId, ref: "messages"}],
  products: [{ type: mongoose.Types.ObjectId, ref: "products"}],
  wishes: [{ type: mongoose.Types.ObjectId, ref: "wishes" }],
});

const users = mongoose.model("users", UsersSchema);
module.exports = users;
