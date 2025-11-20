import { verifyAccessToken } from "../utils/jwt.js";

const deserializeUser = (req, res, next) => {
  const token = req.cookies?.maravex_at;
  if (!token) {
    return next();
  }

  try {
    const payload = verifyAccessToken(token);
    req.user = {
      id: payload.sub,
      role: payload.role || "",
      version: payload.version,
    };
  } catch (e) {
    //
  }

  return next();
};

const requireAuth = (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  next();
};

const requireRole =
  (...allowedRole) =>
  (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const userRole = req.user.role;
    const hasRole = userRole === allowedRole;
    if (!hasRole) {
      return res.status(403).json({ message: "Forbidden" });
    }

    next();
  };

export { deserializeUser, requireAuth, requireRole };
