import React from 'react';
import {Modal, View, StyleSheet, Platform, TouchableHighlight, TouchableNativeFeedback} from "react-native";
import AddIcon from "./AddIcon";

const CustomModal = ({visible=false, closeModal, children, contentStyle}) => {
    const TouchableComponent = Platform.OS === 'ios' ? TouchableHighlight : TouchableNativeFeedback;

    return (
        <Modal visible={visible} transparent={true} statusBarTranslucent={true} animationType={'fade'}>
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,.2)'
    },
    content: {
        flex: 1,
        marginHorizontal: 18,
        backgroundColor: '#fff',
        marginVertical: 80,
        borderRadius: 15
    },
    icon: {
        transform: [{rotate: '45deg'}],
        position: 'absolute',
        right: 15.7,
        top: 26.7,
        borderRadius: 100,
    }
});

export default CustomModal;