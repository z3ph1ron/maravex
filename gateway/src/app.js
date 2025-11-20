import express from "express";
import cors from "cors";
import authRouter from "./routes/auth.routes.js";

const app = express();

app.use(cors());

app.use((req, res, next) => {
  console.log(`\n[GATEWAY] ${req.method} ${req.originalUrl}`);
  next();
});

app.get("/health", (_req, res) => {
  return res.status(200).json({ source: "api/GATEWAY", ok: true });
});

app.use("/auth", authRouter);

export default app;
