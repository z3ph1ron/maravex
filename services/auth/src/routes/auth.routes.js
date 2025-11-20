import { Router } from "express";
import { health, register } from "../controllers/auth.controller.js";

const authRouter = Router();

authRouter.get("/health", health);
authRouter.post("/register", register);

export default authRouter;
