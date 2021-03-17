import React, { useEffect } from 'react';
import { SafeAreaView, AppState, View, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import NetInfo from '@react-native-community/netinfo';
import AppNavigator from './src/navigation/AppNavigator';
import { Dispatch, RootState } from '@store/models';
import SplashScreen from 'react-native-splash-screen';
import firebase from '@react-native-firebase/messaging';
import Colors from '@assets/styles/Colors';

const App = ({
  initApp,
  appState,
  setAppState,
  isAppLoading,
  setChatMessage,
  isRouterLoaded,
  getNotifications,
  languageChanging,
  getCurrentBooking,
  isNetworkConnected,
  setNetworkConnection,
}: Props) => {
  useEffect(() => {
    initApp();
    NetInfo.addEventListener((state) => {
      setNetworkConnection(!!(state.isConnected && state.isInternetReachable));
    });
    AppState.addEventListener('change', (state) => {
      setAppState(state);
    });

    const messaging = firebase();

    messaging.setBackgroundMessageHandler(async (msg) => {
      notificationHandler(msg.notification);
    });

    messaging.onMessage((msg) => {
      notificationHandler(msg.notification);
    });
  }, []);

  useEffect(() => {
    if (AppState.currentState === 'active' || isNetworkConnected) {
      getCurrentBooking();
    }
  }, [appState, isNetworkConnected]);

  useEffect(() => {
    if (isRouterLoaded) {
      SplashScreen.hide();
    }
  }, [isRouterLoaded]);

  const notificationHandler = (notification: any) => {
    if (notification && notification.title === 'Сообщение') {
      return setChatMessage({
        title: 'Сообщение',
        read: false,
        message: notification.body,
        type: 'driver',
      });
    }

    getNotifications();
  };

  if (isAppLoading || languageChanging) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: Colors.blue,
        }}>
        <ActivityIndicator color={'#fff'} size={'large'} />
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <AppNavigator />
    </SafeAreaView>
  );
};

const mapState = ({
  loading,
  app: { isRouterLoaded, isNetworkConnected, appState },
}: RootState) => ({
  appState,
  isRouterLoaded,
  isNetworkConnected,
  isAppLoading: loading.effects.app.initApp,
  languageChanging: loading.effects.app.changeAppLanguage,
});

const mapDispatch = ({
  user: { getNotifications },
  booking: { setChatMessage, getCurrentBooking },
  app: { initApp, setNetworkConnection, setAppState },
}: Dispatch) => ({
  initApp,
  setAppState,
  setChatMessage,
  getNotifications,
  getCurrentBooking,
  setNetworkConnection,
});

type StateProps = ReturnType<typeof mapState>;
type DisPatchProps = ReturnType<typeof mapDispatch>;

export type Props = StateProps & DisPatchProps;

export default connect(mapState, mapDispatch)(App);
