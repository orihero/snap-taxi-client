import React, {useState} from 'react';
import {View, Dimensions, StyleSheet, ScrollView, TouchableWithoutFeedback} from "react-native"
import {useNavigation} from "@react-navigation/native"
import Button from "./Button";
import AddIcon from "../assets/images/AddIcon";
import UzcardIcon from "../assets/images/UzcardIcon";
import ArrowIcon from "../assets/images/ArrowIcon";
import CarItem from "./CarItem";
import PlanItemInfoModal from "./PlanItemInfoModal";
import AdditionalOptionsModal from "./AdditionalOptionsModal";
import BottomMenuCurve from "../assets/images/BottomMenuCurve";
import Colors from "../assets/styles/Colors";
import {Bold, Regular} from "./Layout/AppText";
import {ORDER} from "../store/constants/Taxi";
import {connect} from "react-redux";
import {localization} from "../services/Localization";

const Dots = () => {
    return (
        <View style={styles.dots}>{
            [...new Array(4)].map((item, index) => (
                <View style={styles.dot} key={index}/>
            ))}
        </View>
    )
};

const SelectPlanMenu = ({dispatch}) => {
    const navigation = useNavigation();
    const [visiblePlanModal, setVisiblePlanModal] = useState(false);
    const [visibleAdditionalModal, setVisibleAdditionalModal] = useState(false);
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

            <View style={{marginTop: 'auto'}}>
                <BottomMenuCurve width={Dimensions.get('window').width - 32}/>
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
                                [...new Array(5)].map((item, index) => (
                                    <CarItem
                                        key={index}
                                        onPress={() => setActive({[index]: true})}
                                        active={active[index]}
                                        onInfoPress={() => setVisiblePlanModal(true)}
                                    />
                                ))
                            }
                        </ScrollView>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 13,}}>
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
                            <Button
                                title={localization.findTaxi}
                                onPress={() => navigation.navigate('TaxiComing')}
                            />
                        </View>
                        <View style={styles.column}>
                            <TouchableWithoutFeedback onPress={() => setVisibleAdditionalModal(true)}>
                                <View style={styles.additional}>
                                    <Bold style={styles.text}>{localization.additional}</Bold>
                                    <AddIcon color={'#575f6b'}/>
                                </View>
                            </TouchableWithoutFeedback>
                            <Button
                                title={localization.forFriend}
                                containerStyle={{backgroundColor: '#f2f2f2',}}
                            />
                        </View>
                    </View>
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
        container: {
            width: Dimensions.get('window').width - 32,
            alignSelf: 'center',
            backgroundColor: Colors.background,
            marginTop: 'auto',
            marginBottom: 12,
            borderBottomEndRadius: 15,
            borderBottomStartRadius: 15,
            paddingBottom: 23,
            paddingTop: 13,
            borderWidth: 2,
            borderColor: '#fff',
            borderTopWidth: 0,
        },
        column: {
            width: '48.5%'
        },
        findCar: {
            flexDirection: 'row',
            marginBottom: 24,
            alignItems: 'center'
        },
        text: {
            fontSize: 13
        },
        additional: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 24,
            alignItems: 'center'
        },
        dot: {
            width: 2,
            height: 2,
            marginLeft: 2,
            backgroundColor: '#000',
            borderRadius: 100
        },
        cardNumber: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            flex: 1,
            marginRight: 20
        },
        dots: {
            alignItems: 'center',
            flexDirection: 'row'
        },
        plan: {
            marginBottom: 24,
            paddingLeft: 13
        }
    })
;

export default connect()(SelectPlanMenu);
