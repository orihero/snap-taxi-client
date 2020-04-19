import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import SettingsScreen from "../../screens/SettingsScreen";
import PageHeader from "../../components/PageHeader";

const {Navigator, Screen} = createStackNavigator();

const SettingsStack = () => (
    <Navigator>
        <Screen
            name="Discounts"
            component={SettingsScreen}
            options={{
                header: (props) => <PageHeader title={'Настройки'} {...props}/>,
                cardStyle: {backgroundColor: '#fff'}
            }}
        />
    </Navigator>
);

export default SettingsStack;