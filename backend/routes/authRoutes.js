import express from "express";

import { signUpUser,logInUser} from "../controllers/authController.js";

const authRouter = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - name
 *         - username
 *         - password
 *       properties:
 *         name:
 *           type: string
 *           description: The user's name
 *         username:
 *           type: string
 *           description: The user's username
 *         password:
 *           type: string
 *           description: The user's password
 *       example:
 *         name: John Doe
 *         username: johndoe
 *         password: StrongPassword123!
 */

/**
 * @swagger
 * /auth/signup:
 *   post:
 *     summary: Sign up a new user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: The user was successfully signed up
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: The JWT token for the signed-up user
 *                 user:
 *                   $ref: '#/components/schemas/User'
 *       400:
 *         description: Bad request, invalid input
 *       500:
 *         description: Some server error
 */
authRouter.post("/signup", signUpUser);


/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Log in an existing user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: The user's username
 *               password:
 *                 type: string
 *                 description: The user's password
 *             example:
 *               username: johndoe
 *               password: StrongPassword123!
 *     responses:
 *       200:
 *         description: The user was successfully logged in
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: The JWT token for the logged-in user
 *       400:
 *         description: Bad request, invalid input
 *       401:
 *         description: Unauthorized, invalid credentials
 *       500:
 *         description: Some server error
 */
authRouter.post("/login", logInUser);

export default authRouter;
