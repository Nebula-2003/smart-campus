import jwt from "jsonwebtoken";
import { userCoreServices } from "../services/user/user.services.js";

const SYSTEM_ROLES = ["admin", "student", "teacher"];

const verifyJWT = (req) => {
  try {
    const token = req.headers.authorization.replace("Bearer", "").trim();
    const userInfo = jwt.verify(token, process.env.JWT_SECRET);
    req.user = userInfo;
    return true;
  } catch (error) {
    return false;
  }
};

export const isAuthorized = (allowedRoles) => async (req, res, next) => {
  console.log("API ACCESS ROLES : ", allowedRoles);
  if (!verifyJWT(req)) return res.status(403).json({ code: "SESSION_EXPIRED", success: false, message: "Session expired", data: {} });

  const user = await userCoreServices.findOne({ _id: req.user.id });
  if (!user) return res.status(401).json({ code: "USER_NOT_FOUND", success: false, message: "User not found", data: {} });

  const role = req.user.role;

  if (!SYSTEM_ROLES.includes(role)) return res.status(403).json({ code: "UNAUTHORIZED", success: false, message: "Unauthorized", data: {} });
  if (!allowedRoles.includes(role)) return res.status(403).json({ code: "UNAUTHORIZED", success: false, message: "Unauthorized", data: {} });
  return next();
};
