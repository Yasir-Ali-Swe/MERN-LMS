import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRouter from "./routers/authRouter.js";
import adminRouter from "./routers/adminRouter.js";

dotenv.config();
const server = express();
server.use(express.json());
server.use(cors());
server.use(cookieParser());
const CONNECTION_STRING = process.env.CONNECTION_STRING;
const PORT = process.env.PORT;
mongoose.connect(CONNECTION_STRING).then(() => {
    console.log("Database connected");
    server.listen(PORT, () => {
        console.log("Server started on port " + PORT);
    })
})

server.use("/auth", authRouter);
server.use("/admin", adminRouter);