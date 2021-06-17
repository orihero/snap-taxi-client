import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { connect } from 'react-redux';
import DrawerStack from './DrawerNavigation/DrawerStack';
import AuthenticationStack from './StackNavigators/AuthenticationStack';
import AsyncStorage from '@react-native-community/async-storage';
import { Dispatch, RootState } from '@store/models';

const AppNavigator = ({ isAuthenticated }: Props) => {
  const [isReady, setIsReady] = useState(false);
  const [initialState, setInitialState] = useState();

  useEffect(() => {
    const restoreState = async () => {
      try {
        const savedStateString = await AsyncStorage.getItem('router');
        const state = savedStateString
          ? JSON.parse(savedStateString)
          : undefined;
        if (state !== undefined) {
          setInitialState(state);
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
    return null;
  }

  return (
    <NavigationContainer
      initialState={initialState}
      onStateChange={(state) => {
        AsyncStorage.setItem('router', JSON.stringify(state));
      }}>
      {isAuthenticated ? <DrawerStack /> : <AuthenticationStack />}
    </NavigationContainer>
  );
};

const mapState = ({
  app: { isAuthenticated },
  booking: { current },
}: RootState) => ({
  current,
  isAuthenticated,
});

const mapDispatch = ({ app: { setIsRouterLoaded } }: Dispatch) => ({
  setIsRouterLoaded,
});

type StateProps = ReturnType<typeof mapState>;
type DisPatchProps = ReturnType<typeof mapDispatch>;

export type Props = StateProps & DisPatchProps;

export default connect(mapState, mapDispatch)(AppNavigator);
