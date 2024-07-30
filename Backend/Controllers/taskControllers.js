import taskModel from "../Models/taskModels.js";
const taskInsert = async (req,res)=>{
  try {
    let priority = req.body.priority;
    let title= req.body.title;
    let description = req.body.description;
    let date = req.body.date;
    let uname = req.body.uname;
    let descdetail=req.body.descdetail;
// Insert task to user
    const taskinsert = new taskModel({
      title:title,
      description:description,
      date:date,
      priority:priority,
      uname:uname,
      descdetail:descdetail,
      info:Date.now()
    })
    await taskinsert.save();
    res.status(201).json({message:"Task Inserted Successfully"})
  } catch (error) {
    console.error("Error insert task :",error);
    res.status(500).json({message:error.message,})
    
  }
}
// Display all task data
const taskDisplay = async(req,res)=>{
  try {
    const taskData = await taskModel.find();
    res.send(taskData)
    res.status(200).json(taskData);
  } catch (error) {
    console.error("Error Display tasks",error)
    res.status(500).json({message:error.message})
  }
}

// tsak update
const taskUpdate = async (req, res) => {
  try {
    const id = req.body.id;
    const data = await taskModel.findById(id);
    res.json(data);
  } catch (error) {
    console.error("Error update task", error);
    res.status(500).json({ message: error.message });
    
  }
}
// task delete
const taskDelete = async (req, res) => {
  try {
    const id = req.body.id;
    const data = await taskModel.findByIdAndDelete(id);
    res.json(data);
    res.status(200).json({ message: "Task deleted successfully" });
    } catch (error) {
      console.error("Error delete task", error);
      res.status(500).json({ message: error.message });
      }
      }

      // Edit task save data
      const taskEditSave = async (req, res) => {
        try {
          const priority= req.body.priority;
          const id = req.body._id;
          const title = req.body.title;
          const description = req.body.description;
          const date = req.body.data;
          const uname = req.body.uname;
          const descdetail = req.body.descdetail;
          await taskModel.findByIdAndUpdate(id,{
            title:title,
            description:description,
            priority:priority,
            date:date,
            uname:uname,
            descdetail:descdetail
          })
           res.send({message:"Task updated successfully"})
        }catch(error){
          console.error("Error edit task",error)
          res.status(500).json({message:error.message})
        }
      }
// status display and update
      const statusDisplay = async(req,res)=>{
        try {
          const data = await taskModel.findById(req.params.id);
          if(!data){
            return res.status(404).json({message:"Task not found"})
          }
          data.status = req.body.status || data.status;
          const updateData = await data.save();
          res.json(updateData);
        } catch (error) {
          console.error("Error update status", error);
          res.status(500).json({ message: error.message }); 
        }
      }


      const updateTaskpriority = async(req,res)=>{
       try {
        const id = req.params.id;
        const {priority} = req.body;
        const data = await taskModel.findByIdAndUpdate(id, { priority: priority }, { new: true });  
        res.json(data);
       } catch (error) {
        console.error("Error update priority", error);
        res.status(500).json({ message: error.message });
       }
      }
  




export  {taskInsert,taskDisplay,taskUpdate,taskDelete,taskEditSave,statusDisplay,updateTaskpriority};