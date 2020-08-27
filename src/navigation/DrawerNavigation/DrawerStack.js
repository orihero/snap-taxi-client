import React from 'react'
import DrawerContent from "../../components/DrawerContent";
import {createDrawerNavigator, useIsDrawerOpen} from "@react-navigation/drawer";
import routes from "./routes";
import Colors from "../../assets/styles/Colors";

const {Navigator, Screen} = createDrawerNavigator();


const DrawerStack = () => (
    <Navigator
        drawerPosition={'left'}
        drawerType={'slide'}
        overlayColor={0}
        drawerContent={(props) => <DrawerContent {...props}/>}
        initialRouteName="MainStack"
        sceneContainerStyle={{backgroundColor: Colors.background}}
    >
        {
            routes.map((route, index) => (
                    route.component && <Screen
                        key={index}
                        name={route.name}
                        component={route.component}
                    />
                )
            )
        }
    </Navigator>
);

export default DrawerStack
