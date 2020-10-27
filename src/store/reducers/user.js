import {VerifyCode} from "../constants/auth";
import {
    GetProfile,
    SetPaymentMethod,
    UpdateProfile,
    SetLanguage,
    GetNotifications,
    SetNotificationsUnreadCount
} from "../constants/user";

const initialState = {
    token: null,
    isAuthenticated: false,
    paymentMethod: 'cash',
    language: 'ru',
    data: [],
    notifications: {
        unread: 0,
        data: [],
    }
};

export default (state = initialState, action) => {
    switch (action.type) {
        case  VerifyCode.SUCCESS:
            const {token} = action.payload;
            return {
                ...state,
                token: token,
                isAuthenticated: false,
                data: []
            };
        case  GetProfile.SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                data: action.payload
            };
        case  UpdateProfile.SUCCESS:
            return {
                ...state,
                data: action.payload
            };
        case  SetPaymentMethod.SUCCESS:
            return {
                ...state,
                paymentMethod: action.payload
            };
        case  SetLanguage.SUCCESS:
            return {
                ...state,
                language: action.payload
            };
        case  GetNotifications.SUCCESS:
            return {
                ...state,
                notifications: {
                    ...state.notifications,
                    data: action.payload
                }
            };
        case SetNotificationsUnreadCount.SUCCESS:
            console.log('xaxax')
            return {
                ...state,
                notifications: {
                    ...state.notifications,
                    unread: action.payload ? action.payload : (state.notifications.unread + 1)
                }
            };
        default:
            return state
    }
}
