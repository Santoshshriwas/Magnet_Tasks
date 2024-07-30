import express from 'express';
import { taskInsert,taskDisplay,taskUpdate,taskDelete,taskEditSave,statusDisplay,updateTaskpriority, } from '../Controllers/taskControllers.js';
const taskRouter = express.Router();
// insert task api
taskRouter.post('/insert',taskInsert);
// display task api
taskRouter.get('/display',taskDisplay);
// delete task api
taskRouter.post("/delete",taskDelete)
// edit save api
taskRouter.post("/editsave",taskUpdate);
// edit data save api
taskRouter.post("/edit/data/save",taskEditSave);
// status display
taskRouter.put("/display/:id",statusDisplay);
// priority
taskRouter.put("/:id",updateTaskpriority);
export default taskRouter;
