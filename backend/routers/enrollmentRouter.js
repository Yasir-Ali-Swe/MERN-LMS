import express from "express";
import { enrollInCourse, getAllEnrollments } from "../controllers/enrollmentController.js";

const router = express.Router();
router.post("/enrollInCourse", enrollInCourse);
router.get("/StudentEnrollments/:id", getAllEnrollments);

export default router;  