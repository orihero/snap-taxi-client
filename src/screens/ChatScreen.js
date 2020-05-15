import React from 'react';
import {View, TextInput, ScrollView, StyleSheet} from 'react-native'
import SmileIcon from "../assets/images/SmileIcon";
import SendSMSIcon from "../assets/images/SendSMSIcon";
import Colors from "../assets/styles/Colors";
import {localization} from "../services/Localization";
import {Regular} from "../components/Layout/AppText";

const ChatScreen = () => {
    return (
        <View style={{flex: 1, marginHorizontal: 15}}>
            <ScrollView>
                <View style={{alignItems: 'flex-start', marginTop: 52, marginBottom: 30}}>
                    <View style={styles.driver}>
                        <Regular style={[styles.text, {color: '#4D4F5C'}]}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </Regular>
                    </View>
                    <Regular style={{fontSize: 12, color: '#43425D'}}>10:25</Regular>
                </View>
                <View style={{alignItems: 'flex-end', marginBottom: 30}}>
                    <View style={styles.client}>
                        <Regular style={styles.text}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet atque aut consequatur
                        </Regular>
                    </View>
                    <Regular style={{fontSize: 12, color: '#43425D'}}>10:25</Regular>
                </View>
            </ScrollView>

            <View style={styles.form}>
                <SmileIcon/>
                <TextInput style={{flex: 1, marginHorizontal: 12}} placeholder={localization.writeSMS}/>
                <SendSMSIcon/>
            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    form: {
        borderWidth: 2,
        flexDirection: 'row',
        marginTop: 'auto',
        marginBottom: 27,
        borderColor: '#fff',
        alignItems: 'center',
        paddingHorizontal: 15,
        elevation: 10,
        backgroundColor: Colors.background,
        borderRadius: 15
    },
    driver: {
        width: '60%',
        borderRadius: 20,
        backgroundColor: '#EDF0F5',
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderBottomStartRadius: 0,
    },
    client: {
        width: '60%',
        backgroundColor: Colors.blue,
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 20,
        borderBottomEndRadius: 0
    },
    text: {
        color: '#fff',
        fontSize: 13,
        lineHeight: 20
    }
});

export default ChatScreen;
