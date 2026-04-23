import ApiError from "../utils/apiError.js";
const authorize = (...allowedRoles) => (req, res, next) => {
if (!req.user) return next(new ApiError(401, "Authentication required"));
if (!allowedRoles.includes(req.user.role)) {
return next(new ApiError(403, "Access denied for this role"));
}
next();
};
export { authorize };