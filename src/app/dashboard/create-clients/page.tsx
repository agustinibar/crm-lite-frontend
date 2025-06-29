"use client";

import ClientForm, { ClientData } from "@/components/FormClient";

export default function CreateClientPage() {
  const handleCreateClient = async (data: ClientData) => {
    console.log("Cliente a guardar:", data);

    // Aquí puedes usar Axios para enviar la info al backend
    // await axios.post('/api/clients', data);
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <h2 className="text-xl font-bold mb-4">Registrar Cliente</h2>
      <ClientForm onSubmit={handleCreateClient} />
    </div>
  );
}
