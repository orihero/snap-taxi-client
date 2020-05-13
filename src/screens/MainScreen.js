import React, {useState, useEffect} from 'react';
import {View, Alert, PermissionsAndroid, Platform} from 'react-native'
import SystemSetting from 'react-native-system-setting'

import MapScreen from "./MapScreen";
import Directions from "../components/Directions";
import Search from "../components/Search";
import Header from "../components/Header";


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

        requestPermission().then()
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
            <Search navigation={navigation} setSearchActive={setSearchActive}/>
            {!isSearchActive && <Directions navigation={navigation}/>}
        </View>
    );
};


export default MainScreen
