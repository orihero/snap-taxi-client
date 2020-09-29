import React, {useState} from 'react';
import {useNavigation} from "@react-navigation/native";

import RateOrderModalView from "./view";


const RateOrderModalController = ({order, RateOrder}) => {

    const navigation = useNavigation();

    const [review, setReview] = useState('');
    const [rate, setRate] = useState(5);

    const rateOrder = () => {
        RateOrder({
            orderId: order.id,
            comment: review,
            rating: rate
        }, () => {
            navigation.navigate('Home');
        })
    };

    return (
        <RateOrderModalView
            order={order}
            visible={order.status === 'done'}
            review={review}
            setReview={setReview}
            rateOrder={rateOrder}
            rate={rate}
            setRate={setRate}
        />
    );
};

export default RateOrderModalController;
