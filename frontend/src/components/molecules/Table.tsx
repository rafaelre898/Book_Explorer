"use client";
import React, { useState } from "react";
import Button from "../atoms/Button";
import Image from "next/image";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import BookModal from "../molecules/BookModal";
import { Book } from "@/types/book";

interface TableProps {
  books: Book[];
  currentPage: number;
  booksPerPage: number;
  onPageChange: (page: number) => void;
}

function Table({ books, currentPage, onPageChange }: TableProps) {
  const [selectedBookId, setSelectedBookId] = useState<string | null>(null);

  return (
    <div className="w-[1000px] p-4 border rounded shadow-md mx-auto">
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
          {books.length > 0 ? (
            books.map((book) => (
              <tr
                key={book.id}
                className="border-t cursor-pointer hover:bg-gray-100"
                onClick={() => setSelectedBookId(book.id)}
              >
                <td className="p-2">
                  {book?.thumbnail && (
                    <Image
                      src={book.thumbnail}
                      alt={book.title}
                      className="w-12 h-12"
                      width={100}
                      height={100}
                    />
                  )}
                </td>
                <td className="p-2">{book.title}</td>
                <td className="p-2">{book.authors?.join(", ") || "N/A"}</td>
                <td className="p-2">{book.publication_year || "N/A"}</td>
                <td className="p-2">{book.genre || "N/A"}</td>
                <td className="p-2">{book.rating || "N/A"}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={6} className="text-center p-4">
                No books found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <div className="flex items-center mt-4 mx-auto w-fit gap-4">
        <Button
          className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <MdNavigateBefore />
        </Button>
        <span>Page {currentPage}</span>
        <Button
          className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded"
          onClick={() => onPageChange(currentPage + 1)}
        >
          <MdNavigateNext />
        </Button>
      </div>

      {selectedBookId && (
        <BookModal
          bookId={selectedBookId}
          onClose={() => setSelectedBookId(null)}
        />
      )}
    </div>
  );
}

export default Table;
