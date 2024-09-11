import express from "express";
import {
  loginUser,
  logoutUser,
  registerUser,
  updateUser,
} from "../controller/user.controller.js";
import isUserAuthenticated from "../middleware/isAuthenticated.js";
const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/update-profile").post(isUserAuthenticated, updateUser);
router.route("/logout").get(logoutUser);

export default router;
