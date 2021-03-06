import DiscountsStack from '../StackNavigators/DiscountsStack';
import SettingsStack from '../StackNavigators/SettingsStack';
import AuthenticationStack from '../StackNavigators/AuthenticationStack';
import MainStack from '../StackNavigators/MainStack';
import MyTripsStack from '../StackNavigators/MyTripsStack';
import SupportStack from '../StackNavigators/SupportStack';
import NotificationsScreen from '../../screens/NotificationsScreen';
import { ROUTES } from '@constants/ROUTES';
import MyAddressesStack from '../StackNavigators/MyAddressesStack';

const routes = [
  {
    label: null,
    name: 'MainStack',
    component: MainStack,
  },
  {
    label: null,
    name: 'RegistrationStack',
    component: AuthenticationStack,
  },
  // {
  //     label: "Способ оплаты",
  //     name: 'PaymentMethodsStack',
  //     component: PaymentMethodsStack
  // },
  {
    label: 'discounts',
    name: 'DiscountsStack',
    component: DiscountsStack,
  },
  {
    label: 'myAddresses',
    name: 'MyAddresses',
    component: MyAddressesStack,
  },
  {
    label: 'myTrips',
    name: 'MyTrips',
    component: MyTripsStack,
  },
  {
    label: 'settings',
    name: 'SettingsStack',
    component: SettingsStack,
  },
  {
    label: 'notifications',
    name: ROUTES.NOTIFICATIONS,
    component: NotificationsScreen,
  },
  {
    label: 'beDriver',
    name: 'BeDriverStack',
    url: 'https://taxi.yandex.ru/rabota/',
    component: null,
  },
  {
    label: 'support',
    name: 'SupportStack',
    component: SupportStack,
  },
];

export default routes;
