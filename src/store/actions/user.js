import {createAction} from "../utils";
import * as User from "../constants/user";

const GetProfile = createAction(User.GetProfile.REQUEST);
const UpdateProfile = createAction(User.UpdateProfile.REQUEST);
const SetPaymentMethod = createAction(User.SetPaymentMethod.SUCCESS);
const SetLanguage = createAction(User.SetLanguage.SUCCESS);
const GetNotifications = createAction(User.GetNotifications.REQUEST);
const SetNotificationsUnreadCount = createAction(User.SetNotificationsUnreadCount.SUCCESS);

export default {
    GetProfile,
    UpdateProfile,
    SetPaymentMethod,
    SetLanguage,
    GetNotifications,
    SetNotificationsUnreadCount,
}
