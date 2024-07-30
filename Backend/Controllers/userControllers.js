import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";
import userModel from "../Models/userModels.js";

const createToken = (id)=>{
  return jwt.sign({id},process.env.SECRET_KEY);
}

const registerUser= async(req,res)=>{
  
}


export {
  registerUser
}
