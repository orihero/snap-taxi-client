import React, {useState} from 'react';
import {View, ScrollView, StyleSheet, Switch, TextInput, KeyboardAvoidingView} from "react-native"
import CustomModal from "./CustomModal";
import Button from "./Button";
import AdditionalOptionsModalIcon from "../assets/images/AdditionalOptionsModalIcon";
import {DestContent} from "./SelectedDestination";
import AirConditionIcon from "../assets/images/AirConditionIcon";
import SmokeIcon from "../assets/images/SmokeIcon";
import Colors from "../assets/styles/Colors";
import {Bold} from "./Layout/AppText";

const AdditionalOptionsModal = ({visible, closeModal}) => {
    const [airCondition, setAirCondition] = useState(false);
    const [smoke, setSmoke] = useState(false);
    return (
        <CustomModal visible={visible} closeModal={closeModal}>
            <ScrollView>
                <AdditionalOptionsModalIcon style={styles.icon}/>
                <Bold style={styles.heading}>Ваши пожелания</Bold>
                <DestContent containerStyle={{marginHorizontal: 10}} textStyle={{fontSize: 15}}/>
                <View style={[styles.option, {borderTopWidth: 1}]}>
                    <AirConditionIcon style={{marginRight: 11.4}} color={airCondition ? Colors.blue : '#000'}/>
                    <Bold style={{color: airCondition ? Colors.blue : '#000'}}>Кондиционер</Bold>
                    <Switch
                        trackColor={{false: '#ECECEC', true: '#ECECEC'}}
                        thumbColor={airCondition ? Colors.blue : "#ECECEC"}
                        style={{marginLeft: 'auto'}}
                        value={airCondition}
                        onValueChange={() => setAirCondition(!airCondition)}
                    />
                </View>
                <View style={styles.option}>
                    <SmokeIcon style={{marginRight: 20}} color={smoke ? Colors.blue : '#000'}/>
                    <Bold style={{color: smoke ? Colors.blue : '#000'}}>Авто для курящих</Bold>
                    <Switch
                        trackColor={{false: '#ECECEC', true: '#ECECEC'}}
                        thumbColor={smoke ? Colors.blue : "#ECECEC"}
                        style={{marginLeft: 'auto'}}
                        value={smoke}
                        onValueChange={() => setSmoke(!smoke)}
                    />
                </View>
                <KeyboardAvoidingView behavior={'padding'}>
                    <View style={styles.textarea}>
                        <TextInput
                            multiline={true}
                            placeholder={'Напишите ваш отзыв'}
                        />
                    </View>
                </KeyboardAvoidingView>
            </ScrollView>
            <Button
                onPress={closeModal}
                title={'Понятно'}
                style={{marginTop: 'auto'}}
            />
        </CustomModal>
    );
};

const styles = StyleSheet.create({
    icon: {
        alignSelf: 'center',
        marginBottom: 21.7
    },
    heading: {
        fontSize: 22,
        alignSelf: 'center',
        marginBottom: 11
    },
    option: {
        flexDirection: 'row',
        marginHorizontal: 6,
        alignItems: 'center',
        paddingVertical: 13,
        borderColor: '#EAECF1',
        borderBottomWidth: 1
    },
    textarea: {
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 10,
        elevation: 10,
        backgroundColor: Colors.background,
        height: 80,
        marginTop: 13,
        marginBottom: 40
    }
});

export default AdditionalOptionsModal;