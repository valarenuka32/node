const { productService } = require("../services");

// create product
const createProduct = async (req, res) => {
    try {
        const reqbody = req.body;

        const product = await productService.createProduct(reqbody);
        res.status(200).json({
            success: true,
            message: "product create successfully!",
            data: { product }
        });

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

const productList = async (req, res) => {
    try {
        const getList = await productService.productList();
        res.status(200).json({
            success: true,
            message: "Get product list",
            data: getList
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};
// update
const updateRecode = async (req, res) => {
    try {
        const productId = req.params.productId;

        const productEx = await productService.grtProductById(productId);
        if (!productEx) {
            throw new Error("product not found");
        }

        await productService.updateRecode(productId, req.Body);
        res.status(200).json({
            success: true,
            message: "product update successfully!"
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

// delete
const deleteRecode = async (req, res) => {
    try {
        const productId = req.params.productId;

        const productEx = await productService.grtProductById(productId);
        if (!productEx) {
            throw new Error("product not found");
        }

        await productService.deleteRecode(productId, req.Body);
        res.status(200).json({
            success: true,
            message: "product delete successfully!"
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};
module.exports = {
    createProduct,
    productList,
    updateRecode,
    deleteRecode
};