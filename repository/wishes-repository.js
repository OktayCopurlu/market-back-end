const wishes = require("../models/WishModel");

//get all wishes
async function getAll() {
    return await wishes.find().sort({ _id: -1 });
}

//create a new Wish
async function create(pWishes) {
    const newWish = new wishes(pWishes);

    return await newWish.save();
}

//find a Wish
async function findById(pId) {
    return await wishes.findById(pId);
}

//delete a Wish
async function remove(pId) {
    return await wishes.findByIdAndDelete(pId);
}


//update a Wish
function update(pReq) {
    wishes
        .findByIdAndUpdate(pReq.params.id, pReq.body)
        .then(() => console.log("wish updated successfully"));
}
//filter wishes for user page
async function filter(pQueryLocalId) {
    return await wishes.find({ userId: pQueryLocalId });
}

module.exports = { getAll, filter, findById, create, update, remove };