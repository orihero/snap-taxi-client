import React from 'react';
import {View, StyleSheet} from "react-native"
import CustomModal from "./CustomModal";
import CarModalIcon from "../assets/images/CarModalIcon";
import Button from "./Button";
import {Bold, Regular} from "./Layout/AppText";

const Description = ({leftText, rightText}) => (
    <View style={styles.textContainer}>
        <Regular style={{fontSize: 15, color: '#AAAEB7'}}>{leftText}</Regular>
        <Bold style={{fontSize: 15}}>{rightText}</Bold>
    </View>
);

const PlanItemInfoModal = ({visible, closeModal}) => {
    return (
        <CustomModal visible={visible} closeModal={closeModal}>
            <CarModalIcon style={{marginTop: 25.7, alignSelf: 'center', marginBottom: 21.7}}/>
            <Bold style={styles.heading}>Информация о тарифе</Bold>
            <Description leftText={'Автомобиль'} rightText={'Белая Лассети'}/>
            <Description leftText={'Тариф'} rightText={'Комфорт'}/>
            <Description leftText={'Стоимость 1 км'} rightText={'5000 сум'}/>
            <Description leftText={'Ожидание 1 мин'} rightText={'500 сум'}/>
            <Button
                onPress={closeModal}
                title={'Понятно'}
                style={{marginBottom: 26,}}
            />
        </CustomModal>
    );
};

const styles = StyleSheet.create({
    heading: {
        fontSize: 22,
        alignSelf: 'center',
        marginBottom: 48
    },
    textContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 6,
        paddingBottom: 12,
        borderBottomColor: '#EAECF1',
        borderBottomWidth: 1,
        marginBottom: 10
    }
});

export default PlanItemInfoModal;