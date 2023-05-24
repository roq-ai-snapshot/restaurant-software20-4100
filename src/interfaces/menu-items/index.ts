import { OrderItemsInterface } from 'interfaces/order-items';

export interface MenuItemsInterface {
  id?: string;
  restaurant_id?: string;
  name: string;
  description: string;
  price: number;
  image_url?: string;
  order_items?: OrderItemsInterface[];
}
