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
    <Drawer.Navigator
        drawerPosition={'right'}
        drawerType={'slide'}
        overlayColor={0}
    >
        <Drawer.Screen name="MainStack" component={MainStack}/>
        <Drawer.Screen name="RegistrationStack" component={RegistrationStack}/>
        <Drawer.Screen name="Discounts" component={RegistrationStack} options={{title: "Скидки"}}/>
        <Drawer.Screen name="MyAddresses" component={RegistrationStack} options={{title: "Мои адреса"}}/>
        <Drawer.Screen name="MyTrip" component={RegistrationStack} options={{title: "Мои поездки"}}/>
        <Drawer.Screen name="Settings" component={RegistrationStack} options={{title: "Настройки"}}/>
        <Drawer.Screen name="BeDriver" component={RegistrationStack} options={{title: "Стать водителем"}}/>
        <Drawer.Screen name="Support" component={RegistrationStack} options={{title: "Служба поддержки"}}/>
    </Drawer.Navigator>
)

const AppNavigator = () => (
    <NavigationContainer>
        <DrawerStack/>
    </NavigationContainer>
);

export default AppNavigator

