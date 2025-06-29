"use client";

import Button from "@/components/ui/Button";

import { useAuth } from "@/hooks/useAuth";

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <header className="bg-gray-800 shadow p-4 flex justify-end items-center">
      <div className="flex items-center gap-4">
        <span className="text-sm text-white">{"Usuario"}</span>
        <Button variant="danger" onClick={logout}>
          Cerrar Sesion
        </Button>
      </div>
    </header>
  );
};

export default Header;
