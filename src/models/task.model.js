import mongoose from "mongoose"

const taskSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            requiered: true,
        },
        description: {
            type: String,
            required: true,
        },
        date: {
            type: Date, 
            default: Date.now,
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        }
    },
    {
        tipestamps: true
    }
);

export default mongoose.model("Task", taskSchema);