import LineChart from "@/components/molecules/LineChart";
import BookList from "@/components/organisms/BookList";
import sampleBooks from "@/utils/data";
import axios from "axios";
import React from "react";

type Props = {};

async function page({}: Props) {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFiY0BhYmMuY29tIiwiaWF0IjoxNzM5MjgwODgyLCJleHAiOjE3MzkyODQ0ODJ9.T6MwQB6fDDQKEOfHl-7XbXej7YCKHaD1LmsPoSfUYWs";
  const books = await axios.get("http://localhost:5000/api/books", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log("books", books.data);
  const validBooks = books.data
    .filter((book) => book.rating !== "No rating") // Remove books without ratings
    .map((book) => ({
      year: book.publication_year,
      rating: Number(book.rating),
    }))
    .sort((a, b) => Number(a.year) - Number(b.year)); // Sort by year

  const years = validBooks.map((book) => book.year);
  const ratings = validBooks.map((book) => book.rating);
  return (
    <div>
      <BookList books={books.data} />
      <LineChart years={years} ratings={ratings} />
    </div>
  );
}

export default page;
