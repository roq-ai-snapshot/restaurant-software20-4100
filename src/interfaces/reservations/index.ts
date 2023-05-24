export interface ReservationsInterface {
  id?: string;
  customer_id?: string;
  restaurant_id?: string;
  date: Date;
  time: Date;
  party_size: number;
  created_at: Date;
  updated_at: Date;
}
