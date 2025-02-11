import SignupForm from "@/components/organisms/SignupForm";
import React from "react";

type Props = {};

function page({}: Props) {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <SignupForm />
    </div>
  );
}

export default page;
