import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/apiError.js";
import Task from "../models/Task.js";

const canAccessTask = (task, user) =>
  user.role === "admin" || task.owner.toString() === user.id.toString();

export const createTask = asyncHandler(async (req, res) => {
  const task = await Task.create({ ...req.body, owner: req.user.id });
  res.status(201).json({ success: true, message: "Task created", task });
});

export const getTasks = asyncHandler(async (req, res) => {
  const filter = req.user.role === "admin" ? {} : { owner: req.user.id };
  const tasks = await Task.find(filter).sort({ createdAt: -1 });
  res.json({ success: true, count: tasks.length, tasks });
});

export const getTaskById = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (!task) throw new ApiError(404, "Task not found");
  if (!canAccessTask(task, req.user)) throw new ApiError(403, "Not allowed");
  res.json({ success: true, task });
});

export const updateTask = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (!task) throw new ApiError(404, "Task not found");
  if (!canAccessTask(task, req.user)) throw new ApiError(403, "Not allowed");

  const updated = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  res.json({ success: true, message: "Task updated", task: updated });
});

export const deleteTask = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (!task) throw new ApiError(404, "Task not found");
  if (!canAccessTask(task, req.user)) throw new ApiError(403, "Not allowed");

  await task.deleteOne();
  res.json({ success: true, message: "Task deleted" });
});