import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {connect} from "react-redux";
import DrawerStack from "./DrawerNavigation/DrawerStack";
import RegistrationStack from "./StackNavigators/RegistrationStack";
import {localization} from "../services/Localization";

const AppNavigator = ({user}) => {

    localization.setLanguage(user.language);

    return (
        <NavigationContainer>
            {
                user.isAuthenticated
                    ? <DrawerStack key={user.language}/>
                    : <RegistrationStack key={user.language}/>
            }
        </NavigationContainer>
    )
};

const mapStateToProps = ({user}) => ({
    user
});

export default connect(mapStateToProps)(AppNavigator)

