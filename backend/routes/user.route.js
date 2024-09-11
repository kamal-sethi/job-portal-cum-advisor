import express from "express";
import {
  loginUser,
  registerUser,
  updateUser,
} from "../controller/user.contoller";
import isUserAuthenticated from "../middleware/isAuthenticated";
const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/update-profile", post(isUserAuthenticated, updateUser));

export default router;
