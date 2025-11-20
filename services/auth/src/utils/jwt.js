import jwt from "jsonwebtoken";
import env from "../config/env.js";

const signAccessToken = (user) => {
  return jwt.sign(
    {
      sub: user._id.toString(),
      role: user.role,
      version: user.refreshTokenVersion,
    },
    env.JWT.ACCESS_SECRET,
    { expiresIn: env.JWT.ACCESS_TTL, issuer: "maravex-api" }
  );
};

const signRefreshToken = (user) => {
  return jwt.sign(
    {
      sub: user._id.toString(),
      version: user.refreshTokenVersion,
    },
    env.JWT.REFRESH_SECRET,
    { expiresIn: env.JWT.REFRESH_TTL, issuer: "maravex-api" }
  );
};

const verifyAccessToken = (token) => {
  return jwt.verify(token, env.JWT.ACCESS_SECRET);
};

const verifyRefreshToken = (token) => {
  return jwt.verify(token, env.JWT.REFRESH_SECRET);
};

export {
  signAccessToken,
  verifyAccessToken,
  signRefreshToken,
  verifyRefreshToken,
};
