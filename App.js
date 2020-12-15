import React, {useEffect} from 'react';
import {Platform, SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import RNAndroidLocationEnabler from 'react-native-android-location-enabler';
import * as Sentry from '@sentry/react-native';
import AppNavigator from './src/navigation/AppNavigator';
import createStore from './src/store/createStore';
import api from './src/services/api';

const {store, persistor} = createStore();

export {store};

const App = () => {
  useEffect(() => {
    if (!__DEV__) {
      Sentry.init({
        dsn:
          'https://2c979dc347884b10af1ff84f2b3b50d2@o477461.ingest.sentry.io/5518444',
      });
    }
    api.setToken(store);
    if (Platform.OS === 'android') {
      RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({
        interval: 10000,
        fastInterval: 5000,
      })
        .then((data) => {
          // The user has accepted to enable the location services
          // data can be :
          //  - "already-enabled" if the location services has been already enabled
          //  - "enabled" if user has clicked on OK button in the popup
        })
        .catch((err) => {
          // The user has not accepted to enable the location services or something went wrong during the process
          // "err" : { "code" : "ERR00|ERR01|ERR02", "message" : "message"}
          // codes :
          //  - ERR00 : The user has clicked on Cancel button in the popup
          //  - ERR01 : If the Settings change are unavailable
          //  - ERR02 : If the popup has failed to open
        });
    }
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaView style={{flex: 1}}>
          <AppNavigator />
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
};

export default App;
