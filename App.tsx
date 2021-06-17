import React, { useEffect } from 'react';
import { SafeAreaView, AppState, Alert } from 'react-native';
import { connect } from 'react-redux';
import NetInfo from '@react-native-community/netinfo';
import AppNavigator from './src/navigation/AppNavigator';
import { Dispatch, RootState } from '@store/models';
import firebase from '@react-native-firebase/messaging';
import SplashScreen from 'react-native-splash-screen';

const App = ({
  initApp,
  appState,
  isAppLoading,
  setAppState,
  setChatMessage,
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
      if (!state.isConnected) {
        Alert.alert(
          'Ошибка',
          'Для корректной работы приложение включите интернет!',
        );
      }
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

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <AppNavigator key={languageChanging} />
    </SafeAreaView>
  );
};

const mapState = ({
  app: { isRouterLoaded, isNetworkConnected, appState },
  handling,
}: RootState) => ({
  appState,
  isRouterLoaded,
  isNetworkConnected,
  isAppLoading: handling.app.initApp,
  languageChanging: handling.app.changeAppLanguage,
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
