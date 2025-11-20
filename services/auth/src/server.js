import http from "http";
import env from "./config/env.js";
import authApp from "./app.js";
import connectDB from "./config/db.js";

const initServer = async () => {
  const authServer = http.createServer(authApp);

  await connectDB();

  authServer.listen(env.PORT, () => {
    console.log(`[api/AUTH] live on localhost:${env.PORT} ✅`);
  });
};

export default initServer;
