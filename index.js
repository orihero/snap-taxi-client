import React, { useEffect } from 'react';
import { AppRegistry, Platform } from 'react-native';
import { Provider } from 'react-redux';
import * as Sentry from '@sentry/react-native';
import App from './App';
import { name as appName } from './app.json';
import { store } from '@store/models';
import Geolocation from 'react-native-geolocation-service';
import { requestPermission, turnOnLocation } from './src/helpers';

const MainApp = () => {
  useEffect(() => {
    if (Platform.OS === 'android') {
      requestPermission(() => {
        store.dispatch.user.getCurrentLocation({});
      });
      turnOnLocation();
    } else {
      Geolocation.requestAuthorization('always').then((res) => {
        console.log(res);
      });
    }
    if (!__DEV__) {
      Sentry.init({
        dsn:
          'https://2c979dc347884b10af1ff84f2b3b50d2@o477461.ingest.sentry.io/5518444',
      });
    }
  }, []);

  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => MainApp);
