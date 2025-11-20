import dotenv from "dotenv";

dotenv.config();

const env = {
  PORT: process.env.PORT,
  NODE_ENV: process.env.NODE_ENV,
  MONGO_URI: process.env.MONGO_URI,
  JWT: {
    ACCESS_SECRET: process.env.JWT_ACCESS_TOKEN_SECRET,
    REFRESH_SECRET: process.env.JWT_REFRESH_TOKEN_SECRET,
    ACCESS_TTL: process.env.JWT_ACCESS_SECRET_TTL,
    REFRESH_TTL: process.env.JWT_REFRESH_SECRET_TTL,
  },
};

export default env;
