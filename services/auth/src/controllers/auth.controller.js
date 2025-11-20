import bcrypt from "bcryptjs";
import User from "../models/User.js";
import {
  signAccessToken,
  signRefreshToken,
  verifyRefreshToken,
} from "../utils/jwt.js";
import { setAuthCookies, clearAuthCookies } from "../utils/cookies.js";

const buildUserResponse = (user) => ({
  id: user._id,
  email: user.email,
  profile: user.profile,
  role: user.role,
  isActive: user.isActive,
  createdAt: user.createdAt,
  updatedAt: user.updatedAt,
});

const health = async (req, res) => {
  console.log("req:", req);
  return res.status(200).json({ source: "api/auth", ok: true });
};

const register = async (req, res) => {
  try {
    const { email, password, firstName, lastName } = req.body;

    const userInDB = await User.findOne({ email: email.toLowerCase() });
    if (userInDB) {
      return res.status(409).json({ message: "Email aready in use." });
    }

    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    const user = await User.create({
      email: email.toLowerCase(),
      password: passwordHash,
      profile: {
        firstName,
        lastName,
      },
    });

    return res.status(201).json({ user: buildUserResponse(user) });
  } catch (e) {
    console.error("Error in auth.register:", e);
    return res.status(500).json({ message: "Internal server error." });
  }
};

const login = async () => {};

const logout = async () => {};

const resetPassword = async () => {};

const refreshToken = async () => {};

const me = async () => {};

export { health, register, login, logout, resetPassword, refreshToken, me };
