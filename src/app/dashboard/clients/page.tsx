"use client";

import ClientsTable from "@/components/ClientsTable";

const fakeClients = [
  { id: "1", name: "Juan Pérez", email: "juan@mail.com", phone: "3001234567" },
  { id: "2", name: "Ana Gómez", email: "ana@mail.com", phone: "3107654321" },
  {
    id: "3",
    name: "Carlos Ramírez",
    email: "carlos@mail.com",
    phone: "3019876543",
  },
  {
    id: "4",
    name: "María Fernández",
    email: "maria@mail.com",
    phone: "3023456789",
  },
  {
    id: "5",
    name: "Pedro López",
    email: "pedro@mail.com",
    phone: "3038765432",
  },
  { id: "6", name: "Laura Díaz", email: "laura@mail.com", phone: "3042109876" },
  {
    id: "7",
    name: "Jorge Martínez",
    email: "jorge@mail.com",
    phone: "3055678901",
  },
  { id: "8", name: "Sofía Ruiz", email: "sofia@mail.com", phone: "3061239876" },
  {
    id: "9",
    name: "Daniel Herrera",
    email: "daniel@mail.com",
    phone: "3077654321",
  },
  {
    id: "10",
    name: "Valentina Vargas",
    email: "vale@mail.com",
    phone: "3082345678",
  },
];

export default function ClientsPage() {
  const handleDelete = (id: string) => {
    if (confirm("¿Seguro que deseas eliminar este cliente?")) {
      console.log("Cliente eliminado:", id);
      // Aquí iría el llamado a tu API con Axios
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-black">Clientes</h2>
      <ClientsTable data={fakeClients} onDelete={handleDelete} />
    </div>
  );
}
