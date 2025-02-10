import { Router } from "express"
import { param, query } from "express-validator"
import { authenticateJWT } from "../middlewares/auth.middleware"
import booksController from "../controllers/books.controllers"

const router = Router()

router.get(
  "/books",
  authenticateJWT,
  [
    query("limit")
      .optional()
      .isInt({ min: 1 })
      .withMessage("Limit must be a positive integer")
      .toInt(),
    query("offset")
      .optional()
      .isInt({ min: 0 })
      .withMessage("Offset must be a non-negative integer")
      .toInt(),
    query("search")
      .optional()
      .isString()
      .trim()
      .escape()
      .withMessage("Search must be a string"),
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
      .withMessage("Book ID is required and must be a string"),
  ],
  booksController.getBookById,
)

export default router
