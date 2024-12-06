import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { resetPassword } from "../api/auth";
import InputField from "../components/InputField";
import Button from "../components/Button";

function ResetPasswordPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: location.state?.email || "",
    code: "",
    password: "",
    password_confirmation: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await resetPassword(formData);
      alert("تمت إعادة تعيين كلمة المرور بنجاح.");
      navigate("/");
    } catch (error) {
      alert("فشل في إعادة تعيين كلمة المرور. حاول مرة أخرى.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">
          إعادة تعيين كلمة المرور
        </h1>
        <form onSubmit={handleSubmit}>
          <InputField
            label="البريد الإلكتروني"
            value={formData.email}
            readOnly
          />
          <InputField
            label="رمز إعادة التعيين"
            name="code"
            value={formData.code}
            onChange={handleChange}
            placeholder="أدخل رمز إعادة التعيين"
            required
          />
          <InputField
            label="كلمة المرور الجديدة"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="أدخل كلمة المرور الجديدة"
            type="password"
            required
          />
          <InputField
            label="تأكيد كلمة المرور الجديدة"
            name="password_confirmation"
            value={formData.password_confirmation}
            onChange={handleChange}
            placeholder="أدخل تأكيد كلمة المرور"
            type="password"
            required
          />
          <Button type="submit" className="w-full">
            إعادة تعيين كلمة المرور
          </Button>
        </form>
      </div>
    </div>
  );
}

export default ResetPasswordPage;
