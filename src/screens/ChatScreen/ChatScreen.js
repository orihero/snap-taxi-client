import React, {useRef, useState} from 'react';
import {View, TextInput, TouchableOpacity, FlatList} from 'react-native'
import {connect} from "react-redux";

import styles from "./styles";
import SmileIcon from "../../assets/images/SmileIcon";
import SendSMSIcon from "../../assets/images/SendSMSIcon";
import {localization} from "../../services/Localization";
import {Regular} from "../../components/Layout/AppText";
import {bindActionCreators} from "redux";
import booking from "../../store/actions/booking";

const ChatMessage = ({item}) => (
    item.type === 'driver'
        ? <View style={{alignItems: 'flex-start', marginTop: 10, marginBottom: 30}}>
            <View style={styles.driver}>
                <Regular style={[styles.text, {color: '#4D4F5C'}]}>{item.message}</Regular>
            </View>
            {/*<Regular style={{fontSize: 12, color: '#43425D'}}>10:25</Regular>*/}
        </View>
        : <View style={{alignItems: 'flex-end', marginBottom: 30}}>
            <View style={styles.client}>
                <Regular style={styles.text}>
                    {item.message}
                </Regular>
            </View>
            {/*<Regular style={{fontSize: 12, color: '#43425D'}}>10:25</Regular>*/}
        </View>
);

const ChatScreen = ({SendPush, messages, order}) => {
    let flatList = useRef(null);

    const [message, setMessage] = useState('');


    function sendMsg() {
        SendPush({
            user_id: order.driver_id,
            title: 'Сообщение',
            message
        }, () => {
        });
        setMessage('')
    }

    return (
        <View style={{flex: 1, marginHorizontal: 15}}>
            <FlatList
                ref={flatList}
                onContentSizeChange={() =>
                    flatList.current.scrollToEnd({animated: true})
                }
                onLayout={() => flatList.current.scrollToEnd({animated: true})}
                contentContainerStyle={styles.chatArea}
                data={messages}
                renderItem={({item}) => <ChatMessage item={item}/>}
            />

            <View style={styles.form}>
                <SmileIcon/>
                <TextInput
                    onChangeText={setMessage}
                    value={message}
                    style={{flex: 1, marginHorizontal: 12}}
                    placeholder={localization.writeSMS}
                />
                <TouchableOpacity onPress={sendMsg}>
                    <SendSMSIcon/>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const mapStateToProps = ({booking: {messages, order}}) => ({
    messages: messages.data,
    order: order.data,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    SendPush: booking.SendPush
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChatScreen);
