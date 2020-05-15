import React, {useEffect} from 'react';
import {View, StyleSheet, Animated, TouchableWithoutFeedback} from "react-native";
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {} from 'react-native-gesture-handler'
import UzcardIcon from "../assets/images/UzcardIcon";
import RadioButton from "./RadioButton";
import Colors from "../assets/styles/Colors";
import TrashIcon from "../assets/images/TrashIcon";
import {SemiBold} from "./Layout/AppText";

const CardItem = ({onPress, selected}) => {
    const renderLeftActions = (progress, dragX) => {
        const Scale = progress.interpolate({
            inputRange: [0, 1, 1],
            outputRange: [0, 1, 1],
        });
        return (
            <Animated.View style={[styles.icon, {transform: [{scale: Scale}]}]}>
                <TrashIcon/>
            </Animated.View>
        );
    };

    return (
        <Swipeable
            renderRightActions={renderLeftActions}
            containerStyle={{overflow: 'visible'}}
        >
            <TouchableWithoutFeedback
                onPress={onPress}
            >
                <View
                    style={styles.card}>
                    <UzcardIcon
                        style={
                            {
                                marginRight: 14
                            }
                        }
                        width={23}
                        height={30}
                    />
                    <View>
                        <View>
                            <SemiBold style={{fontSize: 15, color: Colors.blue}}>+998 90 755 4554</SemiBold>
                            <View style={{flexDirection: 'row', marginLeft: 4}}>
                                <SemiBold style={{marginRight: 10, color: '#646974', fontSize: 15}}>5575</SemiBold>
                                <SemiBold style={{marginRight: 10, color: '#646974', fontSize: 15}}>7577</SemiBold>
                                <SemiBold style={{marginRight: 10, color: '#646974', fontSize: 15}}>6512</SemiBold>
                                <SemiBold style={{color: '#646974', fontSize: 15}}>6578</SemiBold>
                            </View>
                        </View>
                    </View>
                    <RadioButton
                        selected={selected}
                        containerStyle={{width: 17, height: 17}}
                        innerStyle={{width: 9, height: 9}}
                    />
                </View>
            </TouchableWithoutFeedback>
        </Swipeable>
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
        backgroundColor: Colors.background,
        borderRadius: 10,
        marginBottom: 12,
        borderWidth: 2,
        borderColor: '#fff',
        elevation: 4
    },
    icon: {
        alignSelf: 'center',
        width: 46,
        alignItems: 'center'
    }
});

export default CardItem;
