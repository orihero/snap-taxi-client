import React, {useEffect, useState} from 'react';
import SelectCarScreenView from "./view";
import Geocode from "react-geocode";
import API_KEY from "../../const/apiKey";
import {formData} from "../../store/utils";

const SelectCarScreenController = (
    {
        BookCar,
        GetRates,
        rates,
        destination,
        currentLocation,
        SetCurrentLocationDetails,
    }) => {

        const [visiblePlanModal, setVisiblePlanModal] = useState(false);
        const [visibleAdditionalModal, setVisibleAdditionalModal] = useState(false);
        const [visibleDeliveryModal, setVisibleDeliveryModal] = useState(false);
        const [rate, setRate] = useState({0: true});
        const [rateInfo, setRateInfo] = useState({0: true});
        const [destinationText, setDestinationText] = useState('');
        const [currentLocationText, setCurrentLocationText] = useState('');

        useEffect(() => {
            const {coords: {latitude, longitude}} = currentLocation;
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
            if (destination) {
                GetRates(destination.details);
                setDestinationText(
                    destination.data.terms[0].value + ', ' +
                    destination.data.terms[1].value
                )
            }
        }, [destination]);

        const findCar = () => {
            BookCar({
                routes: [
                    {
                        address: currentLocationText,
                        lat: `${currentLocation.coords.latitude}`,
                        lng: `${currentLocation.coords.longitude}`,
                        order: 0,
                    },
                    {
                        address: destinationText,
                        lat: `${destination.coords.latitude}`,
                        lng: `${destination.coords.longitude}`,
                        order: 1,
                    }
                ],
                option_ids: [],
                distance: '12',
                rate_id: 1
            }, () => {
                console.log('success')
            })
        };


        return (
            <SelectCarScreenView
                rates={rates}
                duration={destination && destination.details ? Math.floor(destination.details.duration) : 0}
                findCar={findCar}
                currentLocation={currentLocationText}
                destination={destinationText}
                setters={{
                    setVisiblePlanModal,
                    setVisibleAdditionalModal,
                    setVisibleDeliveryModal,
                    setRate,
                    setRateInfo,
                }}
                values={{
                    visiblePlanModal,
                    visibleAdditionalModal,
                    visibleDeliveryModal,
                    rate,
                    rateInfo,
                }}
            />
        );
    }
;

export default SelectCarScreenController;
