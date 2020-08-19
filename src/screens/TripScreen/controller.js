import React from 'react';

import TripScreenView from "./view";


const TripScreenController = ({order}) => {

    return (
        <TripScreenView
            order={order}
            orderStatus={order.status}
        />
    );
};

export default TripScreenController;
