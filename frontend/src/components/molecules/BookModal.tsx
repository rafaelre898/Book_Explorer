"use client";
import React, { useEffect, useState } from "react";
import axiosInstance from "@/utils/axios";
import Loader from "../atoms/Loader";

interface BookModalProps {
  bookId: string | null;
  onClose: () => void;
}

const BookModal: React.FC<BookModalProps> = ({ bookId, onClose }) => {
  const [book, setBook] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!bookId) return;
    const token = getToken();
    setLoading(true);
    axiosInstance
      .get(`/books/${bookId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setBook(res.data))
      .catch(() => setBook(null))
      .finally(() => setLoading(false));
  }, [bookId]);

  if (!bookId) return null;
  const getToken = () => {
    const userString = localStorage.getItem("user");
    const user = userString ? JSON.parse(userString) : null;
    const token = user?.token || "";
    return token;
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
        <button
          className="absolute top-2 right-2 text-gray-600"
          onClick={onClose}
        >
          ✖
        </button>
        <h2 className="text-lg font-semibold mb-4">Book Details</h2>
        {loading ? (
          <Loader />
        ) : book ? (
          <div>
            <p>
              <strong>Title:</strong> {book.title}
            </p>
            <p>
              <strong>Authors:</strong> {book.authors?.join(", ") || "N/A"}
            </p>
            <p>
              <strong>Published:</strong> {book.publication_year || "N/A"}
            </p>
            <p>
              <strong>Genre:</strong> {book.genre || "N/A"}
            </p>
            <p>
              <strong>Rating:</strong> {book.rating || "N/A"}
            </p>
          </div>
        ) : (
          <p className="text-red-500">Book not found.</p>
        )}
      </div>
    </div>
  );
};

export default BookModal;
