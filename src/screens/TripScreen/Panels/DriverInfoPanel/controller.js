import React, {useState, useRef} from 'react';
import {PanResponder, Animated} from "react-native"
import {useNavigation} from "@react-navigation/native";

import DriverInfoPanelView from "./view";


const DriverInfoPanelController = ({order, CancelOrder, SendPush}) => {
    const navigation = useNavigation();

    const [airCondition, setAirCondition] = useState(true);
    const height = useRef(new Animated.Value(0)).current;
    const [isPressed, setIsPressed] = useState(false);
    const panResPonder = useRef(PanResponder.create({
        onMoveShouldSetPanResponder: (evt, gestureState) => {
            return !(gestureState.dy === 0 || (gestureState.dy < 1 && gestureState.dy > -2))
        },
        onPanResponderGrant: (evt, gestureState) => {
            height.setOffset(height._value)
        },
        onPanResponderMove: (evt, gestureState) => {
            height.setValue(gestureState.dy * -1);
        },
        onPanResponderRelease: (evt, gestureState) => {
            height.flattenOffset();
            if (gestureState.dy > 0) {
                Animated.spring(height, {
                    toValue: 0,
                    useNativeDriver: false
                }).start()
            } else if (gestureState.dy < 0) {
                Animated.spring(height, {
                    toValue: 250,
                    useNativeDriver: false
                }).start()
            }
        }
    })).current;

    const collapse = height.interpolate({
        inputRange: [-1, 250],
        outputRange: [0, 250],
        extrapolate: 'clamp'
    });

    const backgroundColor = collapse.interpolate({
        inputRange: [0, 250],
        outputRange: ['rgba(0,0,0,0)', 'rgba(0,0,0,0.2)']
    });

    const cancelOrder = () => {
        navigation.navigate('Home');
        CancelOrder({
            orderId: order.id,
            driver_id: 28
        });
    };

    const coming = () => {
        SendPush({
            user_id: order.driver_id,
            title: 'Выхожу',
            message: 'Клиент выходить'
        }, () => {
            setIsPressed(true);
        });
    };

    return (
        <DriverInfoPanelView
            isPressed={isPressed}
            backgroundColor={backgroundColor}
            panResPonder={panResPonder}
            airCondition={airCondition}
            setAirCondition={setAirCondition}
            car={order.car}
            coming={coming}
            phone={order.phone}
            collapse={collapse}
            price={order.price}
            status={order.status}
            driver={order.driver}
            cancelOrder={cancelOrder}
            routes={typeof order.routes === "string" ? JSON.parse(order.routes) : order.routes}
        />
    );
};

export default DriverInfoPanelController;
