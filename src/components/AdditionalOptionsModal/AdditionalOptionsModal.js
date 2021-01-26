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

const AdditionalOptionsModal = ({visible, closeModal, comment, setComment, airCondition, setAirCondition}) => {
    const [coupon, setCoupon] = useState(false);
    return (
        <CustomModal visible={visible} closeModal={closeModal}>
            <View>
                <KeyboardAvoidingView behavior={'position'}>
                    <AdditionalOptionsModalIcon style={styles.icon}/>
                    <Bold style={styles.heading}>{localization.yourDesire}</Bold>
                    <View style={{marginHorizontal: 10}}>
                        <SwitchWithText
                            style={{borderTopWidth: 1}}
                            Icon={AirConditionIcon}
                            text={localization.airCondition}
                            // subText={'Цена 15% от общей суммы'}
                            setValue={setAirCondition}
                            value={airCondition}
                        />
                        {/*<SwitchWithText*/}
                        {/*    disabled*/}
                        {/*    Icon={DiscountIcon}*/}
                        {/*    text={'Использовать купон'}*/}
                        {/*    setValue={setCoupon}*/}
                        {/*    value={coupon}*/}
                        {/*/>*/}
                    </View>
                    <View style={styles.textarea}>
                        <TextInput
                            value={comment}
                            onChangeText={text => setComment(text)}
                            multiline={true}
                            placeholder={localization.comment}
                        />
                    </View>
                </KeyboardAvoidingView>
            </View>
            <Button
                onPress={closeModal}
                title={localization.understandable}
            />
        </CustomModal>
    );
};


export default AdditionalOptionsModal;
