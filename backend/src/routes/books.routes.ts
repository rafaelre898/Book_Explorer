import { Router } from "express";
import booksController from '../controllers/books.controllers'
import { param, query } from "express-validator";

const router = Router()

router.get('/books',
    [
        query('limit')
            .optional()
            .isInt({ min: 1 })
            .withMessage("Limit must be a positive integer")
            .toInt(),
        query('offset')
            .optional()
            .isInt({ min: 0 })
            .withMessage("Offset must be a non-negative integer")
            .toInt(),
        query('search')
            .optional()
            .isString()
            .trim()
            .escape()
            .withMessage("Search must be a string")
    ],
    booksController.getBooks
);

router.get('/books/:bookId',
    [
        param('bookId')
            .isString()
            .trim()
            .notEmpty()
            .withMessage("Book ID is required and must be a string")
    ],
    booksController.getBookById
);

export default router