import jwt from "jsonwebtoken";
import * as commonResponse from "./commonResponse.js";
import Users from "../services/users/users.model.js";

const createToken = (user, type = "user") => {
  const payload = {
    id: user._id.toString(),
    role: user.role
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.EXPIRE_JWT_SECRET || "30d",
  });
  payload.token = token;
  return payload;
};

const verifyJWT = (req, res) => {
  try {
    const token = req.headers.authorization.replace("Bearer", "").trim();
    console.log(token);
    const userInfo = jwt.verify(token, process.env.JWT_SECRET);
    req.user = userInfo;
    return 1;
  } catch (error) {
    return 0;
  }
};

const isAuthorized = (users) => async (req, res, next) => {
  const isVerify = verifyJWT(req, res);
  console.log("Users : ", users);
  if (isVerify) {
    const user = await Users.findById({ _id: req.user.id });

    if (!user) {
      return commonResponse.unAuthentication(res, {}, "USER_NOT_FOUND");
    }

    const allowedRoles = ["landlord", "tenant", "admin"];
    const role = req.user.role;

    if (users.some((role) => allowedRoles.includes(role))) {
      if (users.indexOf(role) > -1) {
        next();
      } else {
        console.log('not allowed');
        return commonResponse.unAuthentication(res, {}, "REQUEST_NOT_ALLOWED", 403);
      }
    } else {
      return commonResponse.unAuthentication(res, {}, "REQUEST_NOT_ALLOWED");
    }
  } else {
    return commonResponse.unAuthentication(res, {}, "SESSION_EXPIRED");
  }
};

export {
  createToken,
  isAuthorized,
};
