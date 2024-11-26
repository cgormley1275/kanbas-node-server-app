// import db from "../Database/index.js";
import model from "./model.js";
export const createUser = (user) => {
    delete user._id
    return model.create(user);
}
export const findAllUsers = () => model.find();
export const findUserById = (userId) => model.findById(userId);
export const findUserByUsername = (username) => model.findOne({ username: username });
// export const findUserByCredentials = (username, password) => model.findOne({ username, password });
//testing
export const findUserByCredentials = (username, password) => {
    data = model.findOne({ username, password });
    if (!data) {
        throw("no data!!!")
    }
}
    
    
//testing
export const updateUser = (userId, user) => model.updateOne({ _id: userId }, { $set: user });
export const deleteUser = (userId) => model.deleteOne({ _id: userId });
export const findUsersByRole = (role) => model.find({ role: role }); // or just model.find({ role })
export const findUsersByPartialName = (partialName) => {
    const regex = new RegExp(partialName, "i"); // 'i' makes it case-insensitive
    return model.find({
        $or: [{ firstName: { $regex: regex } }, { lastName: { $regex: regex } }],
    });
};
