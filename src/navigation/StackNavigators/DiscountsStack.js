import React from 'react';
import DiscountsScreen from "../../screens/DiscountsScreen";
import PageHeader from "../../components/PageHeader";
import {createStackNavigator} from "@react-navigation/stack";
import Colors from "../../assets/styles/Colors";
import {localization} from "../../services/Localization";

const {Navigator, Screen} = createStackNavigator();

const DiscountsStack = () => (
    <Navigator>
        <Screen
            name="Discounts"
            component={DiscountsScreen}
            options={{
                header: (props) => <PageHeader title={localization.sale} {...props}/>,
                cardStyle: {backgroundColor: Colors.background}
            }}
        />
    </Navigator>
);
export default DiscountsStack;
