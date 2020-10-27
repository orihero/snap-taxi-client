import PaymentMethodsStack from "../StackNavigators/PaymentMethodsStack";
import DiscountsStack from "../StackNavigators/DiscountsStack";
import MyAddressesStack from "../StackNavigators/MyAddressesStack";
import SettingsStack from "../StackNavigators/SettingsStack";
import RegistrationStack from "../StackNavigators/RegistrationStack";
import MainStack from "../StackNavigators/MainStack";
import MyTripsStack from "../StackNavigators/MyTripsStack";
import SupportStack from "../StackNavigators/SupportStack";
import NotificationsScreen from "../../screens/NotificationsScreen";

const routes = [
    {
        label: null,
        name: 'MainStack',
        component: MainStack
    },
    {
        label: null,
        name: 'RegistrationStack',
        component: RegistrationStack
    },
    // {
    //     label: "Способ оплаты",
    //     name: 'PaymentMethodsStack',
    //     component: PaymentMethodsStack
    // },
    {
        label: 'discounts',
        name: 'DiscountsStack',
        component: DiscountsStack
    },
    // {
    //     label: "Мои адреса",
    //     name: 'MyAddresses',
    //     component: MyAddressesStack
    // },
    {
        label: 'myTrips',
        name: 'MyTrips',
        component: MyTripsStack
    },
    {
        label: 'settings',
        name: 'SettingsStack',
        component: SettingsStack
    },
    {
        label: 'notifications',
        name: 'Notifications',
        component: null,
    },
    {
        label: 'beDriver',
        name: 'BeDriverStack',
        url: 'https://taxi.yandex.ru/rabota/',
        component: null
    },
    {
        label: 'support',
        name: 'SupportStack',
        component: SupportStack
    }
];

export default routes
