import React from 'react';

import { LoginScreen } from '../../screens/Authentication/LoginScreen';
import { EnterCodeScreen } from '../../screens/Authentication/EnterCodeScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { ROUTES } from '@constants/ROUTES';

const { Navigator, Screen } = createStackNavigator();

const AuthenticationStack = () => {
  return (
    <Navigator>
      <Screen
        name={ROUTES.LOGIN}
        component={LoginScreen}
        options={{
          headerShown: false,
          cardStyle: { backgroundColor: '#fff' },
        }}
      />
      <Screen
        name={ROUTES.ENTER_CODE}
        component={EnterCodeScreen}
        options={{
          headerShown: false,
          cardStyle: { backgroundColor: '#fff' },
        }}
      />
    </Navigator>
  );
};

export default AuthenticationStack;
