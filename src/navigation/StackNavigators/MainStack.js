import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import MainScreen from "../../screens/MainScreen";

const {Navigator, Screen} = createStackNavigator();

const MainStack = () => (
    <Navigator
        backgroundColor={'#fff'}
    >
        <Screen
            name="Home"
            component={MainScreen}
            options={{
                headerShown: false,
                cardStyle: {backgroundColor: '#fff'}
            }}
        />

    </Navigator>
);
export default MainStack;