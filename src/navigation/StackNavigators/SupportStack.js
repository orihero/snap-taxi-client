import React from 'react';
import PageHeader from "../../components/PageHeader/PageHeader";
import {CardStyleInterpolators, createStackNavigator} from "@react-navigation/stack";
import Colors from "../../assets/styles/Colors";
import SupportScreen from "../../screens/SupportScreen/SupportScreen";
import SupportCategoryScreen from "../../screens/SupportCategoryScreen";
import SupportChatScreen from "../../screens/SupportChatScreen/SupportChatScreen";
const {Navigator, Screen} = createStackNavigator();

const SupportStack = () => (
    <Navigator
        screenOptions={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}
    >
        <Screen
            name="SupportStack"
            component={SupportScreen}
            options={{
                header: (props) => <PageHeader
                    right
                    title={"Поддержка"}
                    {...props}
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
        <Screen
            name="SupportChat"
            component={SupportChatScreen}
            options={{
                header: (props) => <PageHeader
                    title={"Служба поддержки"}
                    {...props}
                />,
                cardStyle: {backgroundColor: Colors.background}
            }}
        />
    </Navigator>
);
export default SupportStack;
