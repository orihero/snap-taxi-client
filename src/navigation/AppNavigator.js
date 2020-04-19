import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import DrawerStack from "./DrawerNavigation/DrawerStack";

const AppNavigator = () => (
    <NavigationContainer>
        <DrawerStack/>
    </NavigationContainer>
);

export default AppNavigator

