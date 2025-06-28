"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const handleLogin = () => {
    // Simulación de login exitoso
    localStorage.setItem("token", "ejemplo.jwt.token");
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-bold mb-6 text-center text-black">
          Iniciar sesión
        </h1>
        <form className="space-y-5">
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="email">
              Correo electrónico
            </label>
            <input
              id="email"
              type="email"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 text-black outline-none"
              placeholder="tucorreo@ejemplo.com"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="password">
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              className=" w-full px-4 py-2 border rounded-lg text-black outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="********"
              required
            />
          </div>
          <button
            type="button"
            onClick={handleLogin}
            className=" cursor-pointer w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
          >
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  );
}
