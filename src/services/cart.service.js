const { Cart } = require("../models");

const createCart = async (reqbody) => {
    return Cart.create(reqbody)
};

const cartList = async (req, res) => {
    return Cart.find()
    .populate("User");
};

const grtcartById = async (cartId) => {
    return Cart.findById(cartId)
};

const updateRecode = async (cartId, updateBody) => {
    return Cart.findByIdAndUpdate(cartId, { $set: updateBody });
};

const deleteRecode = async (cartId) => {
    return Cart.findByIdAndDelete(cartId)
};

module.exports = {
    createCart,
    cartList,
    grtcartById,
    deleteRecode,
    updateRecode
};