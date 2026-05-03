import { Router } from "express";
import { loginUser, logout, registerUser } from "../controllers/auth.controller.js";

const router = Router();

router.post("/login", loginUser);
router.post("/register", registerUser);
router.post("/logout", logout);

export default router;
