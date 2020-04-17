import React, {useRef, useState} from 'react';
import {Animated, PanResponder, Dimensions, StyleSheet} from "react-native";

const BottomDrawer = ({containerStyle, children}) => {
    const [initialCoordinates, setInitialCoordinates] = useState();
    const pan = useRef(new Animated.ValueXY()).current;
    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderGrant: (evt, gestureState) => {
                Animated.event([null, {dy: 0}])(evt, gestureState);
            },
            onPanResponderMove: (e, gestureState) => {
                // console.log({moveY: gestureState.moveY, y0: gestureState.y0, dy: gestureState.dy});
                if (gestureState.dy < 0) {
                    Animated.event([null, {dy: pan.y}])(e, gestureState);
                }
            },
            onPanResponderRelease: (e, gestureState) => {
                if (gestureState.dy > 0)
                    Animated.spring(pan, {
                        toValue: {
                            x: 0,
                            y: 0
                        },
                    }).start();
            }
        })
    ).current;
    const panStyle = {transform: pan.getTranslateTransform()};
    return (
        <Animated.View
            // onLayout={(event) => {
            //     const {y, height} = event.nativeEvent.layout;
            //     setInitialCoordinates(height)
            // }}
            style={{
                ...styles.animationContainerContainer,
                ...containerStyle,
                ...panStyle
            }}
            {...panResponder.panHandlers}
        >
            {children}
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    animationContainerContainer: {
        width: '100%',
        backgroundColor: '#fff',
        position: 'absolute',
        bottom: 0
    }
});

export default BottomDrawer;