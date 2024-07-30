import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  _id:Number,
  name:{
    type:String,
    required:[true,"Name is Required"],
    lowercase:true,
    trim:true
  },
  email:{
    type:String,
    required:[true,"Email is Required"],
    unique:true,
    lowercase:true,
    trim:true
    },  
    password:{
      type:String,
      required:[true,"Password is Required"],
      maxlength:10,
      minlength:8,
      trim:true
      },
      gender:{
        type:String,
        required:[true,"Gender is Required"],
      },
      status:{
        type:Boolean, 
      },
      info:{
        type:String
      },
      image:String,
      role:String
})
const userModel = mongoose.model("user_Collection", userSchema);
export default userModel;
