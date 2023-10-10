const { cartService } = require("../services");

// create cart
const createCart = async (req, res) => {
    try {
        const reqbody = req.body;

        const cart = await cartService.createCart(reqbody);
        res.status(200).json({
            success: true,
            message: "cart create successfully!",
            data: { cart }
        });

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

const cartList = async (req, res) => {
    try {
        const getList = await cartService.cartList();
        res.status(200).json({
            success: true,
            message: "Get cart list",
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
        const cartId = req.params.cartId;

        const cartEx = await cartService.grtcartById(cartId);
        if (!cartEx) {
            throw new Error("cart not found");
        }

        await cartService.updateRecode(cartId, req.Body);
        res.status(200).json({
            success: true,
            message: "cart update successfully!"
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
        const cartId = req.params.cartId;

        const cartEx = await cartService.grtcartById(cartId);
        if (!cartEx) {
            throw new Error("cart not found");
        }

        await cartService.deleteRecode(cartId, req.Body);
        res.status(200).json({
            success: true,
            message: "cart delete successfully!"
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};
module.exports = {
    createCart,
    cartList,
    updateRecode,
    deleteRecode
};