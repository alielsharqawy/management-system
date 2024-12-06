import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../api/auth";

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
      alert("Account created successfully!");
      navigate("/");
    } catch (error) {
      alert("Registration failed");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">إنشاء حساب</h1>
        <form onSubmit={handleSubmit}>
          {["name", "email", "phone", "password", "password_confirmation"].map(
            (field, index) => (
              <div className="mb-4" key={index}>
                <label className="block text-gray-700">{field}</label>
                <input
                  type={field.includes("password") ? "password" : "text"}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                  required
                />
              </div>
            )
          )}
          <button className="w-full bg-blue-500 text-white py-2 rounded-lg">
            إنشاء حساب
          </button>
        </form>
        <div className="text-center mt-4">
          <Link to="/" className="text-blue-500">
            لديك حساب؟ تسجيل الدخول
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
