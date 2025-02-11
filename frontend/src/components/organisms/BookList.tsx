"use client";
import { useState } from "react";
import Input from "../atoms/Input";
import Label from "../atoms/Label";
import Table, { Book } from "../molecules/Table";

interface BookListProps {
  books: Book[];
}

function BookList({ books }: BookListProps) {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 5;

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4">
      <div className="mb-4 flex items-center w-[500px] mx-auto gap-3">
        <Label htmlFor="search">Search:</Label>
        <Input
          id="search"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="ml-2 p-2 border rounded w-[500px]"
        />
      </div>
      <Table
        books={filteredBooks}
        currentPage={currentPage}
        booksPerPage={booksPerPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}

export default BookList;
