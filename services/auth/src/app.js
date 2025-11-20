import express from "express";
import authRouter from "./routes/auth.routes.js";

const authApp = express();

authApp.use(express.json());

authApp.use((req, _res, next) => {
  console.log(`\n[AUTH] 🔐 ${req.method} ${req.originalUrl}`);
  next();
});

authApp.get("/health", (_req, res) => {
  return res.status(200).json({ source: "api/auth", ok: true });
});

authApp.use("/", authRouter);

export default authApp;
