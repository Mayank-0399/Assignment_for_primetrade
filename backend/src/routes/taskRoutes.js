import express from "express";
import { createTask, deleteTask, getTaskById, getTasks, updateTask } from "../controllers/taskController.js";
import { protect } from "../middleware/auth.js";
import validate from "../middleware/validate.js";
import { taskValidator } from "../validators/taskValidator.js";

const router = express.Router();

router.use(protect);
router.route("/").get(getTasks).post(taskValidator, validate, createTask);
router.route("/:id").get(getTaskById).put(taskValidator, validate, updateTask).delete(deleteTask);

export default router;