import React from 'react';
import PaymentMethodsScreen from "../../screens/PaymentMethodsScreen";
import PageHeader from "../../components/PageHeader";
import AddCardScreen from "../../screens/AddCardScreen";
import {createStackNavigator} from "@react-navigation/stack";
import Colors from "../../assets/styles/Colors";

const {Navigator, Screen} = createStackNavigator();

const PaymentMethodsStack = () => (
    <Navigator>
        <Screen
            name="PaymentMethods"
            component={PaymentMethodsScreen}
            options={{
                header: (props) => <PageHeader title={'Способ оплаты'} {...props}/>,
                cardStyle: {backgroundColor: Colors.background}
            }}
        />
        <Screen
            name="AddCard"
            component={AddCardScreen}
            options={{
                header: (props) => <PageHeader
                    title={'Добавить карту'}
                    style={{paddingBottom: 74, marginBottom: 0}}
                    {...props}
                />,
                cardStyle: {backgroundColor: Colors.background},
            }}
        />
    </Navigator>
);
export default PaymentMethodsStack;