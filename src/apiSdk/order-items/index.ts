import axios from 'axios';
import { OrderItemsInterface } from 'interfaces/order-items';

export const getOrderItems = async () => {
  const response = await axios.get(`/api/order-items`);
  return response.data;
};

export const createOrderItems = async (orderItems: OrderItemsInterface) => {
  const response = await axios.post('/api/order-items', orderItems);
  return response.data;
};

export const updateOrderItemsById = async (id: string, orderItems: OrderItemsInterface) => {
  const response = await axios.put(`/api/order-items/${id}`, orderItems);
  return response.data;
};

export const getOrderItemsById = async (id: string) => {
  const response = await axios.get(`/api/order-items/${id}`);
  return response.data;
};
