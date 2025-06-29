// /services/clients.ts
import api from './api';
import { ClientData } from '@/components/FormClient';

export const getClients = async () => {
  const response = await api.get('/clients');
  return response.data;
};

export const getClientById = async (id: string) => {
  const response = await api.get(`/clients/${id}`);
  return response.data;
};

export const createClient = async (data: ClientData) => {
  const response = await api.post('/clients', data);
  return response.data;
};

export const updateClient = async (id: string, data: ClientData) => {
  const response = await api.put(`/clients/${id}`, data);
  return response.data;
};

export const deleteClient = async (id: string) => {
  const response = await api.delete(`/clients/${id}`);
  return response.data;
};
