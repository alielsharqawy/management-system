import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { verifyEmail } from "../api/auth";
import InputField from "../components/InputField";
import Button from "../components/Button";

function VerifyEmailPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({
    email: location.state?.email || "",
    verification_code: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await verifyEmail(formData);
      alert("تم تأكيد البريد الإلكتروني بنجاح.");
      navigate("/");
    } catch (error) {
      alert("فشل في تأكيد البريد الإلكتروني. حاول مرة أخرى.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">
          تأكيد البريد الإلكتروني
        </h1>
        <form onSubmit={handleSubmit}>
          <InputField
            label="البريد الإلكتروني"
            name="email"
            value={formData.email}
            onChange={handleChange}
            readOnly
          />
          <InputField
            label="رمز التحقق"
            name="verification_code"
            value={formData.verification_code}
            onChange={handleChange}
            placeholder="أدخل رمز التحقق"
            required
          />
          <Button type="submit" className="w-full">
            تأكيد البريد الإلكتروني
          </Button>
        </form>
      </div>
    </div>
  );
}

export default VerifyEmailPage;
