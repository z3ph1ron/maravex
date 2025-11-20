import http from "http";
import app from "./app.js";
import env from "./config/env.js";

const initServer = () => {
  const server = http.createServer(app);

  server.listen(env.PORT, () => {
    console.log(`api/GATEWAY live on localhost:${env.PORT} ✅`);
  });
};

export default initServer;
