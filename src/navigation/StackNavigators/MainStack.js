import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import MainScreen from "../../screens/MainScreen";
import DrawerStack from "../DrawerNavigation/DrawerStack";
import Header from "../../components/Header";
import {StatusBar} from "react-native";

const {Navigator, Screen} = createStackNavigator();

const MainStack = () => (
    <Navigator
        backgroundColor={'#fff'}
    >
        <Screen
            name="Home"
            component={MainScreen}
            options={{
                headerShown: false
            }}
        />

    </Navigator>
);
export default MainStack;