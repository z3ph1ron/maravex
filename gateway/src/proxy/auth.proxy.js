import { createProxyMiddleware } from "http-proxy-middleware";
import env from "../config/env.js";

const authProxy = createProxyMiddleware({
  target: env.UPSTREAM.auth,
  changeOrigin: true,
  logLevel: "info",
  pathRewrite: { "^/auth": "" },

  onError: (e, req, res) => {
    console.error("Auth proxy error:", e);

    if (!res.headersSent) {
      res.writeHead(502, { "Content-Type": "application/json" });
    }

    res.end(JSON.stringify({ error: "UPSTREAM.auth unavailable." }));
  },
});

export default authProxy;
