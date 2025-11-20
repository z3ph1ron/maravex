const health = async (req, res) => {
  console.log("req:", req);
  return res.status(200).json({ source: "api/auth", ok: true });
};

const register = async () => {};

const login = async () => {};

const logout = async () => {};

const resetPassword = async () => {};

const refreshToken = async () => {};

const me = async () => {};

export { health, register, login, logout, resetPassword, refreshToken, me };
