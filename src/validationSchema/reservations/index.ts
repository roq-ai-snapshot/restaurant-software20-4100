import * as yup from 'yup';

export const reservationsValidationSchema = yup.object().shape({
  date: yup.date().required(),
  time: yup.date().required(),
  party_size: yup.number().integer().required(),
  created_at: yup.date().required(),
  updated_at: yup.date().required(),
  customer_id: yup.string().nullable(),
  restaurant_id: yup.string().nullable(),
});
