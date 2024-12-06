import axios from "axios";

const API_URL = "https://warehouse.al-mosa.com/api";

// Login API
export const login = async (email, password) => {
  return axios.post(`${API_URL}/login`, { email, password });
};

// Register API
export const register = async (data) => {
  return axios.post(`${API_URL}/register`, data);
};

// Forgot Password API
export const forgotPassword = async (email) => {
  return axios.post(`${API_URL}/forgot-password`, { email });
};

// Reset Password API
export const resetPassword = async (data) => {
  return axios.post(`${API_URL}/reset-password`, data);
};

// Verify Email API
export const verifyEmail = async (data) => {
  return axios.post(`${API_URL}/verify-email`, data);
};
