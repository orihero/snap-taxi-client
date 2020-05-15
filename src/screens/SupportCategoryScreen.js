import React from 'react';
import {View, StyleSheet, TextInput, TouchableWithoutFeedback, ScrollView} from 'react-native'
import {Bold, Regular, SemiBold} from "../components/Layout/AppText";
import {localization} from "../services/Localization";
import Colors from "../assets/styles/Colors";
import AttachFileIcon from "../assets/images/AttachFileIcon";
import Button from "../components/Button";
import Screen from "../helpers/Dimensions";

const SupportCategoryScreen = () => {
    const Container = Screen.height > 700 ? View : ScrollView;
    return (
        <Container style={styles.container}>
            <View style={{paddingHorizontal: 20, flex: 1}}>
                <Regular style={{fontSize: 16, color: '#646974', marginBottom: 20}}>
                    Трагедия Пушкина «Моцарт и Сальери» занимает всего десять страниц. О чем она? О зависти или о том,
                    что
                    «гений и злодейство – две вещи несовместные»? Есть ли оправдание Сальери, который, по версии
                    Пушкина,
                    отравил Моцарта?
                </Regular>
                <Bold style={{fontSize: 16}}>Комментарий</Bold>
                <View style={styles.textarea}>
                    <TextInput
                        multiline={true}
                        placeholder={'Напишите ваш отзыв'}
                    />
                </View>
                <TouchableWithoutFeedback>
                    <View>
                        <Regular style={{fontSize: 15, marginBottom: 10, color: Colors.grey}}>Прикрепите скрин</Regular>
                        <View style={styles.attachFile}>
                            <SemiBold style={{color: '#858585'}}>Загрузить</SemiBold>
                            <AttachFileIcon/>
                            <View style={styles.border}/>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
                <Button title={localization.send} containerStyle={{marginBottom: 33}}/>
            </View>
        </Container>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textarea: {
        paddingHorizontal: 10,
        borderRadius: 10,
        elevation: 10,
        backgroundColor: Colors.background,
        height: 126,
        marginTop: 13,
        marginBottom: 40
    },
    attachFile: {
        height: 52,
        flexDirection: 'row',
        justifyContent: 'space-between',
        elevation: 6,
        backgroundColor: Colors.background,
        alignItems: 'center',
        paddingHorizontal: 17,
        borderRadius: 10,
        marginBottom: 50,
        borderBottomStartRadius: 0
    },
    border: {
        position: 'absolute',
        bottom: 0,
        width: '80%',
        height: 3,
        backgroundColor: Colors.blue,
        borderRadius: 10
    }
});

export default SupportCategoryScreen;
