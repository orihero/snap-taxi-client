import React from 'react';
import MyAddressesScreen from "../../screens/MyAddressesScreen";
import PageHeader from "../../components/PageHeader";
import {createStackNavigator} from "@react-navigation/stack";
import Colors from "../../assets/styles/Colors";
import {localization} from "../../services/Localization";

const {Navigator, Screen} = createStackNavigator();

const MyAddressesStack = () => (
    <Navigator>
        <Screen
            name="MyAddresses"
            component={MyAddressesScreen}
            options={{
                header: (props) => <PageHeader title={localization.myAddresses} {...props}/>,
                cardStyle: {backgroundColor: Colors.background}
            }}
        />
    </Navigator>
);


export default MyAddressesStack;
