import React, { useEffect } from 'react';
import DrawerContent from '../../components/DrawerContent';
import { createDrawerNavigator } from '@react-navigation/drawer';
import routes from './routes';
import Colors from '../../assets/styles/Colors';
import SplashScreen from 'react-native-splash-screen';

const { Navigator, Screen } = createDrawerNavigator();

const DrawerStack = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <Navigator
      drawerPosition={'left'}
      drawerType={'slide'}
      overlayColor={0}
      drawerContent={(props) => <DrawerContent {...props} />}
      initialRouteName="MainStack"
      sceneContainerStyle={{ backgroundColor: Colors.background }}>
      {routes.map(
        (route, index) =>
          route.component && (
            <Screen key={index} name={route.name} component={route.component} />
          ),
      )}
    </Navigator>
  );
};

export default DrawerStack;
