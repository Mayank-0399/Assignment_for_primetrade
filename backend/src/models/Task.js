import mongoose from "mongoose";
const taskSchema = new mongoose.Schema(
{
title: { type: String, required: true, trim: true, maxlength: 100 },
description: { type: String, trim: true, maxlength: 500, default: "" },
status: {
type: String,
enum: ["todo", "in-progress", "done"],
default: "todo"
},
priority: {
type: String,
enum: ["low", "medium", "high"],
default: "medium"
},
owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }
},
{ timestamps: true }
);
export default mongoose.model("Task", taskSchema);