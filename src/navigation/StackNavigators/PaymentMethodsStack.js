import React from 'react';
import PaymentMethodsScreen from "../../screens/PaymentMethodsScreen";
import PageHeader from "../../components/PageHeader";
import AddCardScreen from "../../screens/AddCardScreen";
import {createStackNavigator} from "@react-navigation/stack";

const {Navigator, Screen} = createStackNavigator();

const PaymentMethodsStack = () => (
    <Navigator>
        <Screen
            name="PaymentMethods"
            component={PaymentMethodsScreen}
            options={{
                header: (props) => <PageHeader title={'Настройки'} {...props}/>,
                cardStyle: {backgroundColor: '#fff'},
            }}
        />
        <Screen
            name="AddCard"
            component={AddCardScreen}
            options={{
                header: (props) => <PageHeader title={'Добавить карту'} {...props}/>,
                cardStyle: {backgroundColor: '#fff'},
            }}
        />
    </Navigator>
);
export default PaymentMethodsStack;