import React, { useEffect } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import * as Sentry from '@sentry/react-native';

import App from './App';
import { name as appName } from './app.json';
import createStore from './src/store/createStore';
import SplashScreen from './src/screens/SplashScreen';

const { store, persistor } = createStore();

const MainApp = () => {
  if (!__DEV__) {
    Sentry.init({
      dsn:
        'https://2c979dc347884b10af1ff84f2b3b50d2@o477461.ingest.sentry.io/5518444',
    });
  }

  return (
    <Provider store={store}>
      <PersistGate loading={<SplashScreen />} persistor={persistor}>
        <App store={store} />
      </PersistGate>
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => MainApp);
