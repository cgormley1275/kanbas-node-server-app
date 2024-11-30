import Database from "../Database/index.js";
import model from "./model.js";
export async function findModulesForCourse(courseId) {
    return await model.find({ course: courseId });
}

export async function createModule(module) {
    await delete module._id
    return await model.create(module);
}

export async function deleteModule(moduleId) {
    return await model.deleteOne({ _id: moduleId });
}

export async function updateModule(moduleId, moduleUpdates) {
    return await model.updateOne({ _id: moduleId }, moduleUpdates);
}
