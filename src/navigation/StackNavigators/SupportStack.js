import React from 'react';
import PageHeader from "../../components/PageHeader";
import {createStackNavigator} from "@react-navigation/stack";
import Colors from "../../assets/styles/Colors";
import {localization} from "../../services/Localization";
import SupportScreen from "../../screens/SupportScreen";

const {Navigator, Screen} = createStackNavigator();

const SupportStack = () => (
    <Navigator>
        <Screen
            name="SupportStack"
            component={SupportScreen}
            options={{
                header: (props) => <PageHeader title={"Служба поддержки"} {...props}/>,
                cardStyle: {backgroundColor: Colors.background}
            }}
        />
    </Navigator>
);
export default SupportStack;
