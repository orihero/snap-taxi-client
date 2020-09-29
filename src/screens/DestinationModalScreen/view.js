import React, {useState, useEffect} from 'react';
import {View, Modal, TouchableWithoutFeedback, TextInput} from "react-native";
import axios from "axios";

import styles from "./styles";
import BackButtonIcon from "../../assets/images/BackButtonIcon";
import {Bold, Light, SemiBold} from "../../components/Layout/AppText";
import LocationIcon from "../../assets/images/LocationIcon";
import {localization} from "../../services/Localization";


const DestinationModalScreenView = ({visible, closeModal, from, to}) => {
    const [address, setAddress] = useState(to);
    const [predictions, setPredictions] = useState([]);
    useEffect(() => {
    }, [address]);
    return (
        <Modal visible={visible} onRequestClose={closeModal}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.btn}>
                        <View>
                            <TouchableWithoutFeedback onPress={closeModal}>
                                <BackButtonIcon/>
                            </TouchableWithoutFeedback>
                        </View>
                    </View>
                    <SemiBold style={styles.title}>Пункт назначение</SemiBold>
                </View>
                <View style={[styles.selected]}>
                    <View style={styles.icons}>
                        <LocationIcon/>
                        <View style={styles.smallCircle}/>
                        <View style={styles.smallCircle}/>
                        <View style={styles.smallCircle}/>
                        <View style={styles.smallCircle}/>
                        <View style={styles.circle}/>
                    </View>
                    <View style={{marginLeft: 13, flex: 1}}>
                        <View>
                            <Light style={styles.textColor}>{localization.from}</Light>
                            <Bold style={styles.directionText}>{from}</Bold>
                        </View>
                        <TouchableWithoutFeedback onPress={() => {
                        }}>
                            <View>
                                <Light style={styles.textColor}>{localization.to}</Light>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <TextInput
                                        style={[styles.directionText, styles.input]}
                                        onChangeText={setAddress}
                                    >
                                        {address}
                                    </TextInput>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default DestinationModalScreenView;
