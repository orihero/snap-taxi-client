import React, {useState} from 'react';
import {View, TextInput, KeyboardAvoidingView} from "react-native"

import styles from "./styles";
import CustomModal from "../CustomModal/CustomModal";
import Button from "../Button";
import AdditionalOptionsModalIcon from "../../assets/images/AdditionalOptionsModalIcon";
import SelectedDestination from "../SelectedDestanation/SelectedDestination";
import AirConditionIcon from "../../assets/images/AirConditionIcon";
import SmokeIcon from "../../assets/images/SmokeIcon";
import {Bold} from "../Layout/AppText";
import {localization} from "../../services/Localization";
import SwitchWithText from "../SwitchWithText";
import DiscountIcon from "../../assets/images/DiscountIcon";

const AdditionalOptionsModal = ({visible, closeModal}) => {
    const [airCondition, setAirCondition] = useState(false);
    const [smoke, setSmoke] = useState(false);
    const [coupon, setCoupon] = useState(false);
    return (
        <CustomModal visible={visible} closeModal={closeModal}>
            <KeyboardAvoidingView behavior={'position'}>
                <View>
                    <AdditionalOptionsModalIcon style={styles.icon}/>
                    <Bold style={styles.heading}>{localization.yourDesire}</Bold>
                    <SelectedDestination containerStyle={{marginHorizontal: 10}} textStyle={{fontSize: 15}}/>
                    <View style={{marginHorizontal: 10}}>
                        <SwitchWithText
                            style={{borderTopWidth: 1}}
                            Icon={AirConditionIcon}
                            text={localization.airCondition}
                            setValue={setAirCondition}
                            value={airCondition}
                        />
                        <SwitchWithText
                            Icon={SmokeIcon}
                            text={localization.forSmokers}
                            setValue={setSmoke}
                            value={smoke}
                        />
                        <SwitchWithText
                            Icon={DiscountIcon}
                            text={'Использовать купон'}
                            setValue={setCoupon}
                            value={coupon}
                        />
                    </View>
                    <View style={styles.textarea}>
                        <TextInput
                            multiline={true}
                            placeholder={localization.comment}
                        />
                    </View>
                </View>
                <Button
                    onPress={closeModal}
                    title={localization.understandable}
                />
            </KeyboardAvoidingView>
        </CustomModal>
    );
};


export default AdditionalOptionsModal;
