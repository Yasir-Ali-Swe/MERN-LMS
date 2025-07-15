import express from "express";
import { addCourse, getAllCourses, getCourse, deleteCourse, updateCourse } from "../controllers/courseController.js";
import { isInstructor } from "../middlewares/verifyIsInstructor.js";

const router = express.Router();
router.post("/addCourse", isInstructor, addCourse);
router.get("/getAllCourses", isInstructor, getAllCourses);
router.get("/getSingleCourse/:id", isInstructor, getCourse);
router.delete("/deleteCourse/:id", isInstructor, deleteCourse);
router.patch("/instructorUpdateCourse/:id", isInstructor, updateCourse);

export default router;