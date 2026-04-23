import { body } from "express-validator";
export const taskValidator = [
body("title").trim().isLength({ min: 2 }).withMessage("Title must be at least 2 characters"),
body("description").optional().trim().isLength({ max:
500 }).withMessage("Description too long"),
body("status").optional().isIn(["todo", "in-progress",
"done"]).withMessage("Invalid status"),
body("priority").optional().isIn(["low", "medium",
"high"]).withMessage("Invalid priority")
];