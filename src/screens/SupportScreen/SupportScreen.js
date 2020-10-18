import React from 'react';
import {View, Alert, ScrollView, TouchableWithoutFeedback, Linking, TouchableOpacity} from 'react-native'

import styles from "./styles";
import {Bold, Regular, SemiBold} from "../../components/Layout/AppText";
import ArrowIcon from "../../assets/images/ArrowIcon";
import ChatIcon from "../../assets/images/ChatIcon";


const SupportScreen = ({navigation}) => {

    return (
        <View style={styles.container}>
            <View style={{marginHorizontal: 20}}>
                <View>
                    <Bold>Контакты</Bold>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 30}}>
                        <Regular>Служба поодержки:</Regular>
                        <TouchableOpacity onPress={() => Linking.openURL('tel:+998555022525')}>
                            <SemiBold>+998 55 502 25 25</SemiBold>
                        </TouchableOpacity>
                    </View>
                </View>
                <Regular style={{color: '#AAAEB7'}}>Дополнительные вопросы</Regular>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('SupportCategory')}>
                    <View style={styles.item}>
                        <Bold>Проблема с другим заказом</Bold>
                        <ArrowIcon/>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('SupportCategory')}>
                    <View style={styles.item}>
                        <Bold>В машине остались вещи</Bold>
                        <ArrowIcon/>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('SupportCategory')}>
                    <View style={styles.item}>
                        <Bold>Что то с деньгами</Bold>
                        <ArrowIcon/>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('SupportCategory')}>
                    <View style={styles.item}>
                        <Bold>Что то с деньгами</Bold>
                        <ArrowIcon/>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('SupportCategory')}>
                    <View style={styles.item}>
                        <Bold>Хочу пожаловаться</Bold>
                        <ArrowIcon/>
                    </View>
                </TouchableWithoutFeedback>
            </View>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('SupportChat')}>
                <View style={styles.chatIcon}>
                    <ChatIcon/>
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
};

export default SupportScreen;
