import userModel from "../models/userModel.js";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();
export const isInstructor = async (req, res, next) => {
    try {
        const token=req.cookies.LoginCookie;
        if(!token){
            return res.status(200).json({success:false,message:"User is not logged in"});
        }
        const decodedToken=jwt.verify(token,process.env.JWT_SECRET);
        const userId=decodedToken.Userid;
        const user=await userModel.findById(userId);
        if(user.role!=="instructor"){
            return res.status(200).json({success:false,message:"User is not an instructor"});
        }
        req.id=user._id;
        next();
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal Server Error" })
    }
}