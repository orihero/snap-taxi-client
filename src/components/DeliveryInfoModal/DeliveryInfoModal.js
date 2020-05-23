import React, {useState} from 'react';
import {
    View,
    Modal,
    TouchableWithoutFeedback,
    ScrollView,
    TextInput,
    Switch,
    KeyboardAvoidingView
} from 'react-native'

import styles from "./styles";
import BackButtonIcon from "../../assets/images/BackButtonIcon";
import DriverInfoBlockBottomFragment from "../../assets/images/DriverInfoBlockBottomFragment";
import Colors from "../../assets/styles/Colors";
import {Bold, Light} from "../Layout/AppText";
import ArrowIcon from "../../assets/images/ArrowIcon";
import LocationIcon from "../../assets/images/LocationIcon";
import AddIcon from "../../assets/images/AddIcon";
import BottomMenuCurve from "../../assets/images/BottomMenuCurve";
import Button from "../Button";
import {useNavigation} from '@react-navigation/native'
import Screen from "../../helpers/Dimensions";

const DeliveryInfoModal = ({visible, closeModal, openModal}) => {
    const navigation = useNavigation();
    const [from, setFrom] = useState(false);
    return (
        <Modal
            visible={visible}
            statusBarTranslucent={true}
            transparent={true}
            onRequestClose={closeModal}
            animationType={'slide'}
        >
            <KeyboardAvoidingView behavior={'padding'} style={styles.container}>
                <TouchableWithoutFeedback onPress={closeModal}>
                    <BackButtonIcon/>
                </TouchableWithoutFeedback>
                <ScrollView style={{marginTop: 21}}>
                    <View style={styles.topBlock}>
                        <View style={styles.topBlockContent}>
                            <Bold style={{fontSize: 17, marginBottom: 10}}>Откуда</Bold>
                            <TouchableWithoutFeedback onPress={() => {
                                closeModal()
                                navigation.navigate('EnterPhoneNumber', {openModal})
                            }}>
                                <View style={[styles.addressItem, {paddingLeft: 10}]}>
                                    <View>
                                        <Light style={{color: '#AAAEB7', lineHeight: 19}}>Кто отправляет</Light>
                                        <Bold style={{fontWeight: 'bold'}}>+99890 653 58 98</Bold>
                                    </View>
                                    <ArrowIcon style={{marginLeft: 'auto'}}/>
                                </View>
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback onPress={() => {
                                closeModal()
                                navigation.navigate('EnterPhoneNumber', {openModal})
                            }}>
                                <View style={styles.addressItem}>
                                    <LocationIcon style={{marginRight: 13.3}}/>
                                    <View>
                                        <Light style={{color: '#AAAEB7', lineHeight: 19}}>Едем из</Light>
                                        <Bold style={{fontWeight: 'bold'}}>Саларская набережаная 35</Bold>
                                    </View>
                                    <ArrowIcon style={{marginLeft: 'auto'}}/>
                                </View>
                            </TouchableWithoutFeedback>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}>
                                <Bold style={{paddingLeft: 10}}>До двери (этаж)</Bold>
                                <AddIcon/>
                            </View>
                            <View style={styles.textarea}>
                                <TextInput
                                    multiline={true}
                                    placeholder={'Добавить коментарий '}
                                />
                            </View>
                            <View>
                                <DriverInfoBlockBottomFragment
                                    style={{alignSelf: 'center', position: 'absolute', bottom: -30, zIndex: 999}}
                                />
                            </View>
                        </View>
                    </View>
                    <View>
                        <BottomMenuCurve width={Screen.width - 32}/>
                        <View style={styles.bottomBlock}>
                            <Bold style={{fontSize: 17, marginBottom: 10}}>Куда</Bold>
                            <View style={[styles.addressItem, {paddingLeft: 10}]}>
                                <View>
                                    <Light style={{color: '#AAAEB7', lineHeight: 19}}>Кто заберёт</Light>
                                    <Bold style={{fontWeight: 'bold'}}>+99890 653 58 98</Bold>
                                </View>
                                <ArrowIcon style={{marginLeft: 'auto'}}/>
                            </View>
                            <View style={styles.addressItem}>
                                <LocationIcon style={{marginRight: 13.3}}/>
                                <View>
                                    <Light style={{color: '#AAAEB7', lineHeight: 19}}>Едем из</Light>
                                    <Bold style={{fontWeight: 'bold'}}>Саларская набережаная 35</Bold>
                                </View>
                                <ArrowIcon style={{marginLeft: 'auto'}}/>
                            </View>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}>
                                <Bold style={{paddingLeft: 10}}>До двери (этаж)</Bold>
                                <AddIcon/>
                            </View>
                            <View style={[styles.textarea, {marginBottom: 20}]}>
                                <TextInput
                                    multiline={true}
                                    placeholder={'Добавить коментарий '}
                                />
                            </View>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 23}}>
                                <Bold>От двери до двери</Bold>
                                <Switch
                                    trackColor={{false: '#ECECEC', true: '#ECECEC'}}
                                    thumbColor={from ? Colors.blue : "#ECECEC"}
                                    style={{marginLeft: 'auto'}}
                                    value={from}
                                    onValueChange={() => setFrom(!from)}
                                />
                            </View>
                            <Button title={'Далее'} onPress={() => {
                                closeModal();
                                navigation.navigate('TaxiComing')
                            }}/>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </Modal>
    );
};


export default DeliveryInfoModal;
