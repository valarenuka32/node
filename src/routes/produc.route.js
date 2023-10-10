const express = require("express");
const { productController } = require("../controllers");

const router = express.Router();

// create
router.post(
    "/create-product",
    productController.createProduct
);

// get
router.get(
    "/list",
    productController.productList
);

// update
router.put(
    "/update/:productId",
    productController.updateRecode
);

// delete
router.delete(
    "delete/:productId",
    productController.deleteRecode
);

module.exports = router;



