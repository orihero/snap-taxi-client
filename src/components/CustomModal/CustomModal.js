import React from 'react';
import {
    Modal,
    View,
    Platform,
    TouchableHighlight,
    TouchableNativeFeedback,
} from "react-native";
import styles from "./styles";
import AddIcon from "../../assets/images/AddIcon";

const CustomModal = ({visible = false, closeModal, children, contentStyle}) => {
    const TouchableComponent = Platform.OS === 'ios' ? TouchableHighlight : TouchableNativeFeedback;
    return (
        <Modal visible={visible} transparent={true} statusBarTranslucent={true} animationType={"fade"}>
            <View style={styles.container}>
                <View style={styles.content}>
                    <View style={styles.icon}>
                        <TouchableComponent
                            onPress={closeModal}
                            background={TouchableNativeFeedback.Ripple('rgba(0,0,0,.2)', true)}
                        >
                            <AddIcon/>
                        </TouchableComponent>
                    </View>
                    <View style={{flex: 1, marginHorizontal: 14, ...contentStyle}}>
                        {children}
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default CustomModal;
