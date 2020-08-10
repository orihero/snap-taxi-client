import React from 'react';
import {View, Image, TouchableWithoutFeedback} from "react-native"

import styles from "./styles";
import InfoIcon from "../../assets/images/InfoIcon";
import {Bold, Light} from "../Layout/AppText";

const CarItem = (
    {
        active,
        title,
        duration,
        price,
        onInfoPress,
        onPress,
        index
    }) => {
    const plan = [
        {title: 'Старт', img: require('../../assets/images/plan/start.png')},
        {title: 'Эконом', img: require('../../assets/images/plan/econom.png')},
        {title: 'Комфорт', img: require('../../assets/images/plan/comfort.png')},
        {title: 'Бизнес', img: require('../../assets/images/plan/bussiness.png')},
        {title: 'Доставка', img: require('../../assets/images/plan/delivery.png')},
        {title: 'Перегон', img: require('../../assets/images/plan/help.png')},
    ];
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={[styles.planItem, active && styles.activeContainerStyle]}>
                <View style={{marginTop: 6}}>
                    <Bold style={[styles.text, active && styles.activeText]}>{title}</Bold>
                    <Bold style={[styles.text, active && styles.activeText]}>от {price}</Bold>
                    <Light style={[{fontSize: 11}, active && {color: '#fff'}]}>{duration} мин</Light>
                </View>
                <TouchableWithoutFeedback onPress={onInfoPress}>
                    <InfoIcon style={styles.info}/>
                </TouchableWithoutFeedback>
                <Image style={styles.img} source={plan[index].img}/>
            </View>
        </TouchableWithoutFeedback>
    );
};


export default CarItem;
