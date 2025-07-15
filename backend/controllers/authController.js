import userModel from "../models/userModel.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
export const register = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({ success: false, message: "All fields are required" })
        }
        const user = await userModel.findOne({ email });
        if (user) {
            return res.status(400).json({ success: false, message: "User already exists" })
        }
        const hashedPassword = await bcryptjs.hash(password, 10);
        const newUser = await userModel.create({
            name,
            email,
            password: hashedPassword,
            role
        });
        res.status(200).json({ success: true, message: "User registered successfully", newUser })
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal Server Error" })
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(400).json({ success: false, message: "All fields are required" })
        }
        const user = await userModel.findOne({ email });
        if (!user) {
            res.status(400).json({ success: false, message: "User does not exist" })
        }
        const isMatch = await bcryptjs.compare(password, user.password);
        if (!isMatch) {
            res.status(400).json({ success: false, message: "Invalid credentials" })
        }
        const token = jwt.sign({ Userid: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });
        res.cookie("LoginCookie", token, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000,
            sameSite: "strict",
            secure: false,
            path: "/"
        })
        res.status(200).json({ success: true, message: "User logged in successfully", user, token })
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal Server Error" })
    }
}