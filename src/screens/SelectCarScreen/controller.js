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
        currentLocation,
        SetCurrentLocationDetails,
    }) => {

    const [visiblePlanModal, setVisiblePlanModal] = useState(false);
    const [visibleAdditionalModal, setVisibleAdditionalModal] = useState(false);
    const [visibleDeliveryModal, setVisibleDeliveryModal] = useState(false);
    const [rate, setRate] = useState({0: true});
    const [rateInfo, setRateInfo] = useState({0: true});

    useEffect(() => {
        const {coords: {latitude, longitude}} = currentLocation;
        Geocode.setApiKey(API_KEY);
        Geocode.setLanguage('uz');
        Geocode.fromLatLng(latitude, longitude)
            .then(response => {
                SetCurrentLocationDetails(response)
            });
    }, []);

    useEffect(() => {
        if (destination) {
            GetRates(destination.details)
        }
    }, [destination]);


    return (
        <SelectCarScreenView
            rates={rates}
            duration={destination && destination.details ? Math.floor(destination.details.duration) : 0}
            currentLocation={currentLocation.details && (
                currentLocation.details.results[0].address_components[1].long_name + ', ' +
                currentLocation.details.results[0].address_components[0].long_name
            )}
            destination={destination && (
                destination.data.terms[0].value + ', ' +
                destination.data.terms[1].value
            )}
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
};

export default SelectCarScreenController;
