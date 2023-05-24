import axios from 'axios';
import { MenuItemsInterface } from 'interfaces/menu-items';

export const getMenuItems = async () => {
  const response = await axios.get(`/api/menu-items`);
  return response.data;
};

export const createMenuItems = async (menuItems: MenuItemsInterface) => {
  const response = await axios.post('/api/menu-items', menuItems);
  return response.data;
};

export const updateMenuItemsById = async (id: string, menuItems: MenuItemsInterface) => {
  const response = await axios.put(`/api/menu-items/${id}`, menuItems);
  return response.data;
};

export const getMenuItemsById = async (id: string) => {
  const response = await axios.get(`/api/menu-items/${id}`);
  return response.data;
};
