import React, {useState} from 'react';
import {View, Text, Dimensions, StyleSheet, ScrollView, TouchableWithoutFeedback} from "react-native"
import Button from "./Button";
import AddIcon from "./AddIcon";
import UzcardIcon from "../assets/images/UzcardIcon";
import ArrowIcon from "../assets/images/ArrowIcon";
import CarItem from "./CarItem";
import PlanItemInfoModal from "./PlanItemInfoModal";
import AdditionalOptionsModal from "./AdditionalOptionsModal";
import BottomMenuCurve from "../assets/images/BottomMenuCurve";

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
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        >
                            <CarItem
                                onPress={() => setActive({0: true})}
                                active={active[0]}
                                onInfoPress={() => setVisiblePlanModal(true)}
                            />
                            <CarItem
                                onPress={() => setActive({1: true})}
                                active={active[1]}
                                onInfoPress={() => setVisiblePlanModal(true)}
                            />
                            <CarItem
                                onPress={() => setActive({2: true})}
                                active={active[2]}
                                onInfoPress={() => setVisiblePlanModal(true)}
                            />

                        </ScrollView>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View style={styles.column}>
                            <View style={styles.findCar}>
                                <UzcardIcon style={{marginRight: 16.6}}/>
                                <View style={styles.cardNumber}>
                                    <Dots/>
                                    <Dots/>
                                    <Dots/>
                                    <Text style={styles.text}>8797</Text>
                                </View>
                                <ArrowIcon style={{marginLeft: 'auto'}}/>
                            </View>
                            <Button title={'Найти такси'} shadow/>
                        </View>
                        <View style={styles.column}>
                            <TouchableWithoutFeedback onPress={() => setVisibleAdditionalModal(true)}>
                                <View style={styles.additional}>

                                    <>
                                        <Text style={styles.text}>Дополнительно</Text>
                                        <AddIcon color={'#575f6b'}/>
                                    </>
                                </View>
                            </TouchableWithoutFeedback>
                            <Button title={'Для друга'} style={{backgroundColor: '#f2f2f2'}}/>
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
        backgroundColor: '#fff',
        marginTop: 'auto',
        marginBottom: 12,
        borderBottomEndRadius: 15,
        borderBottomStartRadius: 15,
        paddingBottom: 23,
        paddingHorizontal: 13,
        paddingTop: 13
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
        fontWeight: 'bold',
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
        marginBottom: 24
    },

});

export default SelectPlanMenu;