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
            navigation.reset({
                index: 0,
                routes: [{name: 'MainStack'}]
            });
        })
    };

    return (
        <RateOrderModalView
            order={order}
            visible={order.status === 'done'}
            review={review}
            waitingTime={order.waiting_time}
            setReview={setReview}
            rateOrder={rateOrder}
            rate={rate}
            setRate={setRate}
        />
    );
};

export default RateOrderModalController;
