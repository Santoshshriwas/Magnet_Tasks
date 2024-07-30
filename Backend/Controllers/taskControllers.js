import taskModel from "../Models/taskModels";


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
    await taskInsert.save();
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


  




module.exports = {taskInsert,taskDisplay};