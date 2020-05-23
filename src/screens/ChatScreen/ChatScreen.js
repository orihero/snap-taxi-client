import React from 'react';
import {View, TextInput, ScrollView} from 'react-native'

import styles from "./styles";
import SmileIcon from "../../assets/images/SmileIcon";
import SendSMSIcon from "../../assets/images/SendSMSIcon";
import {localization} from "../../services/Localization";
import {Regular} from "../../components/Layout/AppText";

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


export default ChatScreen;
