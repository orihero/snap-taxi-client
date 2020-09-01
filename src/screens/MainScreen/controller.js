import React, {useEffect, useState} from 'react';
import {Alert, PermissionsAndroid} from "react-native";

import MainScreenView from "./view";
import SystemSetting from "react-native-system-setting";

const MainScreenController = ({navigation, SetDestination}) => {

    const [mapRef, setMapRef] = useState();

    useEffect(() => {
        navigation.addListener('focus', () => {
            SetDestination();
        });

        // noinspection JSIgnoredPromiseFromCall
        requestPermission();


    }, []);

    const checkGPSStatus = () => {
        SystemSetting
            .isLocationEnabled()
            .then((enable) => {
                if (!enable) {
                    errorHandler()
                }
            });
    };


    const requestPermission = async () => {
        let hasPermission;
        if (Platform.OS === 'android') {
            hasPermission = await PermissionsAndroid.check(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
            );
            if (!hasPermission) {
                const status = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
                );
            }
        }
    };

    const errorHandler = () => {
        Alert.alert('Ошибка', 'Чтобы продолжить, включите на устройстве геолокацию Google.', [
            {
                text: 'OK', onPress: () => SystemSetting
                    .switchLocation(() => {
                    })
            }
        ])
    };


    return (
        <MainScreenView
            navigation={navigation}
            setMapRef={setMapRef}
            mapRef={mapRef}
        />
    );
};

export default MainScreenController;
