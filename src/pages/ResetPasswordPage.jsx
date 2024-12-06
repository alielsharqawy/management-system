import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { resetPassword } from "../api/auth";

function ResetPasswordPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: location.state?.email || "", // البريد الإلكتروني القادم من صفحة نسيت كلمة المرور
    code: "",
    password: "",
    password_confirmation: "",
  });
  const [error, setError] = useState(null); // لتخزين رسالة الخطأ إذا حدثت

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // إرسال البيانات إلى API
      await resetPassword(formData);
      alert("تم إعادة تعيين كلمة المرور بنجاح");
      navigate("/"); // التوجيه إلى صفحة تسجيل الدخول
    } catch (err) {
      // التقاط الخطأ من الاستجابة
      setError(
        err.response?.data?.message || "فشل تعيين كلمة المرور. حاول مرة أخرى."
      );
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">
          إعادة تعيين كلمة المرور
        </h1>
        {error && (
          <div className="bg-red-100 text-red-700 p-3 rounded mb-4">
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
              readOnly
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">رمز إعادة التعيين</label>
            <input
              type="text"
              name="code"
              value={formData.code}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">كلمة المرور الجديدة</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">
              تأكيد كلمة المرور الجديدة
            </label>
            <input
              type="password"
              name="password_confirmation"
              value={formData.password_confirmation}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none"
              required
            />
          </div>
          <button className="w-full bg-blue-500 text-white py-2 rounded-lg">
            إعادة تعيين كلمة المرور
          </button>
        </form>
      </div>
    </div>
  );
}

export default ResetPasswordPage;
