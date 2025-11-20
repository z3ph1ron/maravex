import env from "../config/env.js";

const accessCookieOptions = {
  httpOnly: true,
  secure: env.NODE_ENV === "production",
  sameSite: "lax",
  maxAge: 15 * 60 * 1000,
  path: "/",
};

const refreshCookieOptions = {
  httpOnly: true,
  secure: env.NODE_ENV === "production",
  sameSite: "lax",
  maxAge: 7 * 24 * 60 * 60 * 1000,
  path: "/auth/refresh-token",
};

const setAuthCookies = (res, accessToken, refreshToken) => {
  res.cookie("maravex_at", accessToken, accessCookieOptions);
  res.cookie("maravex_rt", refreshToken, refreshCookieOptions);
};

const clearAuthCookies = (res) => {
  res.clearCookie("maravex_at", { path: "/" });
  res.clearCookie("maravex_rt", { path: "/auth/refresh-token" });
};

export {
  accessCookieOptions,
  refreshCookieOptions,
  setAuthCookies,
  clearAuthCookies,
};
