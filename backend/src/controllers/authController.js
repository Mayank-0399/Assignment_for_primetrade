import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/apiError.js";
import User from "../models/User.js";
import generateToken from "../utils/generateToken.js";
const cookieOptions = {
httpOnly: true,
sameSite: "lax",
secure: process.env.NODE_ENV === "production"
};
const sendTokenResponse = (res, user, statusCode) => {
const token = generateToken(user._id);
res
.status(statusCode)
.cookie("token", token, {
...cookieOptions,
maxAge: 24 * 60 * 60 * 1000
})
.json({
success: true,
message: statusCode === 201 ? "Registered successfully" : "Logged in successfully",
user: {
id: user._id,
name: user.name,
email: user.email,
role: user.role
}
});
};
export const register = asyncHandler(async (req, res) => {
const { name, email, password } = req.body;
const existing = await User.findOne({ email });
if (existing) throw new ApiError(400, "Email already exists");
const user = await User.create({ name, email, password });
sendTokenResponse(res, user, 201);
});
export const login = asyncHandler(async (req, res) => {
const { email, password } = req.body;
const user = await User.findOne({ email }).select("+password");
if (!user) throw new ApiError(401, "Invalid credentials");
const isMatch = await user.matchPassword(password);
if (!isMatch) throw new ApiError(401, "Invalid credentials");
sendTokenResponse(res, user, 200);
});
export const me = asyncHandler(async (req, res) => {
res.json({ success: true, user: req.user });
});
export const logout = asyncHandler(async (req, res) => {
res
.clearCookie("token", { httpOnly: true, sameSite: "lax", secure:
process.env.NODE_ENV === "production" })
.json({ success: true, message: "Logged out successfully" });
});