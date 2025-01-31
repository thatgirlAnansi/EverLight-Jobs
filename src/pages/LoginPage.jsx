import React from "react";
import LoginForm from "../components/LoginForm";

const LoginPage = ({ setIsLoggedIn }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <LoginForm setIsLoggedIn={setIsLoggedIn} />
    </div>
  );
};

export default LoginPage;