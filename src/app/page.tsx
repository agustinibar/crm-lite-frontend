"use client";

import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

export default function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    // Validación temporal
    if (email !== "gullianojaimes@gmail.com" || password !== "serbia1952--") {
      setError("Credenciales inválidasdddddddd");
      return;
    }

    const fakeToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJuYW1lIjoiR3VsbGlhbm8gSmFpbWVzIiwiZW1haWwiOiJndWxsaWFub2phaW1lc0BnbWFpbC5jb20ifQ.dummy-signature";
    localStorage.setItem("token", fakeToken);
    window.location.href = "/dashboard";

    /* try {
      await login(email, password);
      // El hook se encarga de la redirección
    } catch (e) {
      setError("Credenciales inválidas");
    } */
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-bold mb-6 text-center text-black">
          Iniciar sesión
        </h1>
        <form className="space-y-5" onSubmit={handleLogin}>
          <div>
            <Input
              label="Email"
              id="email"
              type="email"
              placeholder="correo@ejemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <Input
              label="Password"
              id="password"
              type="password"
              placeholder="*******"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && (
            <div className="text-red-500 text-sm text-center">{error}</div>
          )}
          <Button type="submit">Login</Button>
        </form>
      </div>
    </div>
  );
}
