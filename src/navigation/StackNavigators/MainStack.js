import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import MainScreen from "../../screens/MainScreen";
import SelectCarScreen from "../../screens/SelectCarScreen";
import TaxiComingScreen from "../../screens/TaxiComingScreen";
import CarWaitingScreen from "../../screens/CarWaitingScreen";
import ChatScreen from "../../screens/ChatScreen/ChatScreen";
import PageHeader from "../../components/PageHeader/PageHeader";
import {localization} from "../../services/Localization";
import Colors from "../../assets/styles/Colors";
import EnterPhoneNumberScreen from "../../screens/EnterPhoneNumberScreen/EnterPhoneNumberScreen";
import NotificationsScreen from "../../screens/NotificationsScreen/NotificationsScreen";
import RateTripScreen from "../../screens/RateTripScreen";

const {Navigator, Screen} = createStackNavigator();

const MainStack = () => (
    <Navigator
        backgroundColor={'#fff'}
        mode={'modal'}
    >
        <Screen
            name="Home"
            component={MainScreen}
            options={{
                headerShown: false
            }}
        />
        <Screen
            name="SelectCar"
            component={SelectCarScreen}
            options={{
                headerShown: false
            }}
        />
        <Screen
            name="TaxiComing"
            component={TaxiComingScreen}
            options={{
                headerShown: false
            }}
        />
        <Screen
            name="CarWaiting"
            component={CarWaitingScreen}
            options={{
                headerShown: false
            }}
        />
        <Screen
            name="Chat"
            component={ChatScreen}
            options={{
                header: (props) => <PageHeader title={localization.chat} style={{marginBottom: 0}} {...props}/>,
                cardStyle: {backgroundColor: Colors.background}
            }}
        />
        <Screen
            name="EnterPhoneNumber"
            component={EnterPhoneNumberScreen}
            options={{
                header: (props) => <PageHeader title={'Кто поедет'} style={{marginBottom: 0}} {...props}/>,
                cardStyle: {backgroundColor: Colors.background}
            }}
        />
        <Screen
            name="Notifications"
            component={NotificationsScreen}
            options={{
                header: (props) => <PageHeader title={'Уведомление'} style={{marginBottom: 0}} {...props}/>,
                cardStyle: {backgroundColor: Colors.background}
            }}
        />
        <Screen
            name="RateTrip"
            component={RateTripScreen}
            options={{
                headerShown: false
            }}
        />
    </Navigator>
);
export default MainStack;
