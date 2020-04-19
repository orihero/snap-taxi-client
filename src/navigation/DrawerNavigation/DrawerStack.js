import React from 'react'
import DrawerContent from "../../components/DrawerContent";
import {createDrawerNavigator} from "@react-navigation/drawer";
import routes from "./routes";

const {Navigator, Screen} = createDrawerNavigator();


const DrawerStack = () => (
    <Navigator
        drawerPosition={'right'}
        drawerType={'slide'}
        overlayColor={0}
        drawerContent={(props) => <DrawerContent {...props}/>}
        initialRouteName="MainStack"
    >
        {
            routes.map((route, index) => (
                    <Screen key={index} name={route.name} component={route.component}/>
                )
            )
        }
    </Navigator>
);

export default DrawerStack