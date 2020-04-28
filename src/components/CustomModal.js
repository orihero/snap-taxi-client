import React from 'react';
import {Modal, View, StyleSheet, Platform, TouchableHighlight, TouchableNativeFeedback,Dimensions} from "react-native";
import AddIcon from "./AddIcon";
import Colors from "../assets/styles/Colors";

const CustomModal = ({visible = false, closeModal, children, contentStyle}) => {
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
            paddingTop: 25.7,
            paddingBottom: 26,
            flex: 1,
            marginHorizontal: 18,
            backgroundColor: Colors.background,
            borderWidth: 2,
            borderColor: '#fff',
            marginVertical:  Dimensions.get('window').height > 700 ? 80 : 40,
            borderRadius: 15
        },
        icon: {
            transform: [{rotate: '45deg'}],
            position: 'absolute',
            zIndex: 999,
            right: 15.7,
            top: 26.7,
            borderRadius: 100,
        }
    })
;

export default CustomModal;