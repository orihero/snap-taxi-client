import React from 'react';
import {View, Animated, TouchableWithoutFeedback} from "react-native";
import Swipeable from 'react-native-gesture-handler/Swipeable';

import styles from "./styles"
import UzcardIcon from "../../assets/images/UzcardIcon";
import RadioButton from "../RadioButton/RadioButton";
import TrashIcon from "../../assets/images/TrashIcon";
import {SemiBold} from "../Layout/AppText";

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
                        style={{marginRight: 14}}
                        width={23}
                        height={30}
                    />
                    <View>
                        <View>
                            <SemiBold style={styles.phone}>+998 90 755 4554</SemiBold>
                            <View style={{flexDirection: 'row', marginLeft: 4}}>
                                <SemiBold style={styles.cardNumber}>5575</SemiBold>
                                <SemiBold style={styles.cardNumber}>7577</SemiBold>
                                <SemiBold style={styles.cardNumber}>6512</SemiBold>
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


export default CardItem;
