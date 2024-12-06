import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { verifyEmail } from "../api/auth"; // استخدم الـ API الخاص بـ verify email

function VerifyEmailPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({
    email: location.state?.email || "", // البريد الإلكتروني المرسل من صفحة التسجيل
    verification_code: "", // رمز التحقق
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // إرسال البيانات إلى API
      await verifyEmail(formData);
      setMessage("تم التحقق من البريد الإلكتروني بنجاح!");
      setTimeout(() => navigate("/"), 2000); // التوجيه إلى صفحة تسجيل الدخول بعد 2 ثانية
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "فشل التحقق من البريد الإلكتروني. حاول مرة أخرى."
      );
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">
          تأكيد البريد الإلكتروني
        </h1>
        {message && (
          <div className="bg-green-100 text-green-700 p-3 rounded mb-4 text-center">
            {message}
          </div>
        )}
        {error && (
          <div className="bg-red-100 text-red-700 p-3 rounded mb-4 text-center">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">البريد الإلكتروني</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none"
              required
              readOnly // البريد الإلكتروني غير قابل للتعديل لأنه قادم من صفحة التسجيل
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">رمز التحقق</label>
            <input
              type="text"
              name="verification_code"
              value={formData.verification_code}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
          >
            تأكيد البريد الإلكتروني
          </button>
        </form>
      </div>
    </div>
  );
}

export default VerifyEmailPage;
