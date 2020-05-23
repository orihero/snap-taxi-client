import React from 'react';
import MyAddressesScreen from "../../screens/MyAddressesScreen/MyAddressesScreen";
import PageHeader from "../../components/PageHeader/PageHeader";
import {createStackNavigator} from "@react-navigation/stack";
import Colors from "../../assets/styles/Colors";
import {localization} from "../../services/Localization";
import ChangeAddressScreen from "../../screens/ChangeAddressScreen/ChangeAddressScreen";
import AddAddressScreen from "../../screens/AddAddressScreen/AddAddressScreen";

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
        <Screen
            name="ChangeAddress"
            component={ChangeAddressScreen}
            options={{
                header: (props) => <PageHeader rightIcon title={localization.changeAddress} {...props}/>,
                cardStyle: {backgroundColor: Colors.background}
            }}r
        />
        <Screen
            name="AddAddress"
            component={AddAddressScreen}
            options={{
                header: (props) => <PageHeader title={localization.addAddress} {...props}/>,
                cardStyle: {backgroundColor: Colors.background}
            }}
        />
    </Navigator>
);


export default MyAddressesStack;
