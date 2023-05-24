import * as yup from 'yup';
import { orderItemsValidationSchema } from 'validationSchema/order-items';

export const ordersValidationSchema = yup.object().shape({
  status: yup.string().required(),
  special_requests: yup.string(),
  created_at: yup.date().required(),
  updated_at: yup.date().required(),
  customer_id: yup.string().nullable(),
  restaurant_id: yup.string().nullable(),
  order_items: yup.array().of(orderItemsValidationSchema),
});
