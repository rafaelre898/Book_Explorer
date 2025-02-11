"use client"
import React from "react"
import Button from "../atoms/Button"

export interface Book {
  id: string
  volumeInfo: {
    title: string
    authors?: string[]
    publishedDate?: string
    categories?: string[]
    averageRating?: number
    imageLinks?: {
      thumbnail?: string
    }
  }
}

interface TableProps {
  books: Book[]
  currentPage: number
  booksPerPage: number
  onPageChange: (page: number) => void
}

function Table({ books, currentPage, booksPerPage, onPageChange }: TableProps) {
  const totalPages = Math.ceil(books?.length / booksPerPage) || 0
  const startIndex = (currentPage - 1) * booksPerPage
  const selectedBooks = books?.slice(startIndex, startIndex + booksPerPage)

  return (
    <div className="w-full p-4 border rounded shadow-md">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="p-2">Thumbnail</th>
            <th className="p-2">Title</th>
            <th className="p-2">Authors</th>
            <th className="p-2">Published Date</th>
            <th className="p-2">Categories</th>
            <th className="p-2">Rating</th>
          </tr>
        </thead>
        <tbody>
          {selectedBooks?.map((book) => (
            <tr key={book.id} className="border-t">
              <td className="p-2">
                {book.volumeInfo.imageLinks?.thumbnail && (
                  <img
                    src={book.volumeInfo.imageLinks.thumbnail}
                    alt={book.volumeInfo.title}
                    className="w-12 h-12"
                  />
                )}
              </td>
              <td className="p-2">{book.volumeInfo.title}</td>
              <td className="p-2">
                {book.volumeInfo.authors?.join(", ") || "N/A"}
              </td>
              <td className="p-2">{book.volumeInfo.publishedDate || "N/A"}</td>
              <td className="p-2">
                {book.volumeInfo.categories?.join(", ") || "N/A"}
              </td>
              <td className="p-2">{book.volumeInfo.averageRating || "N/A"}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-4">
        <Button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <Button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </div>
    </div>
  )
}

export default Table
