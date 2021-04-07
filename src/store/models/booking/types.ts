import { Rate, User } from '@store/models/user/types';
import OrderStatus from '@constants/orderStatus';

export type Route = {
  address: string;
  lat: string;
  lng: string;
  order: string;
};

export type Booking = {
  id: number;
  routes: Route[];
  user_id: number;
  driver_id: null;
  rate_id: number;
  option_ids: string[];
  user: User | null;
  driver: User;
  car: null;
  price: 0;
  commission: 0;
  comment: string;
  rating: null;
  review: null;
  distance: string;
  created_at: string;
  status: OrderStatus;
  waiting_time: 0;
  payment_type: string;
  rate: Rate;
  options: [];
  car_type: any;
};

export type ChangeBookingStatusPayload = {
  status: OrderStatus;
  waiting_time?: number;
  distance?: number;
};

export type GetRatesPayload = {
  ac_rate: number;
  distance: number;
};

export type CarBookPayload = {
  option_ids: number[];
  distance: string;
  ac_rate: number;
  rate_id: number;
  comment: string;
};

export type ReviewBookingPayload = {
  comment: string;
  rating: number;
};

export type Comment = {
  id: number;
  title: string;
};

export type Message = {
  title: string;
  type: string;
  read: boolean;
  message: string;
};

export type InitialState = {
  list: Booking[];
  current: Booking | null;
  chat: Message[];
  rates: Rate[];
  quickComments: Comment[];
};
