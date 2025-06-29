"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Inicio", href: "/dashboard" },
  { name: "Clientes", href: "/dashboard/clients" },
  { name: "Crear Clientes", href: "/dashboard/create-clients" },
  // Puedes agregar más enlaces aquí
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="w-64 h-screen bg-gray-900 text-white flex flex-col p-4">
      <h2 className="text-2xl font-bold mb-6">MiApp</h2>
      <nav className="flex flex-col space-y-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`px-3 py-2 rounded hover:bg-gray-700 transition ${
              pathname === link.href ? "bg-gray-700" : ""
            }`}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
