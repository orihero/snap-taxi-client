import React, {useState} from 'react';
import {Text, View, StyleSheet, Vibration, PanResponder, Animated} from "react-native";
import UzcardIcon from "../assets/images/UzcardIcon";
import RadioButton from "./RadioButton";
import Colors from "../assets/styles/Colors";
import TrashIcon from "../assets/images/TrashIcon";

const CardItem = ({onPress, selected}) => {
    const pan = useState(new Animated.ValueXY({x: 0, y: 0}))[0];
    const scale = useState(new Animated.Value(0))[0];
    const [isDisabled, setIsDisabled] = useState(false)
    const panResponder = useState(PanResponder.create({
        onStartShouldSetPanResponder: (evt, gestureState) => true,
        onPanResponderGrant: (evt, gestureState) => {
            pan.setOffset({
                y: 0,
                x: pan.x._value
            })
        },
        onPanResponderMove: (evt, gestureState) => {
            if (pan.x._value >= -46 && gestureState.dx <= 0) {
                pan.x.setValue(gestureState.dx);
                Animated.spring(scale, {
                    toValue: 1,
                    useNativeDriver: true
                }).start();
                setIsDisabled(true);
            } else if (gestureState.dx >= 0 && pan.x._value <= -46) {
                // console.log('right swipe', {...gestureState}, 'x', pan.x._value);
                pan.x.setValue(gestureState.dx);
                Animated.spring(scale, {
                    toValue: 0,
                    useNativeDriver: true
                }).start();
                setIsDisabled(false)
            }
        },
        onPanResponderRelease: (evt, gestureState) => {
            pan.flattenOffset();

        }
    }))[0];

    return (
        <View style={{}}>
            <Animated.View
                style={[styles.card, {transform: pan.getTranslateTransform()}]} {...panResponder.panHandlers}>
                <UzcardIcon style={{marginRight: 14}} width={23} height={30}/>
                <View>
                    <View>
                        <Text style={{fontSize: 15, color: Colors.blue, fontWeight: 'bold'}}>+998 90 755 4554</Text>
                        <View style={{flexDirection: 'row', marginLeft: 4}}>
                            <Text style={{marginRight: 10, color: '#646974', fontSize: 15}}>5575</Text>
                            <Text style={{marginRight: 10, color: '#646974', fontSize: 15}}>7577</Text>
                            <Text style={{marginRight: 10, color: '#646974', fontSize: 15}}>6512</Text>
                            <Text style={{color: '#646974', fontSize: 15}}>6578</Text>
                        </View>
                    </View>
                </View>
                <RadioButton
                    disabled={isDisabled}
                    onPress={onPress}
                    selected={selected}
                    containerStyle={{width: 17, height: 17}}
                    innerStyle={{width: 9, height: 9}}
                />
            </Animated.View>
            <Animated.View style={[styles.icon, {transform: [{scale}]}]}>
                <TrashIcon/>
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        paddingTop: 9,
        paddingBottom: 14.2,
        paddingLeft: 18.7,
        paddingRight: 18,
        flexDirection: 'row',
        alignItems: 'center',
        elevation: 4,
        backgroundColor: Colors.background,
        borderRadius: 10,
        marginBottom: 12,
        borderWidth: 2,
        borderColor: '#fff'
    },
    icon: {
        position: 'absolute',
        right: 10,
        alignSelf: 'center',
        top: 25
    }
});

export default CardItem;