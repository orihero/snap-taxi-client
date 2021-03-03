import React from 'react';
import PaymentMethodsScreen from "../../screens/PaymentMethodScreen";
import PageHeader from "@components/PageHeader/PageHeader";
import AddCardScreen from "../../screens/AddCardScreen/AddCardScreen";
import {CardStyleInterpolators, createStackNavigator} from "@react-navigation/stack";
import Colors from "../../assets/styles/Colors";
import {localization} from "../../services/Localization";

const {Navigator, Screen} = createStackNavigator();

const PaymentMethodsStack = () => (
    <Navigator
        screenOptions={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}
    >
        <Screen
            name="PaymentMethods"
            component={PaymentMethodsScreen}
            options={{
                header: (props) => <PageHeader title={localization.paymentMethods} {...props}/>,
                cardStyle: {backgroundColor: Colors.background}
            }}
        />
        <Screen
            name="AddCard"
            component={AddCardScreen}
            options={{
                header: (props) => <PageHeader
                    title={localization.addCard}
                    style={{paddingBottom: 74, marginBottom: 0}}
                    {...props}
                />,
                cardStyle: {backgroundColor: Colors.background},
            }}
        />
    </Navigator>
);
export default PaymentMethodsStack;
