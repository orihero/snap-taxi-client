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
  setAppState,
  isAppLoading,
  setChatMessage,
  isRouterLoaded,
  languageChanging,
  getNotifications,
  setNetworkConnection,
}: Props) => {
  useEffect(() => {
    initApp();
    NetInfo.addEventListener((state) => {
      setNetworkConnection(state.isConnected);
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
    if (!isAppLoading && isRouterLoaded) {
      SplashScreen.hide();
    }
  }, [isAppLoading, isRouterLoaded]);

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

const mapState = ({ loading, app: { isRouterLoaded } }: RootState) => ({
  isRouterLoaded,
  isAppLoading: loading.effects.app.initApp,
  languageChanging: loading.effects.app.changeAppLanguage,
});

const mapDispatch = ({
  user: { getNotifications },
  booking: { setChatMessage },
  app: { initApp, setNetworkConnection, setAppState },
}: Dispatch) => ({
  initApp,
  setAppState,
  setChatMessage,
  getNotifications,
  setNetworkConnection,
});

type StateProps = ReturnType<typeof mapState>;
type DisPatchProps = ReturnType<typeof mapDispatch>;

export type Props = StateProps & DisPatchProps;

export default connect(mapState, mapDispatch)(App);
