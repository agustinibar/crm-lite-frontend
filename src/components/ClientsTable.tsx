"use client";

import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";

interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
}

interface ClientsTableProps {
  data: Client[];
  onDelete: (id: string) => void;
}

const ClientsTable = ({ data, onDelete }: ClientsTableProps) => {
  const router = useRouter();

  return (
    <div className="relative overflow-x-auto shadow-lg rounded-xl bg-white">
      <table className="w-full text-sm text-left text-gray-800 border border-gray-200 rounded-xl">
        <thead>
          <tr className="bg-gray-800 text-white">
            <th className="p-4 border-b border-gray-200">Nombre</th>
            <th className="p-4 border-b border-gray-200">Correo</th>
            <th className="p-4 border-b border-gray-200">Teléfono</th>
            <th className="p-4 border-b border-gray-200 text-center">
              Acciones
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((client, idx) => (
            <tr
              key={client.id}
              className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}
            >
              <td className="p-4 border-b border-gray-200">{client.name}</td>
              <td className="p-4 border-b border-gray-200">{client.email}</td>
              <td className="p-4 border-b border-gray-200">{client.phone}</td>
              <td className="p-4 border-b border-gray-200 text-center space-x-2">
                <Button
                  variant="secondary"
                  onClick={() => router.push(`/dashboard/clients/${client.id}`)}
                >
                  Ver
                </Button>
                <Button
                  variant="primary"
                  onClick={() =>
                    router.push(`/dashboard/clients/${client.id}/edit`)
                  }
                >
                  Editar
                </Button>
                <Button variant="danger" onClick={() => onDelete(client.id)}>
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClientsTable;
