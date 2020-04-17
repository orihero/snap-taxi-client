import React from 'react';
import {View, Text, StyleSheet} from "react-native"
import CustomModal from "./CustomModal";
import CarModalIcon from "../assets/images/CarModalIcon";
import Button from "./Button";

const PlanItemInfoModal = ({visible, closeModal}) => {
    return (
        <CustomModal visible={visible} closeModal={closeModal}>
            <CarModalIcon style={{marginTop: 25.7, alignSelf: 'center', marginBottom: 21.7}}/>
            <Text style={styles.heading}>Информация о тарифе</Text>
            <View style={styles.textContainer}>
                <Text style={{fontSize: 15, color: '#AAAEB7'}}>Автомобиль</Text>
                <Text style={{fontSize: 15, color: '#232323'}}>Белая Лассети</Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={{fontSize: 15, color: '#AAAEB7'}}>Тариф</Text>
                <Text style={{fontSize: 15, color: '#232323'}}>Комфорт</Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={{fontSize: 15, color: '#AAAEB7'}}>Стоимость 1 км</Text>
                <Text style={{fontSize: 15, color: '#232323'}}>5000 сум</Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={{fontSize: 15, color: '#AAAEB7'}}>Ожидание 1 мин</Text>
                <Text style={{fontSize: 15, color: '#232323'}}>500 сум</Text>
            </View>
            <Button
                onPress={closeModal}
                title={'Понятно'}
                style={{marginTop: 'auto', marginBottom: 26,}}
            />
        </CustomModal>
    );
};

const styles = StyleSheet.create({
    heading: {
        fontSize: 22,
        fontWeight: 'bold',
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