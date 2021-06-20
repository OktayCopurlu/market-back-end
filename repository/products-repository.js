const products = require("../models/ProductsModel");

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
function update(pReq) {
    products.findByIdAndUpdate(pReq.params.id, pReq.body).then(() => {
        console.log("products-repository.js 27. satir. .then olmadan ürünü update etmiyor.")
    });
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

module.exports = { getAll, filter, findById, create, update, remove };