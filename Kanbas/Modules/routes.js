// import db from "../Database/index.js";
// export default function ModuleRoutes(app) {
//     app.put("/api/modules/:mid", (req, res) => {
//         const { mid } = req.params;
//         const moduleIndex = db.modules.findIndex(
//             (m) => m._id === mid);
//         db.modules[moduleIndex] = {
//             ...db.modules[moduleIndex],
//             ...req.body
//         };
//         res.sendStatus(204);
//     });

//     app.delete("/api/modules/:mid", (req, res) => {
//         const { mid } = req.params;
//         db.modules = db.modules.filter((m) => m._id !== mid);
//         res.sendStatus(200);
//     });
//     app.post("/api/courses/:cid/modules", (req, res) => {
//         const { cid } = req.params;
//         const newModule = {
//             ...req.body,
//             course: cid,
//             _id: new Date().getTime().toString(),
//         };
//         db.modules.push(newModule);
//         res.send(newModule);
//     });
//     app.get("/api/courses/:cid/modules", (req, res) => {
//         const { cid } = req.params;
//         const modules = db.modules.filter((m) => m.course === cid);
//         res.json(modules);
//     });
// }

import * as modulesDao from "./dao.js";
export default function ModuleRoutes(app) {
    app.delete("/api/modules/:moduleId", async (req, res) => {
        const { moduleId } = req.params;
        const status = await modulesDao.deleteModule(moduleId);
        res.send(status);
    });

    app.put("/api/modules/:moduleId", async (req, res) => {
        const { moduleId } = req.params;
        const moduleUpdates = req.body;
        const status = await modulesDao.updateModule(moduleId, moduleUpdates);
        res.send(status);
    });
}


