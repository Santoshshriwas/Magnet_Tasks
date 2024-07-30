import jwt from "jsonwebtoken";

import bcrypt from "bcrypt";
import validator from "validator";
import userModel from "../Models/userModels.js";

const createToken = (id)=>{
  return jwt.sign({id},process.env.SECRET_KEY);
}

const registerUser= async(req,res)=>{
  try {
    const userData = req.body;
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    const user = new userModel(userData);
  } catch (error) {
    res.status(400).json({ message: "Invalid request" }); 
  }
}

