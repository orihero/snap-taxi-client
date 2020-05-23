import React, {useState} from 'react';
import {View, ScrollView, TouchableWithoutFeedback} from "react-native"
import {useNavigation} from "@react-navigation/native"

import styles from "./styles";
import Button from "../Button";
import AddIcon from "../../assets/images/AddIcon";
import UzcardIcon from "../../assets/images/UzcardIcon";
import ArrowIcon from "../../assets/images/ArrowIcon";
import CarItem from "../CarItem";
import PlanItemInfoModal from "../PlanItemInfoModal";
import AdditionalOptionsModal from "../AdditionalOptionsModal";
import BottomMenuCurve from "../../assets/images/BottomMenuCurve";
import Colors from "../../assets/styles/Colors";
import {Bold, Regular} from "../Layout/AppText";
import {localization} from "../../services/Localization";
import DeliveryInfoModal from "../DeliveryInfoModal/DeliveryInfoModal";
import SelectedDestination from "../SelectedDestanation/SelectedDestination";

const Dots = () => {
    return (
        <View style={styles.dots}>{
            [...new Array(4)].map((item, index) => (
                <View style={styles.dot} key={index}/>
            ))}
        </View>
    )
};

const SelectPlanMenu = () => {
    const navigation = useNavigation();
    const [visiblePlanModal, setVisiblePlanModal] = useState(false);
    const [visibleAdditionalModal, setVisibleAdditionalModal] = useState(false);
    const [visibleDeliveryModal, setVisibleDeliveryModal] = useState(false);
    const [active, setActive] = useState({0: true});
    return (
        <>
            <PlanItemInfoModal
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
                    <View style={styles.plan}>
                        <ScrollView
                            style={{width: '100%'}}
                            horizontal
                            decelerationRate={10}
                            snapToInterval={186}
                            snapToAlignment={"start"}
                            showsHorizontalScrollIndicator={false}
                        >
                            {
                                [...new Array(6)].map((item, index) => {
                                    if (index === 4) {
                                        return <CarItem
                                            index={index}
                                            key={index}
                                            onPress={() => {
                                                setVisibleDeliveryModal(true);
                                                setActive({[index]: true})
                                            }}
                                            active={active[index]}
                                            onInfoPress={() => setVisiblePlanModal(true)}
                                        />
                                    } else {
                                        return <CarItem
                                            index={index}
                                            key={index}
                                            onPress={() => setActive({[index]: true})}
                                            active={active[index]}
                                            onInfoPress={() => setVisiblePlanModal(true)}
                                        />
                                    }
                                })
                            }
                        </ScrollView>
                    </View>
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
                    <SelectedDestination containerStyle={{paddingTop: 0, paddingHorizontal: 13, marginBottom: 10}}/>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 13}}>
                        <View style={styles.column}>
                            <Button
                                title={localization.findTaxi}
                                onPress={() => navigation.navigate('TaxiComing')}
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
        </>
    );
};

export default SelectPlanMenu;
