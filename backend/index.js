import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRouter from "./routers/authRouter.js";
import adminRouter from "./routers/adminRouter.js";
import courseRouter from "./routers/courseRouter.js";
import enrollmentRouter from "./routers/enrollmentRouter.js";

dotenv.config();
const server = express();
server.use(express.json());
server.use(cookieParser());
server.use(cors(
    {
        origin: "http://localhost:5173",
        credentials: true
    }
));
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
server.use("/course", courseRouter);
server.use("/enrollment", enrollmentRouter);