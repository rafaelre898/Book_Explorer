import { Router } from "express"
import { param, query } from "express-validator"
import { authenticateJWT } from "../middlewares/auth.middleware"
import booksController from "../controllers/books.controllers"
import {
  BOOK_ID_VALIDATION_MSG,
  LIMIT_VALIDATION_MSG,
  OFFSET_VALIDATION_MSG,
  SEARCH_VALIDATION_MSG,
} from "../utils/constants"

const router = Router()

router.get(
  "/books",
  authenticateJWT,
  [
    query("limit")
      .optional()
      .isInt({ min: 1 })
      .withMessage(LIMIT_VALIDATION_MSG)
      .toInt(),
    query("offset")
      .optional()
      .isInt({ min: 0 })
      .withMessage(OFFSET_VALIDATION_MSG)
      .toInt(),
    query("search")
      .optional()
      .isString()
      .trim()
      .escape()
      .withMessage(SEARCH_VALIDATION_MSG),
  ],
  booksController.getBooks,
)

router.get(
  "/books/:bookId",
  authenticateJWT,
  [
    param("bookId")
      .isString()
      .trim()
      .notEmpty()
      .withMessage(BOOK_ID_VALIDATION_MSG),
  ],
  booksController.getBookById,
)

export default router
