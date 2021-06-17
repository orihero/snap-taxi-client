import { Models } from '@rematch/core';
import { auth } from './auth';
import { user } from './user';
import { app } from './app';
import { booking } from './booking';
import { map } from './map';
import { handling } from './handling';

export interface RootModel extends Models<RootModel> {
  app: typeof app;
  map: typeof map;
  auth: typeof auth;
  user: typeof user;
  booking: typeof booking;
  handling: typeof handling;
}

export const models: RootModel = {
  app,
  map,
  auth,
  user,
  booking,
  handling,
};
