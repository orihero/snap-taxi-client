import {Linking} from "react-native"
import PaymentMethodsStack from "../StackNavigators/PaymentMethodsStack";
import DiscountsStack from "../StackNavigators/DiscountsStack";
import MyAddressesStack from "../StackNavigators/MyAddressesStack";
import SettingsStack from "../StackNavigators/SettingsStack";
import RegistrationStack from "../StackNavigators/RegistrationStack";
import MainStack from "../StackNavigators/MainStack";
import MyTripsStack from "../StackNavigators/MyTripsStack";
import RateTripScreen from "../../screens/RateTripScreen";
import SupportStack from "../StackNavigators/SupportStack";

const routes = [
    {
        label: null,
        name: 'MainStack',
        component: MainStack
    },
    {
        label: "Способ оплаты",
        name: 'PaymentMethodsStack',
        component: PaymentMethodsStack
    },
    {
        label: "Скидки",
        name: 'DiscountsStack',
        component: DiscountsStack
    },
    {
        label: "Мои адреса",
        name: 'MyAddresses',
        component: MyAddressesStack
    },
    {
        label: "Мои поездки",
        name: 'MyTrips',
        component: MyTripsStack
    },
    {
        label: "Настройки",
        name: 'SettingsStack',
        component: SettingsStack
    },
    {
        label: "Стать водителем",
        name: 'BeDriverStack',
        url: 'https://taxi.yandex.ru/rabota/',
        component: null
    },
    {
        label: "Служба поддержки",
        name: 'SupportStack',
        component: SupportStack

    }
];

export default routes
