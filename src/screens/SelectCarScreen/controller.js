import React, {useEffect, useState} from 'react';
import SelectCarScreenView from "./view";
import Geocode from "react-geocode";
import API_KEY from "../../const/apiKey";

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
        CancelOrder,
        order
    }) => {
        const [visiblePlanModal, setVisiblePlanModal] = useState(false);
        const [visibleAdditionalModal, setVisibleAdditionalModal] = useState(false);
        const [visibleDeliveryModal, setVisibleDeliveryModal] = useState(false);
        const [rate, setRate] = useState({});
        const [rateInfo, setRateInfo] = useState({0: true});
        const [destinationText, setDestinationText] = useState('');
        const [currentLocationText, setCurrentLocationText] = useState('');
        const [comment, setComment] = useState(null);
        const [isLoading, setIsLoading] = useState(false);
        const [airCondition, setAirCondition] = useState(false);

        const {latitude, longitude} = marker;

        useEffect(() => {
            Geocode.setApiKey(API_KEY);
            Geocode.setLanguage('uz');
            Geocode.fromLatLng(latitude, longitude)
                .then(response => {
                    SetCurrentLocationDetails(response);
                    setCurrentLocationText(
                        response.results[0].address_components[1].long_name + ', ' +
                        response.results[0].address_components[0].long_name
                    )
                });
        }, []);

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
                GetRates({distance: 1}, (data) => {
                    setRate(data.data[0])
                });
            }
        }, [destination]);

        const findCar = () => {
            setIsLoading(true);
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
                distance: destination.details ? `${Math.ceil(destination.details.distance * 10) / 10}` : '1',
                rate_id: rate.id,
                comment
            }, {
                socketCb: (data) => {
                    ChangeOrderStatus(data);
                    setIsLoading(false)
                },
                actionCb: () => navigation.navigate('Trip')
            })
        };

        const cancelOrder = () => {
            CancelOrder({
                orderId: order.id
            }, () => {
                navigation.goBack();
            })
        };

        return (
            <SelectCarScreenView
                isLoading={isLoading}
                rates={rates}
                duration={destination.data && destination.details ? Math.floor(destination.details.duration) : 0}
                findCar={findCar}
                currentLocation={currentLocationText}
                destination={destinationText || 'Не указано'}
                paymentMethod={paymentMethod}
                cancelOrder={cancelOrder}
                setters={{
                    setVisiblePlanModal,
                    setVisibleAdditionalModal,
                    setVisibleDeliveryModal,
                    setRate,
                    setRateInfo,
                    setComment,
                    setAirCondition
                }}
                values={{
                    visiblePlanModal,
                    visibleAdditionalModal,
                    visibleDeliveryModal,
                    rate,
                    rateInfo,
                    comment,
                    airCondition,
                }}
            />
        );
    }
;

export default SelectCarScreenController;
