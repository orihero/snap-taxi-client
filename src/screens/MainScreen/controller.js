import React, {useEffect, useState} from 'react';
import {PermissionsAndroid, AppState} from "react-native";
import Geocode from "react-geocode";
import SmsRetriever from 'react-native-sms-retriever';

const PushNotification = require("react-native-push-notification");

import MainScreenView from "./view";
import API_KEY from "../../const/apiKey";
import Geolocation from "@react-native-community/geolocation";
import api from "../../services/api";

const MainScreenController = ({navigation, order, language, drivers, GetOrderInfo, ChangeOrderStatus, GetDriversAround, SetDestination, SetCurrentLocationDetails, GetCurrentLocation, SendPush, marker}) => {

    const [mapRef, setMapRef] = useState();
    const [currentLocationText, setCurrentLocationText] = useState('Куда мы едем?');

    const {latitude, longitude} = marker;

    useEffect(() => {
        if (mapRef) {
            getCurrentLocation()
        }
    }, [mapRef]);


    useEffect(() => {
        navigation.addListener('focus', () => {
            SetDestination();
            GetDriversAround({latitude, longitude});
            if (mapRef) {
                getCurrentLocation()
            }
        });

        if (order.id && order.status !== 'new') {
            GetOrderInfo(order.id, () => {
                return {
                    cb: (data) => {
                        ChangeOrderStatus(data);
                        navigation.navigate('Trip')
                    },
                    socketCb: (data) => {
                        ChangeOrderStatus(data)
                    }
                }
            })
        }
    }, []);

    useEffect(() => {
        AppState.addEventListener("change", state => {
            if (state === 'active') {
                if (order.id && order.status !== 'new') {
                    GetOrderInfo(order.id, () => {
                        return {
                            cb: (data) => {
                                ChangeOrderStatus(data);
                                navigation.reset({
                                    index: 0,
                                    routes: [{name: 'Trip'}]
                                })
                            },
                            socketCb: (data) => {
                                ChangeOrderStatus(data)
                            }
                        }
                    })
                }
            } else if (state === 'background') {

            }
        });
    }, []);

    useEffect(() => {
        GetDriversAround({latitude, longitude});
        geocode();
    }, [marker]);


    useEffect(() => {

        // noinspection JSIgnoredPromiseFromCall
        requestPermission();

        PushNotification.configure({
            onNotification: (notification: any) => {

                if (notification.title === "message") {
                    SendPush({
                        id: notification.data.notification_id,
                        message: notification.message,
                        type: 'driver',
                    })
                }
            },
            permissions: {
                alert: true,
                badge: true,
                sound: true,
            },
            popInitialNotification: true,
            requestPermissions: true,
        });
    }, []);


    const geocode = () => {
        // Geocode.setApiKey(API_KEY);
        // Geocode
        //     .fromLatLng(latitude, longitude)
        //     .then(response => {
        //         SetCurrentLocationDetails(response);
        //         setCurrentLocationText(
        //             response.results[0].address_components[1].long_name
        //         )
        //     });

        api.request
            .get(`https://geocode-maps.yandex.ru/1.x?apikey=aeed4c01-79da-458a-8b02-93e6b30ed33c&geocode=${longitude},${latitude}&format=json&ll=69.279737,41.311151&spn=0.3028106689453125,0.14159780811129963`)
            .then(res => {
                SetCurrentLocationDetails(res.data.response);
                setCurrentLocationText(
                    res.data.response.GeoObjectCollection.featureMember[0].GeoObject.name
                );
                // setOriginResult(res.data.response.GeoObjectCollection.featureMember);
            })
            .catch(err => {
                console.log(err);
            })
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

    const getCurrentLocation = () => {
        Geolocation.getCurrentPosition((data) => {
            GetCurrentLocation(data.coords);
            mapRef.animateToRegion({
                ...data.coords,
                latitudeDelta: 0.005,
                longitudeDelta: 0.001,
            });
        }, error => {
            getCurrentLocation()
        });
    };


    return (
        <MainScreenView
            drivers={drivers}
            currentLocationText={currentLocationText}
            navigation={navigation}
            setMapRef={setMapRef}
            mapRef={mapRef}
        />
    );
};

export default MainScreenController;
