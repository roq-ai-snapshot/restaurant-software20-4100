import { MenuItemsInterface } from 'interfaces/menu-items';
import { OrdersInterface } from 'interfaces/orders';
import { ReservationsInterface } from 'interfaces/reservations';
import { StaffInterface } from 'interfaces/staff';

export interface RestaurantsInterface {
  id?: string;
  owner_id?: string;
  name: string;
  location: string;
  contact_information: string;
  operating_hours: string;
  menu_items?: MenuItemsInterface[];
  orders?: OrdersInterface[];
  reservations?: ReservationsInterface[];
  staff?: StaffInterface[];
}
