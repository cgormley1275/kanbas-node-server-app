import db from "../Database/index.js";
import * as assignmentDao from "./dao.js"
export default function AssignmentRoutes(app) {
    app.put("/api/assignments/:aid", async (req, res) => {
        const { aid } = req.params;
        const assignmentUpdates = req.body;
        const status = await assignmentDao.updateAssignment(assignmentUpdates);
        res.send(status);
    });

    app.delete("/api/assignments/:aid", async (req, res) => {
        const { aid } = req.params;
        const status = await assignmentDao.deleteAssignment(aid);
        res.send(status);
    });

    app.post("/api/courses/:cid/assignments", async (req, res) => {
        const assignment = await assignmentDao.createAssignment(req.body);
        res.json(assignment);
    });

    app.get("/api/courses/:cid/assignments", async (req, res) => {
        const { cid } = req.params;
        const assignments = await assignmentDao.findAssignmentsForCourse(cid);
        res.send(assignments);
    });
}