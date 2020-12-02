import React from 'react';
import {
    KeyboardAvoidingView,
    ScrollView,
    Text,
    TextInput,
    TouchableWithoutFeedback,
    View,
    Modal
} from "react-native"

import styles from "./styles";
import StarIcon from "../../assets/images/StarIcon";
import TimeIcon from "../../assets/images/TimeIcon";
import EmptyWalletIcon from "../../assets/images/EmptyWalletIcon";
import DistanceIcon from "../../assets/images/DistanceIcon";
import Button from "../../components/Button";
import {localization} from "../../services/Localization";
import {Bold} from "../../components/Layout/AppText";


const RateOrderModalView = ({visible, order, review, setReview, rateOrder, rate, waitingTime, setRate}) => {

    const Rate = () => (
        <View style={styles.startContainer}>
            {
                [...new Array(5)].map((item, index) => (
                    <TouchableWithoutFeedback onPress={() => setRate(index + 1)}>
                        <StarIcon
                            active={index < rate}
                            style={{marginRight: 10}}
                            width={35.26}
                            height={33.79}
                        />
                    </TouchableWithoutFeedback>
                ))
            }
        </View>
    );

    return (
        <Modal transparent visible={visible}>
            <View style={styles.container}>
                <ScrollView>
                    <KeyboardAvoidingView style={{flex: 1}} behavior={'padding'}>
                        <View style={styles.wrapper}>
                            <View style={styles.shadow}>
                                <View style={styles.content}>
                                    <View style={styles.topText}>
                                        <Text style={styles.heading}>{localization.howWasTrip}</Text>
                                        <Text style={styles.subHeading}>{localization.helpUsToBeBetter}</Text>
                                    </View>
                                    <Rate/>
                                    <View style={styles.markWrapper}>
                                        <Bold style={{fontSize: 16}}>{localization.yourMark}</Bold>
                                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                            <Text
                                                style={{fontSize: 16, fontWeight: 'bold', marginRight: 4}}>{rate}</Text>
                                            <StarIcon active width={17.19} height={16.48}/>
                                        </View>
                                    </View>
                                    <View style={styles.textarea}>
                                        <TextInput
                                            value={review}
                                            onChangeText={text => setReview(text)}
                                            multiline={true}
                                            placeholder={localization.leaveFeedBack}
                                        />
                                    </View>
                                    <View style={styles.detailsWrapper}>
                                        <View style={{alignItems: 'center'}}>
                                            <TimeIcon/>
                                            <Text style={{color: '#646974'}}>{localization.tripTime}</Text>
                                            <Text style={{color: '#646974'}}>ожидание</Text>
                                            <Bold style={{fontSize: 17}}>{Math.floor(waitingTime / 60)} мин</Bold>
                                        </View>
                                        <View style={{alignItems: 'center'}}>
                                            <EmptyWalletIcon/>
                                            <Text style={{color: '#646974'}}>{localization.tripCost}</Text>
                                            <Bold style={{fontSize: 17}}>{order.price}</Bold>
                                        </View>
                                        <View style={{alignItems: 'center'}}>
                                            <DistanceIcon/>
                                            <Text style={{color: '#646974'}}>{localization.tripDistance}</Text>
                                            <Bold style={{fontSize: 17}}>{order.distance} км</Bold>
                                        </View>
                                    </View>

                                </View>
                            </View>
                        </View>
                    </KeyboardAvoidingView>
                </ScrollView>
                <Button
                    title={localization.done}
                    onPress={rateOrder}
                    containerStyle={{
                        marginBottom: 20
                    }}
                />
            </View>
        </Modal>
    );
};


export default RateOrderModalView;
