import React from 'react';
import {View, Image, TouchableOpacity} from "react-native"
import {
    Placeholder,
    PlaceholderMedia,
    PlaceholderLine,
    Fade
} from "rn-placeholder";
import styles from "./styles";
import {Bold} from "../Layout/AppText";
import Lightning from "../../assets/images/Lightning";

const CarItem = (
    {
        active,
        title,
        price,
        onInfoPress,
        onPress,
        index,
        inflated
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
        <TouchableOpacity onPress={active ? onInfoPress : onPress}>
            <View style={[styles.planItem, active && styles.activeContainerStyle]}>
                <View style={{marginTop: 6}}>
                    {
                        title
                            ? <Bold style={[styles.text, {fontSize: 12}, active && styles.activeText]}>{title}</Bold>
                            : <Placeholder
                                Animation={Fade}
                                style={{width: 50}}
                            >
                                <PlaceholderLine/>
                            </Placeholder>
                    }
                    <View style={styles.row}>
                        {
                            inflated &&
                            <View style={{marginLeft: -5, marginRight: 1}}>
                                <Lightning/>
                            </View>
                        }
                        {
                            price
                                ? <Bold style={[styles.text, active && styles.activeText]}>от {price}</Bold>
                                : <Placeholder
                                    Animation={Fade}
                                    style={{width: 30}}
                                >
                                    <PlaceholderLine/>
                                </Placeholder>
                        }
                    </View>
                </View>
                <Image style={styles.img} source={plan[index] ? plan[index].img : ''}/>
            </View>
        </TouchableOpacity>
    );
};


export default CarItem;
