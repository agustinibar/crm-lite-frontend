"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { jwtDecode } from "jwt-decode";
import {
  login as loginService,
  logout as logoutService,
} from "@/services/auth";

interface User {
  id: string;
  name: string;
  email: string;
  // lo que venga en tu JWT
}

export function useAuth() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  // Cargar usuario desde el token
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded: User = jwtDecode(token);
        setUser(decoded);
        setIsAuthenticated(true);
      } catch (error) {
        console.error("Token inválido");
        logout(); // Eliminar token inválido
      }
    }
    setLoading(false);
  }, []);

  // Login con email y password
  const login = async (email: string, password: string) => {
    try {
      const { token } = await loginService({ email, password });
      localStorage.setItem("token", token);
      const decoded: User = jwtDecode(token);
      setUser(decoded);
      setIsAuthenticated(true);
      router.push("/dashboard");
    } catch (error) {
      throw new Error("Credenciales inválidas");
    }
  };

  const logout = () => {
    logoutService();
    setUser(null);
    setIsAuthenticated(false);
  };

  return {
    user,
    isAuthenticated,
    loading,
    login,
    logout,
  };
}
