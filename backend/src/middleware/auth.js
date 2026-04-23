import jwt from "jsonwebtoken";
import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/apiError.js";
import User from "../models/User.js";

const protect = asyncHandler(async (req, res, next) => {
  const cookieToken = req.cookies?.token;
  const bearerToken = req.headers.authorization?.startsWith("Bearer ")
    ? req.headers.authorization.split(" ")[1]
    : null;

  const token = cookieToken || bearerToken;

  if (!token) {
    throw new ApiError(401, "Not authorized, no token");
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const user = await User.findById(decoded.id).select("-password");

  if (!user) {
    throw new ApiError(401, "User not found");
  }

  req.user = user;
  next();
});

export { protect };