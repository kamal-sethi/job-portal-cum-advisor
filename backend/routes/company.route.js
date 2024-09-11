import express from "express";
import {
  getCompany,
  getSingleCompany,
  registerCompany,
  updateCompany,
} from "../controller/company.controller";
const router = express.Router();

router.route("/register-company").post(registerCompany);
router.route("/get-company").get(getCompany);
router.route("/get-company/:id").get(getSingleCompany);
router.route("/update-company/:id").post(updateCompany);

export default router;
