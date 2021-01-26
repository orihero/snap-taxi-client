import {createActionTypes} from "../utils";

const GetProfile = createActionTypes('GET_PROFILE');
const UpdateProfile = createActionTypes('UPDATE_PROFILE');
const SetPaymentMethod = createActionTypes('SET_PAYMENT_METHOD');
const SetLanguage = createActionTypes('SET_LANGUAGE');
const GetNotifications = createActionTypes('GET_NOTIFICATIONS');
const SetNotificationsUnreadCount = createActionTypes('SET_NOTIFICATIONS_UNREAD_COUNT');

export {
    GetProfile,
    UpdateProfile,
    SetPaymentMethod,
    SetLanguage,
    GetNotifications,
    SetNotificationsUnreadCount,
}
