import React, {useRef, useState, useEffect} from 'react';
import {View, TextInput, TouchableOpacity, FlatList} from 'react-native'
import {connect} from "react-redux";

import styles from "./styles";
import SmileIcon from "../../assets/images/SmileIcon";
import SendSMSIcon from "../../assets/images/SendSMSIcon";
import {localization} from "../../services/Localization";
import {Regular} from "../../components/Layout/AppText";
import {bindActionCreators} from "redux";
import booking from "../../store/actions/booking";
import api from "../../services/api";
import {formData} from "../../store/utils";

const ChatMessage = ({item}) => (
    item.type === 'driver' || item.user === null
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

const SupportChatScreen = ({}) => {
    let flatList = useRef(null);

    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        api
            .request
            .get('/admin-messages')
            .then((res) => {
                setMessages(res.data.data)
            })
    }, []);

    const sendMessage = () => {
        if (message) {
            api
                .request
                .post('/admin-messages', formData({message}))
                .then((res) => {
                    setMessages(prevState => [...prevState, res.data.data]);
                    setMessage('');
                })
        }
    };

    return (
        <View style={{flex: 1, marginHorizontal: 15}}>
            <FlatList
                ref={flatList}
                onContentSizeChange={() =>
                    flatList.current.scrollToEnd({animated: true})
                }
                onLayout={() => flatList.current.scrollToEnd({animated: true})}
                contentContainerStyle={styles.chatArea}
                data={messages.reverse()}
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
                <TouchableOpacity onPress={sendMessage}>
                    <SendSMSIcon/>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const mapStateToProps = ({booking: {messages, order}}) => ({
    messages: messages.data,
    order: order.data,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    SendPush: booking.SendPush
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SupportChatScreen);
