"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

export default function Login() {
  const router = useRouter();

  const handleLogin = (event: React.FormEvent) => {
    event?.preventDefault();
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
            <Input
              label="User"
              id="username"
              type="text"
              placeholder="username"
            ></Input>
          </div>
          <div>
            <Input
              label="Password"
              id="password"
              type="password"
              placeholder="*******"
            ></Input>
          </div>

          <Button onClick={handleLogin} type="submit">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}
