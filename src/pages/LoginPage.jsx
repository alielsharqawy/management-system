import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../api/auth";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login(email, password);
      localStorage.setItem("user", JSON.stringify(response.data));
      navigate("/home");
    } catch (error) {
      alert("Login failed");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">تسجيل الدخول</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">البريد الإلكتروني</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">كلمة المرور</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none"
              required
            />
          </div>
          <button className="w-full bg-blue-500 text-white py-2 rounded-lg">
            تسجيل الدخول
          </button>
        </form>
        <div className="text-center mt-4">
          <Link to="/forgot-password" className="text-blue-500">
            نسيت كلمة المرور؟
          </Link>
        </div>
        <div className="text-center mt-2">
          <span>ليس لديك حساب؟ </span>
          <Link to="/register" className="text-blue-500">
            إنشاء حساب
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
