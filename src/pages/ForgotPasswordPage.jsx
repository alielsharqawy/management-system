import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { forgotPassword } from "../api/auth";
import InputField from "../components/InputField";
import Button from "../components/Button";

function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await forgotPassword(email);
      alert("تم إرسال رمز إعادة التعيين إلى بريدك الإلكتروني.");
      navigate("/reset-password", { state: { email } });
    } catch (error) {
      alert("فشل إرسال رمز إعادة التعيين. حاول مرة أخرى.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">
          نسيت كلمة المرور
        </h1>
        <form onSubmit={handleSubmit}>
          <InputField
            label="البريد الإلكتروني"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="أدخل بريدك الإلكتروني"
            type="email"
            required
          />
          <Button type="submit" className="w-full">
            إرسال رمز إعادة التعيين
          </Button>
        </form>
      </div>
    </div>
  );
}

export default ForgotPasswordPage;
