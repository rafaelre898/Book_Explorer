import { Router } from "express";
import { check } from "express-validator";
import usersControllers from "../controllers/users.controllers";

const router = Router();

router.post(
  "/login",
  [
    check("email").isEmail().withMessage("Invalid email format").normalizeEmail(),
    check("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters long").trim(),
  ],
  usersControllers.login
);

router.post(
  "/signup",
  [
    check("email").isEmail().withMessage("Invalid email format").normalizeEmail(),
    check("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters long").trim(),
  ],
  usersControllers.signup
);

export default router;
