const express = require("express");
const { userController } = require("../controllers");

const router = express.Router();

// create
router.post(
    "/create-user",
    userController.createUser
);

// get
router.get(
    "/list",
    userController.userList
);

// update
router.put(
    "/update/:userId",
    userController.updateRecode
);

// delete
router.delete(
    "delete/:userId",
    userController.deleteRecode
);

module.exports = router;