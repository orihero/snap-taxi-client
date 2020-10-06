import React, {useEffect, useState} from 'react';
import {Alert} from 'react-native'
import SelectCarScreenView from "./view";
import Geocode from "react-geocode";
import API_KEY from "../../const/apiKey";
import Geolocation from "@react-native-community/geolocation";

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
        paymentMethod,
        GetCurrentLocation,
        CancelOrder,
        order,
        GetCarsAround,
        drivers,
        language
    }) => {
        const [timeoutId, setTimeoutId] = useState(null);
        const [visiblePlanModal, setVisiblePlanModal] = useState(false);
        const [visibleDestinationModal, setVisibleDestinationModal] = useState(false);
        const [visibleAdditionalModal, setVisibleAdditionalModal] = useState(false);
        const [visibleDeliveryModal, setVisibleDeliveryModal] = useState(false);
        const [rate, setRate] = useState({});
        const [rateInfo, setRateInfo] = useState({0: true});
        const [destinationText, setDestinationText] = useState('');
        const [currentLocationText, setCurrentLocationText] = useState('');
        const [comment, setComment] = useState(null);
        const [isLoading, setIsLoading] = useState(false);
        const [isOrderSuccess, setIsOrderSuccess] = useState(false);
        const [airCondition, setAirCondition] = useState(false);
        const [mapRef, setMapRef] = useState();

        const {latitude, longitude} = marker;

        useEffect(() => {
            geocode()
        }, [marker]);


        useEffect(() => {
            if (destination.data && destination.details) {
                GetRates(destination.details, (data) => {
                    setRate(data.data[0])
                });
                setDestinationText(
                    destination.data.terms[0].value + ', ' +
                    destination.data.terms[1].value
                )
            } else {
                GetRates({distance: 0}, (data) => {
                    setRate(data.data[0])
                });
            }
        }, [destination]);

        const geocode = () => {
            Geocode.setApiKey(API_KEY);
            Geocode.setLanguage(language);
            GetCarsAround({latitude, longitude});
            Geocode.fromLatLng(latitude, longitude)
                .then(response => {
                    SetCurrentLocationDetails(response);
                    setCurrentLocationText(
                        response.results[0].address_components[1].long_name + ', ' +
                        response.results[0].address_components[0].long_name
                    )
                });
        };

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
                    ChangeOrderStatus(data);
                    setIsLoading(false);
                    setIsOrderSuccess(false);
                    clearInterval(timeoutId);
                },
                actionCb: () => navigation.navigate('Trip'),
                successCb: (data) => {
                    setIsOrderSuccess(true);
                    // setTimeoutId(() => setTimeout(() => {
                    //         absoluteCancel(data.data.id);
                    //     }, 120000)
                    // );
                }
            })
        };

        const absoluteCancel = (id) => {
            CancelOrder({
                orderId: id
            }, () => {
                clearInterval(timeoutId);
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
                        setIsLoading(false);
                        setIsOrderSuccess(false);
                        clearInterval(timeoutId);
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
                duration={destination.data && destination.details ? Math.floor(destination.details.duration) : 0}
                findCar={findCar}
                currentLocation={currentLocationText}
                destination={destinationText || 'Куда едем ?'}
                paymentMethod={paymentMethod}
                cancelOrder={cancelOrder}
                getCurrentLocation={getCurrentLocation}
                drivers={drivers}
                setters={{
                    setVisiblePlanModal,
                    setVisibleAdditionalModal,
                    setVisibleDeliveryModal,
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
                    visibleDeliveryModal,
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
