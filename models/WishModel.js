const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const wishSchema = new Schema({
    mainCategory: { type: String, required: true },
    userId: { type: String, required: true },
    canton: { type: String, required: true },
    name: { type: String, required: true },
    title: { type: String, required: true },
    detail: { type: String, required: true },
    contactTel: { type: String, required: true },
    city: { type: String, required: true },
    photo: { type: String, required: false },
    contactEmail:{ type: String, required: false }

}, {
    $position: 0,
    timestamps: true,
});
const wishes = mongoose.model("wish", wishSchema);
module.exports = wishes;