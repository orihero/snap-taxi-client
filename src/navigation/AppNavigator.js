import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {connect} from "react-redux";
import DrawerStack from "./DrawerNavigation/DrawerStack";
import RegistrationStack from "./StackNavigators/RegistrationStack";

const AppNavigator = ({user}) => (
    <NavigationContainer>
        {user.isAuthenticated
            ? <DrawerStack/>
            : <RegistrationStack/>
        }
    </NavigationContainer>
);

const mapStateToProps = ({user}) => ({
    user
});

export default connect(mapStateToProps)(AppNavigator)

