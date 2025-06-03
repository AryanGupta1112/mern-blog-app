import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

// Automatically attach token if present
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = token;
  }
  return config;
});
