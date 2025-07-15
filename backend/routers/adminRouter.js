import express from "express";
import { AddInstructor, getAllUsers, deleteUser, updateUser } from "../controllers/adminController.js";
import { isAdmin } from "../middlewares/verifyIsAdmin.js";

const router = express.Router();
router.post("/addInstructor", isAdmin, AddInstructor);
router.get("/getAllUsers", isAdmin, getAllUsers);
router.delete("/deleteUser/:id", isAdmin, deleteUser);
router.patch("/updateUser/:id", isAdmin, updateUser);
export default router;