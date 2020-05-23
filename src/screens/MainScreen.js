import React, {useState, useEffect} from 'react';
import {View, Alert, PermissionsAndroid, Platform, TouchableWithoutFeedback, StyleSheet, Dimensions} from 'react-native'
import SystemSetting from 'react-native-system-setting'

import MapScreen from "./MapScreen";
import Search from "../components/Search/Search";
import Header from "../components/Header/Header";
import Button from "../components/Button";
import CursorIcon from "../assets/images/CursorIcon";
import Colors from "../assets/styles/Colors";

const MainScreen = ({navigation}) => {
    const [isLocationEnabled, setIsLocationEnabled] = useState(true);

    const requestPermission = async () => {
        let hasPermission;
        if (Platform.OS === 'android') {
            hasPermission = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
            if (!hasPermission) {
                const status = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);

            }
        }
    };
    useEffect(() => {
        SystemSetting.isLocationEnabled().then((enable) => {
            setIsLocationEnabled(enable)
        });

        requestPermission().then(r => console.log('success')).catch(e => console.warn(e))
    }, []);

    useEffect(() => {
        if (!isLocationEnabled) {
            Alert.alert('Ошибка', 'Чтобы продолжить, включите на устройстве геолокацию Google.', [
                {
                    text: 'OK', onPress: () => SystemSetting.switchLocation(() => {
                        console.log('good job')
                    })
                }
            ])
        }
    }, [isLocationEnabled]);

    const [isSearchActive, setSearchActive] = useState(false);
    return (
        <View style={{flex: 1}}>
            <Header navigation={navigation}/>
            <MapScreen/>
            <Search navigation={navigation} setSearchActive={setSearchActive} isSearchActive={isSearchActive}/>
            {!isSearchActive && <View style={{marginTop: 'auto', marginHorizontal: 10}}>
                <TouchableWithoutFeedback>
                    <View style={styles.circleIcon}><CursorIcon/></View>
                </TouchableWithoutFeedback>
                <Button title={'Далее'} onPress={() => navigation.navigate('SelectCar')}
                        containerStyle={{marginBottom: 10}}/>
            </View>}
        </View>
    );
};

const styles = StyleSheet.create({
    circleIcon: {
        position: 'absolute',
        right: 0,
        top: -55,
        elevation: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 2.7,
        width: 45,
        height: 45,
        borderRadius: 100,
        backgroundColor: Colors.background,
        borderWidth: 2,
        borderColor: '#fff',
    },
});


export default MainScreen
