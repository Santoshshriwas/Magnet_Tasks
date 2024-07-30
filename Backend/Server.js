import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import "dotenv/config"
import mongoose from "mongoose";
import taskuser from "./Routes/taskRoutes.js";
import user from "./Routes/userRoutes.js";
mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection;
db.on("error",console.error.bind(console,"connection error :"));
db.once("open",function(){
  console.log("MongoDB To Connected");
})


const PORT = process.env.PORT || 4000;
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({
  extended:true
}))

app.use("/uploads",express.static("uploads"))
app.use("/api/task",taskuser);
app.use("/user/api",user)
app.listen(PORT,()=>{
  console.log(`Server is runnig on ${PORT}`);
})

