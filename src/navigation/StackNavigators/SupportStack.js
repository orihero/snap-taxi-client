import React from 'react';
import PageHeader from "../../components/PageHeader/PageHeader";
import {createStackNavigator} from "@react-navigation/stack";
import Colors from "../../assets/styles/Colors";
import SupportScreen from "../../screens/SupportScreen/SupportScreen";
import SupportCategoryScreen from "../../screens/SupportCategoryScreen";

const {Navigator, Screen} = createStackNavigator();

const SupportStack = () => (
    <Navigator>
        <Screen
            name="SupportStack"
            component={SupportScreen}
            options={{
                header: (props) => <PageHeader
                    title={"Поддержка"}
                    {...props}
                    style={{paddingBottom: 74, marginBottom: 0}}
                />,
                cardStyle: {backgroundColor: Colors.background}
            }}
        />
        <Screen
            name="SupportCategory"
            component={SupportCategoryScreen}
            options={{
                header: (props) => <PageHeader
                    title={"Остались вещи"}
                    {...props}
                />,
                cardStyle: {backgroundColor: Colors.background}
            }}
        />
    </Navigator>
);
export default SupportStack;
