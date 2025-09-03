import dotenv from 'dotenv';

dotenv.config();
const config = {
    port:process.env.PORT || 1574,
    db:process.env.MONGO_URI || "mongodb://localhost:27017/backup",
    secret: process.env.JWT_SECRET||"JWTSecret@123",
    expiresIn: process.env.JWT_EXPIRES_IN||'1d',
    apiVersion:process.env.API_VERSION ||'v1',
    clientUrl: process.env.CLIENT_URL || "http://localhost:1574",
  };
  
  export default config; 