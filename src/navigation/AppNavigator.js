import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { connect } from 'react-redux';
import { Linking } from 'react-native';
import DrawerStack from './DrawerNavigation/DrawerStack';
import RegistrationStack from './StackNavigators/RegistrationStack';
import AsyncStorage from '@react-native-community/async-storage';
import { localization } from '../services/Localization';
import SplashScreen from '../screens/SplashScreen';

const AppNavigator = ({ user, order }) => {
  const [isReady, setIsReady] = useState(false);
  const [initialState, setInitialState] = useState();

  useEffect(() => {
    const restoreState = async () => {
      try {
        if (order.status && order.status !== 'canceled') {
          const initialUrl = await Linking.getInitialURL();

          if (initialUrl == null) {
            // Only restore state if there's no deep link and we're not on web
            const savedStateString = await AsyncStorage.getItem('router');

            const state = savedStateString
              ? JSON.parse(savedStateString)
              : undefined;

            if (state !== undefined) {
              setInitialState(state);
            }
          }
        }
      } finally {
        setIsReady(true);
      }
    };

    if (!isReady) {
      restoreState();
    }
  }, [isReady]);

  if (!isReady) {
    return <SplashScreen />;
  }

  localization.setLanguage(user.language);

  return (
    <NavigationContainer
      initialState={initialState}
      onStateChange={(state) => {
        AsyncStorage.setItem('router', JSON.stringify(state));
      }}>
      {user.isAuthenticated ? (
        <DrawerStack key={user.language} />
      ) : (
        <RegistrationStack key={user.language} />
      )}
    </NavigationContainer>
  );
};

const mapStateToProps = ({ user, booking: { order } }) => ({
  user,
  order: order.data,
});

export default connect(mapStateToProps)(AppNavigator);
