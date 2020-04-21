import React, {useState} from 'react';
import {View, Text, StyleSheet, Switch} from "react-native"
import ProfileSettingsIcon from "../assets/images/ProfileSettingsIcon";
import Colors from "../assets/styles/Colors";
import TrafficJamsIcon from "../assets/images/TrafficJamsIcon";
import AcceptCallIcon from "../assets/images/AcceptCallIcon";
import SaleIcon from "../assets/images/SaleIcon";
import ArrowIcon from "../assets/images/ArrowIcon";
import Button from "../components/Button";
import SettingsArrowIcon from "../assets/images/SettingsArrowIcon";

const SettingsScreen = () => {
    const [showTrafficJams, setShowTrafficJams] = useState(false);
    const [acceptCall, setAcceptCall] = useState(false);
    const [sale, setSale] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <ProfileSettingsIcon style={{marginRight: 23.5}}/>
                <Text style={styles.text}>Алексей</Text>
            </View>
            <View style={styles.option}>
                <TrafficJamsIcon style={{marginRight: 20}} color={showTrafficJams ? Colors.blue : '#000'}/>
                <Text style={{color: showTrafficJams ? Colors.blue : '#000', fontWeight: 'bold', fontSize: 15}}>Пробки на карте</Text>
                <Switch
                    trackColor={{false: '#ECECEC', true: '#ECECEC'}}
                    thumbColor={showTrafficJams ? Colors.blue : "#ECECEC"}
                    style={{marginLeft: 'auto'}}
                    value={showTrafficJams}
                    onValueChange={() => setShowTrafficJams(!showTrafficJams)}
                />
            </View>
            <View style={[styles.option, {justifyContent: 'space-between'}]}>
                <Text style={{fontWeight: 'bold', fontSize: 15}}>Язык приложения</Text>
                <SettingsArrowIcon/>
            </View>
            <View style={styles.option}>
                <AcceptCallIcon style={{marginRight: 20}} color={acceptCall ? Colors.blue : '#000'}/>
                <Text style={{color: acceptCall ? Colors.blue : '#000', fontWeight: 'bold', fontSize: 15}}>Не звонить</Text>
                <Switch
                    trackColor={{false: '#ECECEC', true: '#ECECEC'}}
                    thumbColor={acceptCall ? Colors.blue : "#ECECEC"}
                    style={{marginLeft: 'auto'}}
                    value={acceptCall}
                    onValueChange={() => setAcceptCall(!acceptCall)}
                />
            </View>
            <View style={styles.option}>
                <SaleIcon style={{marginRight: 20}} color={sale ? Colors.blue : '#000'}/>
                <Text
                    style={{color: sale ? Colors.blue : '#000', fontWeight: 'bold', width: '58%', fontSize: 15}}
                >
                    Не предлагать сообщения
                    о снижении цен</Text>
                <Switch
                    trackColor={{false: '#ECECEC', true: '#ECECEC'}}
                    thumbColor={sale ? Colors.blue : "#ECECEC"}
                    style={{marginLeft: 'auto'}}
                    value={sale}
                    onValueChange={() => setSale(!sale)}
                />
            </View>
            <Button
                title={'Очистить  кэш карт'}
                style={{marginTop: 'auto', marginBottom: 50}}
                texStyle={{fontWeight: '600'}}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        flex: 1
    },
    row: {
        padding: 12.5,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        elevation: 2,
        marginBottom: 19,
        backgroundColor: Colors.background,
        borderWidth: 2,
        borderColor: '#fff'
    },
    text: {
        fontSize: 16,
        color: '#858585'
    },
    option: {
        flexDirection: 'row',
        marginHorizontal: 6,
        alignItems: 'center',
        paddingVertical: 14,
        borderColor: '#EAECF1',
        borderBottomWidth: 1
    }
});

export default SettingsScreen;