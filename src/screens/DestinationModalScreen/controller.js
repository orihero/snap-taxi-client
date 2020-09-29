import React from 'react';
import DestinationModalScreenView from "./view";

const DestinationModalScreenController = ({visible, closeModal, from, to}) => {
    return (
       <DestinationModalScreenView
           visible={visible}
           closeModal={closeModal}
           to={to}
           from={from}
       />
    );
};

export default DestinationModalScreenController;
