import express from "express";
import { login, logout, me, register } from "../controllers/authController.js";
import validate from "../middleware/validate.js";
import { protect } from "../middleware/auth.js";
import { loginValidator, registerValidator } from "../validators/authValidator.js";

const router = express.Router();

router.post("/register", registerValidator, validate, register);
router.post("/login", loginValidator, validate, login);
router.get("/me", protect, me);
router.post("/logout", protect, logout);

export default router;