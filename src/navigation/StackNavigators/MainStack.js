import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import MainScreen from "../../screens/MainScreen";
import SelectCarScreen from "../../screens/SelectCarScreen";
import TaxiComingScreen from "../../screens/TaxiComingScreen";
import CarWaitingScreen from "../../screens/CarWaitingScreen";

const {Navigator, Screen} = createStackNavigator();

const MainStack = () => (
    <Navigator
        backgroundColor={'#fff'}
        mode={'modal'}
    >
        <Screen
            name="Home"
            component={MainScreen}
            options={{
                headerShown: false
            }}
        />
        <Screen
            name="SelectCar"
            component={SelectCarScreen}
            options={{
                headerShown: false
            }}
        />
        <Screen
            name="TaxiComing"
            component={TaxiComingScreen}
            options={{
                headerShown: false
            }}
        />
        <Screen
            name="CarWaiting"
            component={CarWaitingScreen}
            options={{
                headerShown: false
            }}
        />
    </Navigator>
);
export default MainStack;
