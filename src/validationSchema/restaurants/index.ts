import * as yup from 'yup';
import { menuItemsValidationSchema } from 'validationSchema/menu-items';
import { ordersValidationSchema } from 'validationSchema/orders';
import { reservationsValidationSchema } from 'validationSchema/reservations';
import { staffValidationSchema } from 'validationSchema/staff';

export const restaurantsValidationSchema = yup.object().shape({
  name: yup.string().required(),
  location: yup.string().required(),
  contact_information: yup.string().required(),
  operating_hours: yup.string().required(),
  owner_id: yup.string().nullable(),
  menu_items: yup.array().of(menuItemsValidationSchema),
  orders: yup.array().of(ordersValidationSchema),
  reservations: yup.array().of(reservationsValidationSchema),
  staff: yup.array().of(staffValidationSchema),
});
