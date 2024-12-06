import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { forgotPassword } from "../api/auth";

function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await forgotPassword(email); // إرسال البريد الإلكتروني للـ API
      alert("تم إرسال رمز إعادة التعيين إلى بريدك الإلكتروني");
      // التوجيه إلى صفحة إعادة التعيين
      navigate("/reset-password", { state: { email } });
    } catch (error) {
      alert("فشل إرسال رمز إعادة التعيين");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">
          نسيت كلمة المرور
        </h1>
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
          <button className="w-full bg-blue-500 text-white py-2 rounded-lg">
            إرسال رمز إعادة التعيين
          </button>
        </form>
      </div>
    </div>
  );
}

export default ForgotPasswordPage;
