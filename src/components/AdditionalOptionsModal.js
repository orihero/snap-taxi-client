import React, {useState} from 'react';
import {View, Text, StyleSheet, Switch} from "react-native"
import CustomModal from "./CustomModal";
import Button from "./Button";
import AdditionalOptionsModalIcon from "../assets/images/AdditionalOptionsModalIcon";
import {DestContent} from "./SelectedDestination";
import AirConditionIcon from "../assets/images/AirConditionIcon";
import SmokeIcon from "../assets/images/SmokeIcon";
import Colors from "../assets/styles/Colors";

const AdditionalOptionsModal = ({visible, closeModal}) => {
    const [airCondition, setAirCondition] = useState(false);
    const [smoke, setSmoke] = useState(false);
    return (
        <CustomModal visible={visible} closeModal={closeModal}>
            <AdditionalOptionsModalIcon style={{marginTop: 25.7, alignSelf: 'center', marginBottom: 21.7}}/>
            <Text style={styles.heading}>Информация о тарифе</Text>
            <DestContent containerStyle={{marginHorizontal: 10}} textStyle={{fontSize: 15}}/>
            <View style={[styles.option, {borderTopWidth: 1}]}>
                <AirConditionIcon style={{marginRight: 11.4}} color={airCondition ? Colors.blue : '#000'}/>
                <Text>Кондиционер</Text>
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
                <Text>Авто для курящих</Text>
                <Switch
                    trackColor={{false: '#ECECEC', true: '#ECECEC'}}
                    thumbColor={smoke ? Colors.blue : "#ECECEC"}
                    style={{marginLeft: 'auto'}}
                    value={smoke}
                    onValueChange={() => setSmoke(!smoke)}
                />
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
        marginBottom: 21
    },
    textContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 6,
        paddingBottom: 12,
        borderBottomColor: '#EAECF1',
        borderBottomWidth: 1,
        marginBottom: 10
    },
    option: {
        flexDirection: 'row',
        marginHorizontal: 6,
        alignItems: 'center',
        paddingVertical: 13,
        borderColor: '#EAECF1',
        borderBottomWidth: 1
    }
});

export default AdditionalOptionsModal;