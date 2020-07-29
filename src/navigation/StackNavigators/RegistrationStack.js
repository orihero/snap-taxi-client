import React from 'react';

import RegistrationScreen from "../../screens/Registration/RegistrationScreen";
import RegistrationConfirmationScreen from "../../screens/Registration/RegistrationConfirmationScreen";
import {createStackNavigator} from "@react-navigation/stack";

const {Navigator, Screen} = createStackNavigator();

const RegistrationStack = () => (
    <Navigator>
        <Screen
            name="Registration"
            component={RegistrationScreen}
            options={{
                headerShown: false,
                cardStyle: {backgroundColor: '#fff'}

            }}
        />
        <Screen
            name="RegistrationConfirmation"
            component={RegistrationConfirmationScreen}
            options={{
                headerShown: false,
                cardStyle: {backgroundColor: '#fff'}

            }}
        />
    </Navigator>
);

export default RegistrationStack;
