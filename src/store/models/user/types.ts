import { GeoCoordinates } from 'react-native-geolocation-service';
import { Region } from 'react-native-maps';

export type User = {
  user_id: number;
  phone: string;
  avatar: string;
  name: string;
  balance: number;
  birthday: string | null;
  lang: string;
  rating: null;
  lat: string;
  lng: string;
  heading: null;
  canCall: boolean;
  have_terminal: boolean;
  licence_number: string;
  licence: null;
  licence_expired_at: string;
};

export type Rate = {
  id: number;
  title: string;
  info: string | null;
  icon: string;
  min_distance: number;
  min_price: number;
  price_per_km: number;
  price_per_min: number;
  inflated: boolean;
  price: number;
  color: string;
  ac_rate: string;
};

export type Notification = {
  id: number;
  user_id: number;
  title: string;
  read: boolean;
  message: string;
  created_at: string;
};

export type Address = {
  id: number;
  user_id: number;
  title: string;
  address: string;
  lat: string;
  lng: string;
};

export type EditAddressPayload = {
  id: number;
  data: AddressPayload;
};

export type AddressPayload = {
  address: string;
  title: string;
  lat: string;
  lng: string;
};

export type InitialState = {
  profile: User | null;
  notifications: Notification[];
  currentLocation: GeoCoordinates | Region | null;
  savedAddresses: Address[];
};
