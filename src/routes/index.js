const express = require("express");

const ProductRoute = require("./produc.route");
const CartRoute = require("./cart.route");
const userRoute = require("./user.route");

const router = express.Router();

router.use("/product", ProductRoute);
router.use("/cart", CartRoute);
router.use("/user", userRoute);

module.exports = router;