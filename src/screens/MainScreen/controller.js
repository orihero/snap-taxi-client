import React, {useEffect, useState} from 'react';
import {PermissionsAndroid, AppState, Platform} from "react-native";
import {useRoute} from '@react-navigation/native';
import NetInfo from "@react-native-community/netinfo";
import firebase from "@react-native-firebase/messaging";
import Geolocation from "@react-native-community/geolocation";
import {debounce} from "lodash";
import MainScreenView from "./view";
import api from "../../services/api";

const MainScreenController = (
    {
        navigation,
        order,
        drivers,
        GetOrderInfo,
        ChangeOrderStatus,
        GetDriversAround,
        SetDestination,
        SetCurrentLocationDetails,
        GetCurrentLocation,
        SendPush,
        marker,
        GetNotifications,
    }) => {


        const [mapRef, setMapRef] = useState();
        const [currentLocationText, setCurrentLocationText] = useState('Куда мы едем?');

        const {latitude, longitude} = marker;

        const route = useRoute();

        useEffect(() => {
            AppState.addEventListener("change", state => {
                if (state === 'active') {
                    establishProcess();
                } else if (state === 'background') {

                }
            });

            if (Platform.OS === 'android') {
                // noinspection JSIgnoredPromiseFromCall
                requestPermission();
            }

            NetInfo.addEventListener((state) => {
                establishProcess();
            });

            GetNotifications();

            const messaging = firebase();

            messaging.setBackgroundMessageHandler(async (msg) => {
                notificationHandler(msg.notification)

            });
            messaging.onMessage((msg) => {
                notificationHandler(msg.notification)
            });

            AppState.removeAllListeners('change');

            navigation.addListener('focus', () => {
                SetDestination();
                GetDriversAround({latitude, longitude});
                if (mapRef) {
                    getCurrentLocation()
                }
            });
        }, []);

        const notificationHandler = (notification: any) => {

            GetNotifications();

            // if (notification.title === 'Сообщение') {
            //     SendPush({
            //         id: Math.random(),
            //         message: notification.body,
            //     });
            // }
        }


        const establishProcess = () => {
            if (order.id && order.status !== 'canceled') {
                GetOrderInfo(order.id, () => {
                    return {
                        cb: (data) => {
                            ChangeOrderStatus(data);
                        },
                        actionCb: () => {
                            if (route.name !== 'Home') {
                                navigation.reset({
                                    index: 0,
                                    routes: [{name: 'Trip'}]
                                })
                            }
                        },
                        socketCb: (data) => {
                            ChangeOrderStatus(data)
                        }
                    }
                })
            }
        };

        useEffect(() => {
            if (mapRef) {
                getCurrentLocation()
            }
        }, [mapRef]);

        useEffect(() => debounce(geocode, 1000)(), [latitude, longitude]);

        const geocode = () => {
            GetDriversAround({latitude, longitude});
            api.request
                .get(`https://geocode-maps.yandex.ru/1.x?apikey=aeed4c01-79da-458a-8b02-93e6b30ed33c&geocode=${longitude},${latitude}&format=json&ll=69.279737,41.311151&spn=0.3028106689453125,0.14159780811129963`)
                .then(res => {
                    SetCurrentLocationDetails(res.data.response);
                    setCurrentLocationText(
                        res.data.response.GeoObjectCollection.featureMember[0].GeoObject.name
                    );
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
                getCurrentLocation();
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
    }
;

export default MainScreenController;
