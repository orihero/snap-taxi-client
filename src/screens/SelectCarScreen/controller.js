import React, {useEffect, useState, useCallback} from 'react';
import {Alert} from 'react-native'
import SelectCarScreenView from "./view";
import Geolocation from "@react-native-community/geolocation";
import api from "../../services/api";
import BackgroundTimer from 'react-native-background-timer';

const SelectCarScreenController = (
    {
        BookCar,
        GetRates,
        rates,
        destination,
        marker,
        SetCurrentLocationDetails,
        ChangeOrderStatus,
        navigation,
        GetCurrentLocation,
        CancelOrder,
        order,
        GetCarsAround,
        drivers,
    }) => {
        const [zoom, setZoom] = useState({
            latitudeDelta,
            longitudeDelta
        })
        const [timeoutId, setTimeoutId] = useState(null);
        const [visiblePlanModal, setVisiblePlanModal] = useState(false);
        const [visibleDestinationModal, setVisibleDestinationModal] = useState(false);
        const [visibleAdditionalModal, setVisibleAdditionalModal] = useState(false);
        const [rate, setRate] = useState({});
        const [rateInfo, setRateInfo] = useState({0: true});
        const [destinationText, setDestinationText] = useState('');
        const [currentLocationText, setCurrentLocationText] = useState('');
        const [comment, setComment] = useState(null);
        const [isLoading, setIsLoading] = useState(false);
        const [isOrderSuccess, setIsOrderSuccess] = useState(false);
        const [airCondition, setAirCondition] = useState(false);
        const [mapRef, setMapRef] = useState();

        const {latitude, longitude, latitudeDelta, longitudeDelta} = marker;

        useEffect(() => {
            setZoom({
                latitudeDelta,
                longitudeDelta
            })
        }, [latitudeDelta, longitudeDelta])


        useEffect(() => {
            geocode()
        }, [marker]);


        useEffect(() => {
            if (destination.data && destination.details) {
                GetRates(destination.details, (data) => {
                    setRate(data.data[0])
                });
                setDestinationText(destination.data.name);
            } else {
                GetRates({distance: 0}, (data) => {
                    setRate(data.data[0])
                });
            }
        }, [destination]);

        const geocode = useCallback(() => {
            GetCarsAround({latitude, longitude});
            api.request
                .get(`https://geocode-maps.yandex.ru/1.x?apikey=aeed4c01-79da-458a-8b02-93e6b30ed33c&geocode=${longitude},${latitude}&format=json`)
                .then(res => {
                    const obj = res.data.response.GeoObjectCollection.featureMember[0].GeoObject;
                    SetCurrentLocationDetails(obj);
                    setCurrentLocationText(obj.name);
                    // setOriginResult(res.data.response.GeoObjectCollection.featureMember);
                })
                .catch(err => {
                    console.log(err);
                })
        }, [latitude, longitude]);

        const findCar = () => {
            const routes = [];
            const option_ids = [];
            if (airCondition) {
                option_ids.push(1)
            }

            if (destination.data) {
                routes.push({
                        address: currentLocationText,
                        lat: `${latitude}`,
                        lng: `${longitude}`,
                        order: 0,
                    },
                    {
                        address: destinationText,
                        lat: `${destination.coords.latitude}`,
                        lng: `${destination.coords.longitude}`,
                        order: 1,
                    })
            } else {
                routes.push({
                    address: currentLocationText,
                    lat: `${latitude}`,
                    lng: `${longitude}`,
                    order: 0,
                })
            }

            BookCar({
                routes,
                option_ids,
                distance: destination.details ? `${Math.ceil(destination.details.distance * 10) / 10}` : '0',
                rate_id: rate.id,
                comment
            }, {
                socketCb: (data) => {
                    // BackgroundTimer.clearTimeout(timeoutId);
                    ChangeOrderStatus(data);
                    setIsLoading(false);
                    setIsOrderSuccess(false);
                },
                actionCb: () => {
                    // BackgroundTimer.clearTimeout(timeoutId);
                    navigation.reset({
                        index: 0,
                        routes: [{name: 'Trip'}]
                    })
                },
                successCb: (data) => {
                    // const tID = BackgroundTimer.setTimeout(absoluteCancel, 120000)
                    // setTimeoutId(tID);
                    setTimeout(() => {
                        mapRef.animateToRegion({
                            latitude,
                            longitude,
                            latitudeDelta: zoom.latitudeDelta * 10,
                            longitudeDelta: zoom.longitudeDelta * 10,
                        }, 35000)
                    }, 2000);
                    setIsOrderSuccess(true);
                }
            })
        };

        const absoluteCancel = () => {
            Alert.alert(
                'Внимание',
                'Уважаемый клиент в ближайшие время нет машин попробуйте по позже'
            )
            CancelOrder({
                orderId: order.id,
            }, () => {
                // clearInterval(timeoutId);
                setIsLoading(false);
                setIsOrderSuccess(false);
            })
        };

        const cancelOrder = () => {
            Alert.alert(
                'Отмена заказа',
                'Вы действительно хотите отменить заказ ?',
                [{
                    text: 'Да',
                    onPress: () => CancelOrder({
                        orderId: order.id
                    }, () => {
                        BackgroundTimer.clearTimeout(timeoutId);
                        setIsLoading(false);
                        setIsOrderSuccess(false);
                    })
                }, {
                    text: 'Нет',
                }]
            )
        };

        const getCurrentLocation = () => {
            Geolocation.getCurrentPosition((data) => {
                GetCurrentLocation(data.coords);
            }, error => {
                getCurrentLocation()
            })
        };

        return (
            <SelectCarScreenView
                isLoading={isLoading}
                rates={rates}
                findCar={findCar}
                currentLocation={currentLocationText}
                destination={destinationText}
                cancelOrder={cancelOrder}
                getCurrentLocation={getCurrentLocation}
                drivers={drivers}
                setters={{
                    setVisiblePlanModal,
                    setVisibleAdditionalModal,
                    setRate,
                    setRateInfo,
                    setComment,
                    setAirCondition,
                    setMapRef,
                    setVisibleDestinationModal
                }}
                values={{
                    mapRef,
                    visiblePlanModal,
                    visibleAdditionalModal,
                    rate,
                    rateInfo,
                    comment,
                    airCondition,
                    isOrderSuccess,
                    visibleDestinationModal
                }}
            />
        );
    }
;

export default SelectCarScreenController;
