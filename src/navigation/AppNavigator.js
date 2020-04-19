import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {createDrawerNavigator} from "@react-navigation/drawer";
import RegistrationScreen from "../screens/Registration/RegistrationScreen";
import MainScreen from "../screens/MainScreen";
import DiscountsScreen from "../screens/DiscountsScreen";
import PageHeader from "../components/PageHeader";
import SettingsScreen from "../screens/SettingsScreen";
import PaymentMethodsScreen from "../screens/PaymentMethodsScreen";
import AddCardScreen from "../screens/AddCardScreen";
import RegistrationConfirmationScreen from "../screens/Registration/RegistrationConfirmationScreen";
import MyAddressesScreen from "../screens/MyAddressesScreen";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


const RegistrationStack = () => (
    <Stack.Navigator>
        <Stack.Screen
            name="Registration"
            component={RegistrationScreen}
            options={{
                headerShown: false,
                cardStyle: {backgroundColor: '#fff'}

            }}
        />
        <Stack.Screen
            name="RegistrationConfirmation"
            component={RegistrationConfirmationScreen}
            options={{
                headerShown: false,
                cardStyle: {backgroundColor: '#fff'}

            }}
        />
    </Stack.Navigator>
);

const MainStack = () => (
    <Stack.Navigator
        backgroundColor={'#fff'}
    >
        <Stack.Screen
            name="Home"
            component={MainScreen}
            options={{
                headerShown: false,
                cardStyle: {backgroundColor: '#fff'}
            }}
        />
    </Stack.Navigator>
);


const DiscountsStack = () => (
    <Stack.Navigator>
        <Stack.Screen
            name="Discounts"
            component={DiscountsScreen}
            options={{
                header: (props) => <PageHeader title={'Скидки'} {...props}/>,
                cardStyle: {backgroundColor: '#fff'}
            }}
        />
    </Stack.Navigator>
);

const SettingsStack = () => (
    <Stack.Navigator>
        <Stack.Screen
            name="Discounts"
            component={SettingsScreen}
            options={{
                header: (props) => <PageHeader title={'Настройки'} {...props}/>,
                cardStyle: {backgroundColor: '#fff'}
            }}
        />
    </Stack.Navigator>
);

const PaymentMethodsStack = () => (
    <Stack.Navigator>
        <Stack.Screen
            name="PaymentMethods"
            component={PaymentMethodsScreen}
            options={{
                header: (props) => <PageHeader title={'Настройки'} {...props}/>,
                cardStyle: {backgroundColor: '#fff'},
            }}
        />
        <Stack.Screen
            name="AddCard"
            component={AddCardScreen}
            options={{
                header: (props) => <PageHeader title={'Добавить карту'} {...props}/>,
                cardStyle: {backgroundColor: '#fff'},
            }}
        />
    </Stack.Navigator>
);

const MyAddressesStack = () => (
    <Stack.Navigator>
        <Stack.Screen
            name="MyAddresses"
            component={MyAddressesScreen}
            options={{
                header: (props) => <PageHeader title={'Мои адреса'} {...props}/>,
                cardStyle: {backgroundColor: '#fff'}
            }}
        />
    </Stack.Navigator>
);

const DrawerStack = () => (
    <Drawer.Navigator
        drawerPosition={'right'}
        drawerType={'slide'}
        overlayColor={0}
    >
        <Drawer.Screen name="MainStack" component={MainStack}/>
        <Drawer.Screen name="RegistrationStack" component={RegistrationStack}/>
        <Drawer.Screen name="PaymentMethodsStack" component={PaymentMethodsStack} options={{title: "Способ оплаты"}}/>
        <Drawer.Screen name="DiscountsStack" component={DiscountsStack} options={{title: "Скидки"}}/>
        <Drawer.Screen name="MyAddresses" component={MyAddressesStack} options={{title: "Мои адреса"}}/>
        <Drawer.Screen name="MyTrip" component={RegistrationStack} options={{title: "Мои поездки"}}/>
        <Drawer.Screen name="SettingsStack" component={SettingsStack} options={{title: "Настройки"}}/>
        <Drawer.Screen name="BeDriver" component={RegistrationStack} options={{title: "Стать водителем"}}/>
        <Drawer.Screen name="Support" component={RegistrationStack} options={{title: "Служба поддержки"}}/>
    </Drawer.Navigator>
);

const AppNavigator = () => (
    <NavigationContainer>
        <DrawerStack/>
    </NavigationContainer>
);

export default AppNavigator

