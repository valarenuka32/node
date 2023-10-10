const { userService } = require("../services");

// create user
const createUser = async (req, res) => {
    try {
        const reqbody = req.body;

        const user = await userService.createUser(reqbody);
        res.status(200).json({
            success: true,
            message: "user create successfully!",
            data: { user }
        });

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

const userList = async (req, res) => {
    try {
        const getList = await userService.userList();
        res.status(200).json({
            success: true,
            message: "Get user list",
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
        const userId = req.params.userId;

        const userEx = await userService.grtuserById(userId);
        if (!userEx) {
            throw new Error("user not found");
        }

        await userService.updateRecode(userId, req.Body);
        res.status(200).json({
            success: true,
            message: "user update successfully!"
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
        const userId = req.params.userId;

        const userEx = await userService.grtuserById(userId);
        if (!userEx) {
            throw new Error("user not found");
        }

        await userService.deleteRecode(userId, req.Body);
        res.status(200).json({
            success: true,
            message: "user delete successfully!"
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};
module.exports = {
    createUser,
    userList,
    updateRecode,
    deleteRecode
};