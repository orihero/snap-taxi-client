import React, {useEffect, useState} from 'react';
import SelectCarScreenView from "./view";

const SelectCarScreenController = ({BookCar, GetRates, rates, destination}) => {

    const [visiblePlanModal, setVisiblePlanModal] = useState(false);
    const [visibleAdditionalModal, setVisibleAdditionalModal] = useState(false);
    const [visibleDeliveryModal, setVisibleDeliveryModal] = useState(false);
    const [rate, setRate] = useState({0: true});

    useEffect(() => {
        if (destination) {
            GetRates(destination.details)
        }
    }, [destination]);


    return (
        <SelectCarScreenView
            rates={rates}
            duration={destination.details ? Math.floor(destination.details.duration) : 0}
            setters={{
                setVisiblePlanModal,
                setVisibleAdditionalModal,
                setVisibleDeliveryModal,
                setRate,
            }}
            values={{
                visiblePlanModal,
                visibleAdditionalModal,
                visibleDeliveryModal,
                rate,
            }}
        />
    );
};

export default SelectCarScreenController;
