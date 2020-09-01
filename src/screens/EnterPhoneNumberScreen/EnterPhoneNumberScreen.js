import React, {useState} from 'react';
import {View, TextInput, TouchableWithoutFeedback, PermissionsAndroid} from 'react-native'
// import ContactPickerBridge from 'react-native-contacts-picker';

import styles from "./styles";
import PhoneIcon from "../../assets/images/PhoneIcon";
import {Regular, SemiBold} from "../../components/Layout/AppText";
import ArrowIcon from "../../assets/images/ArrowIcon";
import {TextInputMask} from "react-native-masked-text";
import Button from "../../components/Button";

const EnterPhoneNumberScreen = ({navigation}) => {
    const [contact, setContact] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState('');

    // const openContactPicker = () => {
    //     ContactPickerBridge.openContactPicker((result) => {
    //         setContact(result.data)
    //     });
    // };

    // const checkContactPermissions = async () => {
    //     const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS);
    //     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    //         openContactPicker()
    //     }
    // };

    return (
        <View style={styles.container}>
            <View style={styles.phone}>
                <PhoneIcon style={styles.phoneIcon}/>
                <Regular style={{color: '#232323', fontSize: 16}}>+998</Regular>
                <TextInputMask
                    keyboardType={'number-pad'}
                    placeholder={'Введите Ваш номер'}
                    style={{color: '#232323', fontSize: 16, flex: 1}}
                    type={'custom'}
                    options={{
                        mask: '99 999 99 99'
                    }}
                    value={phoneNumber}
                    onChangeText={text => setPhoneNumber(text)}
                />
            </View>

            {!!phoneNumber.length &&
            <>
                <View style={[styles.phone, {paddingHorizontal: 15, marginBottom: 5, marginTop: -10}]}>
                    <TextInput
                        style={{color: '#232323', fontSize: 16, flex: 1}}
                        placeholder={'Имя'}
                    />
                </View>
                <Regular style={{fontSize: 12}}>Так человека будет проще найти в списке заказов</Regular>
                <Button title={"Выбрать"} containerStyle={{marginTop: 20}} onPress={navigation.goBack}/>
            </>
            }
            {phoneNumber.length === 0 && <TouchableWithoutFeedback onPress={()=>null}>
                <View style={styles.contact}>
                    <SemiBold style={{fontSize: 16}}>Выбрать из контактов</SemiBold>
                    <ArrowIcon/>
                </View>
            </TouchableWithoutFeedback>
            }
        </View>
    );
};


export default EnterPhoneNumberScreen;
