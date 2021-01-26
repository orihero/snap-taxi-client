import React, { useEffect } from 'react';

import RegistrationScreen from '../../screens/Registration/RegistrationScreen';
import RegistrationConfirmationScreen from '../../screens/Registration/RegistrationConfirmationScreen';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';

const { Navigator, Screen } = createStackNavigator();

const RegistrationStack = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <Navigator>
      <Screen
        name="Registration"
        component={RegistrationScreen}
        options={{
          headerShown: false,
          cardStyle: { backgroundColor: '#fff' },
        }}
      />
      <Screen
        name="RegistrationConfirmation"
        component={RegistrationConfirmationScreen}
        options={{
          headerShown: false,
          cardStyle: { backgroundColor: '#fff' },
        }}
      />
    </Navigator>
  );
};

export default RegistrationStack;
