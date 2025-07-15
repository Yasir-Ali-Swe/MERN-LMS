import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    instructor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    published: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

export default mongoose.model("Course", courseSchema);