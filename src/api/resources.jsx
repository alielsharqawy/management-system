import axios from "axios";

const API_URL = "https://warehouse.al-mosa.com/api";

// Fetch Categories
export const getCategories = async () => {
  return axios.get(`${API_URL}/categories`);
};

// Fetch Products
export const getProducts = async () => {
  return axios.get(`${API_URL}/products`);
};

// Fetch Invoices
export const getInvoices = async () => {
  return axios.get(`${API_URL}/invoices`);
};
