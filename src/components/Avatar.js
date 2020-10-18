import React from 'react';
import {View, StyleSheet, Image, TouchableWithoutFeedback, Alert} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import {SemiBold} from "./Layout/AppText";
import Colors from "../assets/styles/Colors";
import ProfileImageIcon from "../assets/images/ProfileImageIcon";


const Avatar = ({avatar, setAvatar, style, handleSubmit, initial}) => {
    const onAddPress = () => {
        const options = {};
        ImagePicker.launchImageLibrary({noData: true}, (response) => {
            if (response.uri) {
                setAvatar(response);
                Alert.alert(
                    'Сохранить',
                    'Вы дествительно хотите изменит фото профиля?',
                    [
                        {text: 'Да', onPress: () => handleSubmit(response)},
                        {text: 'Нет', onPress: () => setAvatar(initial)}
                    ]
                )
            }
        });
    };
    return (
        <TouchableWithoutFeedback onPress={onAddPress}>
            <View style={[styles.container, style]}>
                <View style={styles.imageWrapper}>
                    {
                        avatar
                            ? <Image source={{uri: avatar.uri || avatar}} style={styles.image}/>
                            : <ProfileImageIcon/>
                    }
                </View>
                <View style={[styles.iconWrapper, {elevation: 10}]}>
                    <SemiBold style={{fontSize: 10}}>+</SemiBold>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: Colors.background,
    },
    imageWrapper: {
        overflow: 'hidden',
        borderRadius: 100,
        borderWidth: 4,
        width: 85,
        height: 85,
        justifyContent: 'flex-end',
        alignItems: 'center',
        borderColor: '#F2F3F6',
        backgroundColor: '#fff',
        elevation: 10,
        marginBottom: 16
    },
    image: {
        width: 85,
        height: 85,
        borderRadius: 1000,
        resizeMode: 'cover',
    },
    iconWrapper: {
        position: 'absolute',
        top: 55,
        right: 0,
        height: 25,
        width: 25,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 20,
    },
});

export default Avatar;
