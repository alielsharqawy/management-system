import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import Button from "../components/Button";

function HomePage() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md text-center">
        <h1 className="text-3xl font-bold mb-4">مرحبًا بك</h1>
        <p className="text-lg mb-6">مرحبًا، {user?.name}</p>
        <Button onClick={handleLogout} className="w-full bg-red-500">
          تسجيل الخروج
        </Button>
      </div>
    </div>
  );
}

export default HomePage;
