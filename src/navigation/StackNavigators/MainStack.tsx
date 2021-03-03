import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import MainScreen from '../../screens/MainScreen';
import SelectCarScreen from '../../screens/SelectCarScreen';
import ChatScreen from '../../screens/ChatScreen';
import PageHeader from '@components/PageHeader/PageHeader';
import { localization } from '../../services/Localization';
import Colors from '../../assets/styles/Colors';
import NotificationsScreen from '../../screens/NotificationsScreen';
import TripScreen from '../../screens/TripScreen';
import { ROUTES } from '@constants/ROUTES';

const { Navigator, Screen } = createStackNavigator();

const MainStack = (props) => {
  return (
    <Navigator
      backgroundColor={'#fff'}
      mode={'modal'}
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Screen
        name={ROUTES.MAP}
        component={MainScreen}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name={ROUTES.SELECT_CAR}
        component={SelectCarScreen}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name={ROUTES.TRIP}
        component={TripScreen}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name={ROUTES.CHAT}
        component={ChatScreen}
        options={{
          header: (props) => (
            <PageHeader
              title={localization.chat}
              style={{ marginBottom: 0 }}
              {...props}
            />
          ),
          cardStyle: { backgroundColor: Colors.background },
        }}
      />
      <Screen
        name={ROUTES.NOTIFICATIONS}
        component={NotificationsScreen}
        options={{
          header: (props) => (
            <PageHeader
              title={'Уведомление'}
              style={{ marginBottom: 0 }}
              {...props}
            />
          ),
          cardStyle: { backgroundColor: Colors.background },
        }}
      />
    </Navigator>
  );
};
export default MainStack;
