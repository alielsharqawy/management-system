import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../api/auth";
import InputField from "../components/InputField";
import Button from "../components/Button";

function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    password_confirmation: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(formData);
      alert("تم إنشاء الحساب بنجاح. يرجى تأكيد بريدك الإلكتروني.");
      navigate("/verify-email", { state: { email: formData.email } });
    } catch (error) {
      alert("فشل إنشاء الحساب. حاول مرة أخرى.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">إنشاء حساب جديد</h1>
        <form onSubmit={handleSubmit}>
          <InputField
            label="الاسم"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="أدخل اسمك"
            required
          />
          <InputField
            label="البريد الإلكتروني"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="أدخل بريدك الإلكتروني"
            type="email"
            required
          />
          <InputField
            label="الهاتف"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="أدخل رقم هاتفك"
            required
          />
          <InputField
            label="كلمة المرور"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="أدخل كلمة المرور"
            type="password"
            required
          />
          <InputField
            label="تأكيد كلمة المرور"
            name="password_confirmation"
            value={formData.password_confirmation}
            onChange={handleChange}
            placeholder="أدخل تأكيد كلمة المرور"
            type="password"
            required
          />
          <Button type="submit" className="w-full">
            إنشاء حساب
          </Button>
        </form>
        <div className="text-center mt-4">
          <span
            className="text-blue-500 cursor-pointer hover:underline"
            onClick={() => navigate("/")}
          >
            لديك حساب بالفعل؟ تسجيل الدخول
          </span>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
