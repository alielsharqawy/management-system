import axios from "axios";

const API_URL = "https://warehouse.al-mosa.com/api";

export const login = async (email, password) => {
  return axios.post(`${API_URL}/login`, { email, password });
};

export const register = async (data) => {
  return axios.post(`${API_URL}/register`, data);
};

export const forgotPassword = async (email) => {
  return axios.post(`${API_URL}/forgot-password`, { email });
};

export const resetPassword = async (data) => {
  return axios.post(`${API_URL}/reset-password`, data);
};
