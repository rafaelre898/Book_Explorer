import { check } from "express-validator"
import { Router } from "express"
import usersControllers from "../controllers/users.controllers"
import {
  EMAIL_VALIDATION_MSG,
  PASSWORD_VALIDATION_MSG,
} from "../utils/constants"

const router = Router()

router.post(
  "/login",
  [
    check("email").isEmail().withMessage(EMAIL_VALIDATION_MSG).normalizeEmail(),
    check("password")
      .isLength({ min: 6 })
      .withMessage(PASSWORD_VALIDATION_MSG)
      .trim(),
  ],
  usersControllers.login,
)

router.post(
  "/signup",
  [
    check("email").isEmail().withMessage(EMAIL_VALIDATION_MSG).normalizeEmail(),
    check("password")
      .isLength({ min: 6 })
      .withMessage(PASSWORD_VALIDATION_MSG)
      .trim(),
  ],
  usersControllers.signup,
)

export default router
