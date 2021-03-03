export enum Roles {
  CLIENT = 'client',
  DRIVER = 'driver',
}

export type LoginResponse = {
  user_id: number;
  code: number;
};

export type LoginPayload = {
  phone: number;
  role: Roles;
};

export type LoginVerifyPayload = {
  code: string;
  fcm_token: string;
};

export type LoginVerifyResponse = {
  data: {
    id: number;
    user_id: number;
    token: string;
    device_info: string;
    logged_at: string;
    last_seen_at: string;
  };
};

export type InitialState = {
  login: LoginResponse | null;
};
