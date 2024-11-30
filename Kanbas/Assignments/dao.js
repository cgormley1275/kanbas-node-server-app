import model from "./model.js";

export async function findAssignmentsForCourse(cid) {
    return await model.find({course: cid});
};

export async function createAssignment(assignment) {
    delete assignment._id;
    return model.create(assignment)
};

export async function deleteAssignment(aid) {
    return model.deleteOne({_id: aid});
};

export async function updateAssignment(assignment) {
    return model.updateOne({_id: assignment._id}, {$set: assignment});
};