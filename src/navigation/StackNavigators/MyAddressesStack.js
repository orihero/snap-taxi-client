import React from 'react';
import MyAddressesScreen from "../../screens/MyAddressesScreen";
import PageHeader from "../../components/PageHeader";
import {createStackNavigator} from "@react-navigation/stack";

const {Navigator, Screen} = createStackNavigator();

const MyAddressesStack = () => (
    <Navigator>
        <Screen
            name="MyAddresses"
            component={MyAddressesScreen}
            options={{
                header: (props) => <PageHeader title={'Мои адреса'} {...props}/>,
                cardStyle: {backgroundColor: '#fff'}
            }}
        />
    </Navigator>
);


export default MyAddressesStack;