import express from "express";

import { signUpUser,logInUser} from "../controllers/authController.js";

const authRouter = express.Router();

authRouter.post("/signup", signUpUser);
authRouter.post("/login", logInUser);

export default authRouter;
