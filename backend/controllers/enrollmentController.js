import courseModel from "../models/courseModel.js";
import enrollmentModel from "../models/enrollmentModel.js";
export const enrollInCourse = async (req, res) => {
    try {
        const { student, course } = req.body;
        const isCourseExist = await courseModel.findById(course);
        if (!isCourseExist || isCourseExist.published === false) {
            return res.status(400).json({ success: false, message: "Course not found or not published" });
        }
        const alreadyEnroll = await enrollmentModel.findOne({ student, course });
        if (alreadyEnroll) {
            return res.status(400).json({ success: false, message: "You are already enrolled in this course" });
        }
        const newEnrollment = await enrollmentModel.create({ student, course });
        return res.status(200).json({ success: true, message: "Enrollment successful", newEnrollment });

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal Server Error" })
    }
}

export const getAllEnrollments = async (req, res) => {
    try {
        const studentId = req.params.id;
        if (!studentId) {
            return res.status(400).json({ success: false, message: "User not found or Id is required" });
        }
        const enrollments=await enrollmentModel.findOne({student:studentId}).populate('student','name email').populate('course','name description');
        return res.status(200).json({ success: true, message: "Enrollments fetched successfully", enrollments });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal Server Error" })
    }
}