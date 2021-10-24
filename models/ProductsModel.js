const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productsSchema = new Schema({
        userId: { type: String, required: true },
        mainCategory: { type: String, required: true },
        categoryClothes: { type: String, required: false },
        canton: { type: String, required: true },
        city: { type: String, required: true },
        title: { type: String, required: true },
        condition: { type: String, required: true },
        size: { type: String, required: false },
        dimensions: { type: String, required: false },
        detail: { type: String, required: true },
        contactTel: { type: String, required: false },
        photos: { type: Array, required: true },
        contactEmail:{ type: String, required: false },
        messages:[{ type: mongoose.Types.ObjectId, ref: 'messages' }],
        mongoUserID:{ type: mongoose.Types.ObjectId, required:true}
    }, {
        timestamps: true,
    }
);
const products = mongoose.model("products", productsSchema);
module.exports = products;