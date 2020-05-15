import React from 'react';
import PageHeader from "../../components/PageHeader";
import {createStackNavigator} from "@react-navigation/stack";
import Colors from "../../assets/styles/Colors";
import MyTripsScreen from "../../screens/MyTripsScreen";
import {localization} from "../../services/Localization";

const {Navigator, Screen} = createStackNavigator();

const MyTripsStack = () => (
    <Navigator>
        <Screen
            name="MyTrips"
            component={MyTripsScreen}
            options={{
                header: (props) => <PageHeader
                    title={localization.myTrips}
                    style={{paddingBottom: 74, marginBottom: 0}}
                    {...props}
                />,
                cardStyle: {backgroundColor: Colors.background},
            }}
        />
    </Navigator>
);
export default MyTripsStack;
