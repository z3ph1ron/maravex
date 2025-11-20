import mongoose from "mongoose";
import env from "./env.js";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(env.MONGO_URI);

    console.log("[AUTH] x <MongoDB> connected ✅");
    console.log(`-> [${conn.connection.host}]`);
  } catch (e) {
    console.log("[AUTH] x <MongoDB> connection failed ❌");
    console.error("connectDB -> Error:", e);
  }
};

export default connectDB;
