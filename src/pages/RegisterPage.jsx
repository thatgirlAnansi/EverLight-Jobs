import React from "react";
import RegisterForm from "../components/RegisterForm";

const RegisterPage = ({ setIsLoggedIn }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <RegisterForm setIsLoggedIn={setIsLoggedIn} />
    </div>
  );
};

export default RegisterPage;