import { Request, Response } from 'express'
import { validationResult } from 'express-validator';
import booksService from '../services/books.services'

async function getBooks(req: Request, res: Response) {
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
        res.status(500).json({ message: "Error retrieving books", error: error.message })
    }
}

async function getBookById(req: Request, res: Response) {
    const id = req.params.bookId as string
    try {
        const book = await booksService.getBookById(id)
        res.json(book)
    } catch(error: any) {
        res.status(500).json({ message: "Error retrieving books", error: error.message })
    }
}

export default { getBooks, getBookById }