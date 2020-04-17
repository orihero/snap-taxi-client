import React, {useState} from 'react';
import {View, Text, Dimensions, StyleSheet, ScrollView, TouchableNativeFeedback} from "react-native"
import Button from "./Button";
import AddIcon from "./AddIcon";
import UzcardIcon from "../assets/images/UzcardIcon";
import ArrowIcon from "../assets/images/ArrowIcon";
import CarItem from "./CarItem";
import PlanItemInfoModal from "./PlanItemInfoModal";
import AdditionalOptionsModal from "./AdditionalOptionsModal";

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
            <View style={styles.container}>

                <View style={styles.plan}>
                    <ScrollView
                        style={{width: '100%'}}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    >
                        <CarItem active onInfoPress={() => setVisiblePlanModal(true)}/>
                        <CarItem onInfoPress={() => setVisiblePlanModal(true)}/>
                        <CarItem onInfoPress={() => setVisiblePlanModal(true)}/>
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
                        <Button title={'Найти такси'}/>
                    </View>
                    <View style={styles.column}>
                        <View style={styles.additional}>
                            <Text style={styles.text}>Дополнительно</Text>
                            <TouchableNativeFeedback onPress={() => setVisibleAdditionalModal(true)}>
                                <AddIcon color={'#575f6b'}/>
                            </TouchableNativeFeedback>
                        </View>
                        <Button title={'Для друга'} style={{backgroundColor: '#f2f2f2'}}/>
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
        borderRadius: 15,
        paddingBottom: 23,
        paddingHorizontal: 13,
        paddingTop: 28
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
        marginBottom: 24
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