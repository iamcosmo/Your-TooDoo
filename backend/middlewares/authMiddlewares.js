import jwt from "jsonwebtoken";
import UserDataModel from "../models/userModel.js";

export const authMiddleware = async (req, res, next) => {

console.log('middleware initiated!!');
  try {
    const token = req.headers.authorization?.split(" ")[1]; 
   
    if (!token) {
      return res.status(401).json({ message: "Unauthorized: No token provided" });
    }
    console.log('Token in middleware: ',token);
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await UserDataModel.findById(decoded._id);

    if (!user) {
      return res.status(401).json({ message: "Unauthorized: Invalid token" });
    }
    console.log('Moving to end of middleware');

    req.user = user; // Attach user to request object
    console.log("moving to next()");
    next();
  } catch (error) {
    console.error("Auth middleware error:", error);
    return res.status(401).json({ message: "Unauthorized: Invalid token" });
  }
};
