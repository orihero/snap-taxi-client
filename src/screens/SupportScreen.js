import React from 'react';
import {View, StyleSheet, ScrollView, TouchableWithoutFeedback} from 'react-native'
import TripItem from "../components/TripItem";
import {Bold, Light, Regular} from "../components/Layout/AppText";
import ArrowIcon from "../assets/images/ArrowIcon";
import Colors from "../assets/styles/Colors";

const SupportScreen = ({navigation}) => {
    return (
        <ScrollView style={styles.container}>
            <TripItem/>
            <View style={{marginHorizontal: 20}}>
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
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        zIndex: 2,
        marginTop: -44
    },
    item: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderColor: Colors.border
    }
});

export default SupportScreen;
