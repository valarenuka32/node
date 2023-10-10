const { Product } = require("../models");

const createProduct = async (reqbody) => {
    return Product.create(reqbody)
};

const productList = async (req, res) => {
    return Product.find();
};

const grtProductById = async (ProductId) => {
    return Product.findById(ProductId)
};

const updateRecode = async (ProductId, updateBody) => {
    return Product.findByIdAndUpdate(ProductId, { $set: updateBody });
};

const deleteRecode = async (ProductId) => {
    return Product.findByIdAndDelete(ProductId)
};

module.exports = {
    createProduct,
    productList,
    grtProductById,
    deleteRecode,
    updateRecode
};