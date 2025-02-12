import axios from "axios"
import { Book, GoogleBooksResponse } from "../types/books.types"
import {
  DEFAULT_RATING,
  GOOGLE_BOOKS_API_URL,
  UNKNOWN,
} from "../utils/constants"

async function getBooks(limit: number, offset: number, search: string) {
  const response = await axios.get<GoogleBooksResponse>(GOOGLE_BOOKS_API_URL, {
    params: {
      q: search || "books",
      startIndex: offset,
      maxResults: limit,
      printType: "books",
    },
  })

  const books = response.data.items || []

  return books.map((book: Book) => ({
    id: book.id,
    title: book.volumeInfo.title,
    authors: book.volumeInfo.authors || [UNKNOWN],
    publication_year: book.volumeInfo.publishedDate
      ? book.volumeInfo.publishedDate.split("-")[0]
      : UNKNOWN,
    genre: book.volumeInfo.categories
      ? book.volumeInfo.categories.join(", ")
      : UNKNOWN,
    rating: book.volumeInfo.averageRating || DEFAULT_RATING,
    thumbnail: book.volumeInfo.imageLinks?.thumbnail || null,
  }))
}

async function getBookById(bookId: string) {
  const response = await axios.get<Book>(`${GOOGLE_BOOKS_API_URL}/${bookId}`)
  const book = response.data
  return {
    id: book.id,
    title: book.volumeInfo.title,
    authors: book.volumeInfo.authors || [UNKNOWN],
    publication_year: book.volumeInfo.publishedDate
      ? book.volumeInfo.publishedDate.split("-")[0]
      : UNKNOWN,
    genre: book.volumeInfo.categories
      ? book.volumeInfo.categories.join(", ")
      : UNKNOWN,
    rating: book.volumeInfo.averageRating || DEFAULT_RATING,
    thumbnail: book.volumeInfo.imageLinks?.thumbnail || null,
  }
}

export default { getBooks, getBookById }
