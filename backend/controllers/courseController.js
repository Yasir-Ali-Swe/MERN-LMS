import courseModel from "../models/courseModel.js";
export const addCourse = async (req, res) => {
    try {
        const { name, description, instructor } = req.body;
        const course = await courseModel.create({ name, description, instructor })
        return res.status(200).json({ success: true, message: "Course added successfully", course })
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal Server Error" })
    }
}

export const getAllCourses = async (req, res) => {
    try {
        const id = req.id;
        const courses = await courseModel.find({ instructor: id }).populate('instructor', 'name email');
        if (courses.length === 0) {
            return res.status(200).json({ success: false, message: "No courses found" })
        }
        return res.status(200).json({ success: true, message: "Courses fetched successfully", courses })
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal Server Error" })
    }
}

export const getCourse = async (req, res) => {
    try {
        const id = req.params.id;
        const course = await courseModel.findById(id);
        return res.status(200).json({ success: true, message: "Course fetched successfully", course })
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal Server Error" })
    }
}

export const deleteCourse = async (req, res) => {
    try {
        const id = req.params.id;
        const course = await courseModel.findByIdAndDelete(id);
        return res.status(200).json({ success: true, message: "Course deleted successfully", course })
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal Server Error" })
    }
}

export const updateCourse = async (req, res) => {
    try {
        const courseId=req.params.id;
        const {name,description}=req.body;
        const course=await courseModel.findByIdAndUpdate(courseId,{name,description},{new:true});
        return res.status(200).json({ success: true, message: "Course updated successfully", course })
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal Server Error" })
    }
}