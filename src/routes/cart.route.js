const express = require("express");
const { cartController } = require("../controllers");

const router = express.Router();

// create
router.post(
    "/create-cart",
    cartController.createCart
);

// get
router.get(
    "/list",
    cartController.cartList
);

// update
router.put(
    "/update/:cartId",
    cartController.updateRecode
);

// delete
router.delete(
    "delete/:cartId",
    cartController.deleteRecode
);

module.exports = router;



