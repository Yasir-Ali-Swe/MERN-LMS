import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
export const isAdmin=async (req,res,next)=>{
    try {
        const token=req.cookies.LoginCookie;
        if(!token){
            return res.status(400).json({ success: false, message: "User is not logged in" })
        }
        const decoded=jwt.verify(token,process.env.JWT_SECRET);
        const userId=decoded.Userid;
        const user=await userModel.findById(userId);
        if(user.role!=="admin"){
           return res.status(400).json({ success: false, message: "User is not an admin" })
        }
        req.id=user._id;
        next();
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal Server Error" })
    }
}