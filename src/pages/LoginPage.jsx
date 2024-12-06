import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../api/auth";
import InputField from "../components/InputField";
import Button from "../components/Button";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login(email, password);
      console.log("Response Data:", response.data); // عرض البيانات
      localStorage.setItem("user", JSON.stringify(response.data));
      navigate("/home");
    } catch (error) {
      alert("فشل تسجيل الدخول. تحقق من البيانات.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">تسجيل الدخول</h1>
        <form onSubmit={handleSubmit}>
          <InputField
            label="البريد الإلكتروني"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="أدخل بريدك الإلكتروني"
            required
          />
          <InputField
            label="كلمة المرور"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="أدخل كلمة المرور"
            required
          />
          <Button type="submit" className="w-full">
            تسجيل الدخول
          </Button>
        </form>
        <div className="text-center mt-4">
          <span
            className="text-blue-500 cursor-pointer hover:underline"
            onClick={() => navigate("/register")}
          >
            إنشاء حساب جديد
          </span>
        </div>
        <div className="text-center mt-2">
          <span
            className="text-blue-500 cursor-pointer hover:underline"
            onClick={() => navigate("/forgot-password")}
          >
            نسيت كلمة المرور؟
          </span>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
