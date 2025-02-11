"use client";

import React, { useState } from "react";
import FormField from "../molecules/FormField";
import Button from "../atoms/Button";
import axiosInstance from "@/utils/axios";
import { useRouter } from "next/navigation";
import axios from "axios";
import { APIError, APIFieldError } from "@/types/api";
import Link from "next/link";

const SignupForm: React.FC = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      await axiosInstance.post("/signup", formData);
      router.push("/login");
    } catch (err: unknown) {
      if (axios.isAxiosError(err) && err.response) {
        const errorResponse = err.response.data as APIError;

        if (errorResponse.message) {
          setError(errorResponse.message);
        } else if (
          errorResponse.errors &&
          Array.isArray(errorResponse.errors)
        ) {
          setError(
            errorResponse.errors
              .map((errObj: APIFieldError) => errObj.msg)
              .join(", ")
          );
        } else {
          setError("An unexpected error occurred");
        }
      } else {
        setError("An unexpected error occurred");
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 bg-white rounded shadow-md w-96"
    >
      <h2 className="text-xl font-semibold mb-4">Signup</h2>
      <div className="space-y-3">
        <FormField
          label="Email"
          id="email"
          type="email"
          placeholder="Enter your email"
          onChange={handleChange}
          value={formData.email}
        />
        <FormField
          label="Password"
          id="password"
          type="password"
          placeholder="Enter your password"
          onChange={handleChange}
          value={formData.password}
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <Button type="submit">Signup</Button>
        <p>
          Already have an account?{" "}
          <Link className="text-blue-500" href={"/login"}>
            Login
          </Link>
        </p>
      </div>
    </form>
  );
};

export default SignupForm;
