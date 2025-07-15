import userModel from "../models/userModel.js";
import bcrypt from "bcryptjs";

export const getAllUsers = async (req, res) => {
    try {
        const adminId = req.id;
        const users = await userModel.find({ _id: { $ne: adminId } });
        return res.status(200).json({ success: true, message: "All User Fetched", users })
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal Server Error" })
    }
}

export const AddInstructor = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({ success: false, message: "All fields are required" })
        }
        const user = await userModel.findOne({ email });
        if (user) {
            return res.status(400).json({ success: false, message: "Instructor already exists" });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newInstructor = await userModel.create({
            name,
            email,
            password: hashedPassword,
            role: "instructor"
        })
        return res.status(200).json({ success: true, message: "Instructor added successfully", newInstructor })
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal Server Error" })
    }
}

export const deleteUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await userModel.findByIdAndDelete(userId);
        return res.status(200).json({ success: true, message: "User deleted successfully", user })
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal Server Error" })
    }
}

export const updateUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const { name, email, password, role } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await userModel.findByIdAndUpdate(userId, { name, email, password: hashedPassword, role }, { new: true });
        return res.status(200).json({ success: true, message: "User updated successfully", user })
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal Server Error" })
    }
}