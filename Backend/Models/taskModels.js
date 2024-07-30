import mongoose from "mongoose";

const taskSchema= mongoose.Schema({
  title:String,
  description:String,
  uname:String,
  date:Date,
  descdetail:String,
  priority:String,
  info:{
    type:String,
    required:[true,"Time is req"]
  },
  status:{
    type:String,
    enum:["pending","compale"],
    default:"pending"
    }
})

const taskModel =  mongoose.model("task_Collection", taskSchema);
export default taskModel;