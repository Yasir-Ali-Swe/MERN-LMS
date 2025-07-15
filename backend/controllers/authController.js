import userModel from "../models/userModel.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({ success: false, message: "All fields are required" })
        }
        const user=await userModel.findOne({email});
        if(user){
            return res.status(400).json({ success: false, message: "User already exists" })
        }
        const hashedPassword=await bcryptjs.hash(password,10);
        const newUser=await userModel.create({
            name,
            email,
            password:hashedPassword,
            role
        });
        res.status(200).json({ success: true, message: "User registered successfully" ,newUser})
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal Server Error" })
    }
}