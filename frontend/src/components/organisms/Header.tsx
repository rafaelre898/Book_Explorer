"use client";

import React from "react";
import Button from "../atoms/Button";
import { useRouter } from "next/navigation";

const Header: React.FC = () => {
  const router = useRouter();
  const handleLogout = () => {
    localStorage.clear();
    router.push("/login");
  };

  return (
    <header className="flex justify-between items-center bg-black text-white p-4 shadow-md w-full">
      <h1 className="text-xl font-bold">Book E x p l o r e r</h1>
      <Button
        onClick={handleLogout}
        className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-md text-white"
      >
        Logout
      </Button>
    </header>
  );
};

export default Header;
