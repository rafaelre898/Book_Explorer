"use client";
import { useEffect, useState } from "react";
import Input from "../atoms/Input";
import Label from "../atoms/Label";
import Table, { Book } from "../molecules/Table";
import axiosInstance from "@/utils/axios";
import LineChart from "../molecules/LineChart";

interface BookListProps {}

function BookList({}: BookListProps) {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 5;

  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    axiosInstance
      .get("http://localhost:5000/api/books")
      .then((res) => setBooks(res.data))
      .catch((err) => console.error("Error fetching books:", err));
  }, []);

  const validBooks = books
    .filter((book) => book.rating !== "No rating")
    .map((book) => ({
      year: book.publication_year,
      rating: Number(book.rating),
    }))
    .sort((a, b) => Number(a.year) - Number(b.year));

  const years = validBooks.map((book) => book.year);
  const ratings = validBooks.map((book) => book.rating);

  const filteredBooks = books.filter((book) =>
    book.title?.toLowerCase().includes(search?.toLowerCase())
  );
  useEffect(() => {
    axiosInstance.get(`/books?search=${search}`).then((res) => {
      setBooks(res.data);
    });
  }, [search]);
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
      <div className="w-[1000px] mx-auto mt-10">
        <LineChart years={years} ratings={ratings} />
      </div>
    </div>
  );
}

export default BookList;
