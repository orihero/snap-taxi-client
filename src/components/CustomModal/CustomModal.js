import React from 'react';
import {
    Modal,
    View,
    TouchableOpacity,
    TouchableNativeFeedback,
} from "react-native";
import styles from "./styles";
import AddIcon from "../../assets/images/AddIcon";

const CustomModal = ({visible = false, closeModal, children, contentStyle}) => {

    return (
        <Modal
            visible={visible}
            transparent={true}
            statusBarTranslucent={true}
            animationType={"fade"}
            onRequestClose={closeModal}
        >
            <View style={styles.container}>
                <View style={styles.content}>
                    <View style={styles.icon}>
                        <TouchableOpacity
                            onPress={closeModal}
                            style={{
                                width: 40,
                                height: 40,
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <AddIcon/>
                        </TouchableOpacity>
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
