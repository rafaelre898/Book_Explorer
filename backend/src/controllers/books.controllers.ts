import { NextFunction, Request, Response } from 'express'
import { validationResult } from 'express-validator';
import booksService from '../services/books.services'
import { AuthRequest } from '../middlewares/auth.middleware';

async function getBooks(req: AuthRequest, res: Response, next: NextFunction) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
        return;
    }
    const limit = req.query.limit ? Number(req.query.limit) : 10;
    const offset = req.query.offset ? Number(req.query.offset) : 0;
    const search = req.query.search ? req.query.search.toString() : 'programming';
    try {
        const books = await booksService.getBooks(limit, offset, search)
        res.json(books)
    } catch(error: any) {
        error.message = 'Error retrieving books'
        next(error)
    }
}

async function getBookById(req: AuthRequest, res: Response, next: NextFunction) {
    const id = req.params.bookId as string
    try {
        const book = await booksService.getBookById(id)
        res.json(book)
    } catch(error: any) {
        error.message = 'Error retrieving the book'
        next(error)
    }
}

export default { getBooks, getBookById }