
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api', // o tu URL real
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor para agregar token a cada request si existe
api.interceptors.request.use((config) => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

// Interceptor para manejar errores globales (como expiración de sesión)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Si hay error de autenticación
      if (typeof window !== 'undefined') {
        localStorage.removeItem('token');
        
        window.location.href = '/'; // Redirige al login
      }
    }
    return Promise.reject(error);
  }
);

export default api;
