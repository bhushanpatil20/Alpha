import express from "express";
import { registerUser, loginUser, logoutUser, getCurrentUser, googleLogin } from "../controllers/auth.controller.js";
import protect from "../middleware/auth.middleware.js";
import validate from "../middleware/validate.middleware.js";
import { registerSchema, loginSchema } from "../validators/auth.validator.js";
import { githubLogin } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/register", validate(registerSchema), registerUser);

router.post("/login", validate(loginSchema), loginUser);

router.post("/logout", logoutUser);

router.get("/me", protect, getCurrentUser);

router.post("/google", googleLogin);

router.post("/github", githubLogin);

export default router;