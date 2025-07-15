import express from "express";
import { AddInstructor, getAllUsers, deleteUser, updateUser, adminPublishCourse } from "../controllers/adminController.js";
import { deleteCourse } from "../controllers/courseController.js";
import { isAdmin } from "../middlewares/verifyIsAdmin.js";

const router = express.Router();
router.post("/addInstructor", isAdmin, AddInstructor);
router.get("/getAllUsers", isAdmin, getAllUsers);
router.delete("/adminDeleteUser/:id", isAdmin, deleteUser);
router.delete("/adminDeleteCourse/:id", isAdmin, deleteCourse);
router.patch("/updateUser/:id", isAdmin, updateUser);
router.patch("/adminPublishCourse/:id",isAdmin,adminPublishCourse)
export default router;