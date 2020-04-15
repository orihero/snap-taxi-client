import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {createDrawerNavigator} from "@react-navigation/drawer";
import RegistrationScreen from "../screens/RegistrationScreen";
import MainScreen from "../screens/MainScreen";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const RegistrationStack = () => (
    <Stack.Navigator>
        <Stack.Screen
            name="Registration"
            component={RegistrationScreen}
            options={{
                headerShown: false
            }}
        />
    </Stack.Navigator>
);

const MainStack = () => (
    <Stack.Navigator>
        <Stack.Screen
            name="Home"
            component={MainScreen}
            options={{
                headerShown: false
            }}
        />
    </Stack.Navigator>
);

const DrawerStack = () => (
    <Drawer.Navigator>
        <Drawer.Screen name="MainStack" component={MainStack}/>
        <Drawer.Screen name="RegistrationStack" component={RegistrationStack}/>
    </Drawer.Navigator>
)

const AppNavigator = () => (
    <NavigationContainer>
        <DrawerStack/>
    </NavigationContainer>
);

export default AppNavigator

