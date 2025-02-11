"use client";
import React from "react";
import Button from "../atoms/Button";
import Image from "next/image";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

export interface Book {
  id: string;
  title: string;
  authors?: string[];
  publication_year?: string;
  genre?: string[];
  rating?: number | string;
  thumbnail?: string;
}

interface TableProps {
  books: Book[];
  currentPage: number;
  booksPerPage: number;
  onPageChange: (page: number) => void;
}

function Table({ books, currentPage, booksPerPage, onPageChange }: TableProps) {
  const totalPages = Math.ceil(books?.length / booksPerPage) || 0;
  const startIndex = (currentPage - 1) * booksPerPage;
  const selectedBooks = books?.slice(startIndex, startIndex + booksPerPage);

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
          {selectedBooks?.map((book) => (
            <tr key={book.id} className="border-t">
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
          ))}
        </tbody>
      </table>
      <div className="flex items-center mt-4 mx-auto w-fit gap-4">
        <Button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <MdNavigateBefore />
        </Button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <Button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <MdNavigateNext />
        </Button>
      </div>
    </div>
  );
}

export default Table;
