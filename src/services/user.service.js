const { User } = require("../models");

const createUser = async (reqbody) => {
    return User.create(reqbody)
};

const userList = async (req, res) => {
    return User.find();
};

const grtuserById = async (userId) => {
    return User.findById(userId)
};

const updateRecode = async (userId, updateBody) => {
    return User.findByIdAndUpdate(userId, { $set: updateBody });
};

const deleteRecode = async (userId) => {
    return User.findByIdAndDelete(userId)
};

module.exports = {
    createUser,
    userList,
    grtuserById,
    deleteRecode,
    updateRecode
};