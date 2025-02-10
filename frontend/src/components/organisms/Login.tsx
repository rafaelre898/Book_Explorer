"use client";

import React, { useState } from "react";
import FormField from "../molecules/FormField";
import Button from "../atoms/Button";
import axiosInstance from "@/utils/axios";

const LoginForm: React.FC = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    axiosInstance
      .post("/login", {
        ...formData,
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 bg-white rounded shadow-md w-96"
    >
      <h2 className="text-xl font-semibold mb-4">Login</h2>
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
        <Button type="submit">Login</Button>
      </div>
    </form>
  );
};

export default LoginForm;
