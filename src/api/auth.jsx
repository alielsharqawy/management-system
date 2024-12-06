import axios from "axios";

const API_URL = "https://warehouse.al-mosa.com/api";

// تسجيل الدخول
export const login = async (email, password) => {
  return axios.post(`${API_URL}/login`, { email, password });
};

// إنشاء حساب
export const register = async (data) => {
  return axios.post(`${API_URL}/register`, data);
};

// نسيت كلمة المرور
export const forgotPassword = async (email) => {
  return axios.post(`${API_URL}/forgot-password`, { email });
};

// إعادة تعيين كلمة المرور
export const resetPassword = async (data) => {
  return axios.post(`${API_URL}/reset-password`, data);
};

// تأكيد البريد الإلكتروني
export const verifyEmail = async (data) => {
  return axios.post(`${API_URL}/verify-email`, data);
};
