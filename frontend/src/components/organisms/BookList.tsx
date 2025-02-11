"use client";
import { useEffect, useState } from "react";
import Input from "../atoms/Input";
import Label from "../atoms/Label";
import Table from "../molecules/Table";
import axiosInstance from "@/utils/axios";
import LineChart from "../molecules/LineChart";
import { useRouter } from "next/navigation";
import { Book } from "@/types/book";

function BookList() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 5;

  const [books, setBooks] = useState<Book[]>([]);

  const validBooks = books
    .filter((book) => book.rating !== "No rating")
    .map((book) => ({
      year: book.publication_year,
      rating: Number(book.rating),
    }))
    .sort((a, b) => Number(a.year) - Number(b.year));

  const years = validBooks.map((book) => book.year);
  const ratings = validBooks.map((book) => book.rating);

  useEffect(() => {
    if (!localStorage.getItem("user")) return router.push("/login");
  }, []);

  useEffect(() => {
    const offset = (currentPage - 1) * booksPerPage;
    const token = getToken();
    axiosInstance
      .get(`/books?search=${search}&offset=${offset}&limit=${booksPerPage}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setBooks(res.data);
      });
  }, [search, currentPage]);

  const getToken = () => {
    const userString = localStorage.getItem("user");
    const user = userString ? JSON.parse(userString) : null;
    const token = user?.token || "";
    return token;
  };

  return (
    <div className="p-4">
      <h1 className="text-4xl text-center py-8">Book Explorer</h1>
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
        books={books}
        currentPage={currentPage}
        booksPerPage={booksPerPage}
        onPageChange={setCurrentPage}
      />
      <div className="text-center py-8">
        <h3 className="text-4xl py-4">Ratings</h3>
        <p>See whats trending over the years..</p>
      </div>
      <div className="w-[800px] mx-auto mt-10">
        <LineChart years={years} ratings={ratings} />
      </div>
    </div>
  );
}

export default BookList;
