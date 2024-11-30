import mongoose from "mongoose";
const assignmentSchema = new mongoose.Schema(
    {
        title: String,
        course: {type: mongoose.Schema.Types.ObjectId, ref: "CourseModel"},
        description: String,
        points: Number,
        assignmentGroup: {
            type: String,
            enum: ["ASSIGNMENTS", "QUIZZES", "EXAMS", "PROJECTS", "LABS"],
            default: "ASSIGNMENTS"
        },
        display: {
            type: String,
            enum: ["PERCENTAGE", "VALUE"],
            default: "PERCENTAGE"
        },
        submissionType: {
            type: String,
            enum: ["ONLINE", "INPERSON"],
            default: "ONLINE"
        },
        dueDate: Date,
        availableFrom: Date,
        availableUntil: Date
    },
    {collection: "assignments"}
);
export default assignmentSchema;