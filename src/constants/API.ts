export enum API {
  BASE_URL = 'https://api.snaptaxi.uz/',
  // AUTH
  LOGIN = 'auth/login',
  LOGIN_VERIFY = 'auth/login-verify',
  SMS_RESEND = 'auth/sms-resend',

  // USER
  GET_PROFILE = 'profile/show',
  UPDATE_PROFILE = 'profile/update',

  // NOTIFICATIONS
  GET_NOTIFICATIONS = 'profile/notifications',
  MARK_NOTIFICATIONS_READ = 'profile/notifications/mark-read',

  // BOOKING
  GET_BOOKING_LIST = 'car-booking/client',
  GET_BOOKING_SINGLE = 'car-booking/details',
  UPDATE_ORDER_STATUS = 'car-booking/status/',
  SEND_PUSH = 'car-booking/send-push',
  RATE_BOOKING = 'car-booking/review/',
  GET_RATES = 'handbook/rates',
  GET_DRIVERS_AROUND = 'handbook/drivers-around',
  CAR_BOOKING = 'car-booking/book',
  GET_DRIVER_LOCATION = 'car-booking/location/',
  GET_REGIONS = 'handbook/regions',
  GET_QUICK_COMMENTS = 'handbook/quick-comments',
  GET_SAVED_ADDRESSES = 'saved-addresses',
}
