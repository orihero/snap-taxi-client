import React from 'react';
import {View, TouchableWithoutFeedback, FlatList} from 'react-native';
import MapScreen from "../MapScreen";
import Header from "../../components/Header/Header";
import {useNavigation} from "@react-navigation/native";

import PlanItemInfoModal from "../../components/PlanItemInfoModal";
import AdditionalOptionsModal from "../../components/AdditionalOptionsModal";
import DeliveryInfoModal from "../../components/DeliveryInfoModal";
import BottomMenuCurve from "../../assets/images/BottomMenuCurve";
import styles from "./styles";
import CarItem from "../../components/CarItem";
import Colors from "../../assets/styles/Colors";
import UzcardIcon from "../../assets/images/UzcardIcon";
import {Bold, Regular} from "../../components/Layout/AppText";
import ArrowIcon from "../../assets/images/ArrowIcon";
import {localization} from "../../services/Localization";
import AddIcon from "../../assets/images/AddIcon";
import SelectedDestination from "../../components/SelectedDestanation";
import Button from "../../components/Button";

const Dots = () => {
    return (
        <View style={styles.dots}>{
            [...new Array(4)].map((item, index) => (
                <View style={styles.dot} key={index}/>
            ))}
        </View>
    )
};


const SelectCarScreenView = ({rates, setters, values, duration, destination, currentLocation}) => {
    const navigation = useNavigation();

    const {
        setVisiblePlanModal,
        setVisibleAdditionalModal,
        setVisibleDeliveryModal,
        setRate,
        setRateInfo,
    } = setters;

    const {
        visiblePlanModal,
        visibleAdditionalModal,
        visibleDeliveryModal,
        rate,
        rateInfo,
    } = values;

    return (
        <>
            <View style={{flex: 1}}>
                <Header
                    goBack={true}
                    subText={'Детали заказа'}
                />
                <MapScreen/>
                <PlanItemInfoModal
                    rateInfo={rateInfo}
                    visible={visiblePlanModal}
                    closeModal={() => setVisiblePlanModal(false)}
                />
                <AdditionalOptionsModal
                    visible={visibleAdditionalModal}
                    closeModal={() => setVisibleAdditionalModal(false)}
                />
                <DeliveryInfoModal
                    visible={visibleDeliveryModal}
                    closeModal={() => setVisibleDeliveryModal(false)}
                    openModal={() => setVisibleDeliveryModal(true)}
                />
                <View style={{marginTop: 'auto'}}>
                    <BottomMenuCurve/>
                    <View style={styles.container}>
                        <FlatList
                            contentContainerStyle={styles.plan}
                            style={{width: '100%'}}
                            horizontal
                            decelerationRate={10}
                            snapToInterval={186}
                            data={rates.data}
                            renderItem={({item, index}) => {
                                return <CarItem
                                    duration={duration}
                                    index={index}
                                    title={item.title}
                                    key={index}
                                    price={item.price}
                                    onPress={() => {
                                        index === 4 && setVisibleDeliveryModal(true);
                                        setRate(item)
                                    }}
                                    active={rate.id === item.id}
                                    onInfoPress={() => {
                                        setRateInfo(item);
                                        setVisiblePlanModal(true)
                                    }}
                                />
                            }}
                            snapToAlignment={"start"}
                            showsHorizontalScrollIndicator={false}
                        />
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginHorizontal: 13,
                            borderBottomWidth: 1,
                            borderBottomColor: Colors.border,
                            marginBottom: 10
                        }}>
                            <View style={styles.column}>
                                <TouchableWithoutFeedback onPress={() => navigation.navigate('PaymentMethodsStack')}>
                                    <View style={styles.findCar}>
                                        <UzcardIcon style={{marginRight: 16.6}}/>
                                        <View style={styles.cardNumber}>
                                            <Dots/>
                                            <Dots/>
                                            <Dots/>
                                            <Regular style={styles.text}>8797</Regular>
                                        </View>
                                        <ArrowIcon style={{marginLeft: 'auto'}}/>
                                    </View>
                                </TouchableWithoutFeedback>
                            </View>
                            <View style={styles.column}>
                                <TouchableWithoutFeedback onPress={() => setVisibleAdditionalModal(true)}>
                                    <View style={styles.additional}>
                                        <Bold style={styles.text}>{localization.additional}</Bold>
                                        <AddIcon color={'#575f6b'}/>
                                    </View>
                                </TouchableWithoutFeedback>
                            </View>
                        </View>
                        <SelectedDestination
                            containerStyle={{paddingTop: 0, paddingHorizontal: 13, marginBottom: 10}}
                            to={destination}
                            from={currentLocation}
                        />
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 13}}>
                            <View style={styles.column}>
                                <Button
                                    title={localization.findTaxi}
                                    onPress={() => console.log('pressed')}
                                />
                            </View>
                            <View style={styles.column}>
                                <Button
                                    title={localization.forFriend}
                                    containerStyle={{backgroundColor: '#f2f2f2'}}
                                    onPress={() => navigation.navigate('EnterPhoneNumber')}
                                />
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </>
    );
};


export default SelectCarScreenView;
