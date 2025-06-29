"use client";

import { useState } from "react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

export interface ClientData {
  name: string;
  email: string;
  phone: string;
}

interface ClientFormProps {
  initialData?: ClientData;
  onSubmit: (data: ClientData) => void;
  loading?: boolean;
}

const ClientForm = ({
  initialData,
  onSubmit,
  loading = false,
}: ClientFormProps) => {
  const [formData, setFormData] = useState<ClientData>(
    initialData || { name: "", email: "", phone: "" }
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        id="name"
        label="Nombre"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Nombre del cliente"
      />

      <Input
        id="name"
        label="Correo electrónico"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="cliente@correo.com"
      />

      <Input
        id="name"
        label="Teléfono"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="300 000 0000"
      />

      <Button type="submit" disabled={loading}>
        {loading ? "Guardando..." : "Guardar Cliente"}
      </Button>
    </form>
  );
};

export default ClientForm;
