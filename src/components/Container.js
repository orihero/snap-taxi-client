import React, {useState, useEffect} from 'react';
import {Animated} from "react-native"
import {useIsDrawerOpen} from "@react-navigation/drawer";

const Container = (Component) => {
    return (props) => {
        const isDrawerOpen = useIsDrawerOpen();
        const translateY = useState(new Animated.Value(0))[0];
        useEffect(() => {
            Animated.timing(translateY, {
                toValue: isDrawerOpen ? 75 : 0,
                duration: isDrawerOpen ? 400 : 100,
                useNativeDriver: true
            }).start()
        }, [props.navigation]);
        return (
            <Animated.View style={{flex: 1,transform: [{translateY}]}}>
                <Component {...props}/>
            </Animated.View>
        );
    };
};

export default Container;