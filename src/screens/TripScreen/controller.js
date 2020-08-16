import React from 'react';

import TripScreenView from "./view";


const TripScreenController = ({order}) => {

    return (
        <TripScreenView
            orderStatus={order.status}
        />
    );
};

export default TripScreenController;
