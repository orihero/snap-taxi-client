import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import SettingsScreen from "../../screens/SettingsScreen";
import PageHeader from "../../components/PageHeader/PageHeader";
import Colors from "../../assets/styles/Colors";
import {localization} from "../../services/Localization";
import SelectLanguageScreen from "../../screens/SelectLanguageScreen/SelectLanguageScreen";

const {Navigator, Screen} = createStackNavigator();

const SettingsStack = () => (
    <Navigator>
        <Screen
            name="Settings"
            component={SettingsScreen}
            options={{
                header: (props) => <PageHeader title={localization.settings} {...props}/>,
                cardStyle: {backgroundColor: Colors.background}
            }}
        />
        <Screen
            name="SelectLanguage"
            component={SelectLanguageScreen}
            options={{
                header: (props) => <PageHeader title={localization.appLanguage} {...props}/>,
                cardStyle: {backgroundColor: Colors.background}
            }}
        />
    </Navigator>
);

export default SettingsStack;
