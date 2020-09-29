import {View, StyleSheet, TouchableWithoutFeedback, ScrollView, Linking, Alert} from "react-native"
import React from "react";
import routes from "../navigation/DrawerNavigation/routes";
import UserInfo from "./UserInfo/UserInfo";
import Colors from "../assets/styles/Colors";
import {Regular} from "./Layout/AppText";
import Screen from "../helpers/Dimensions";
import LogoutIcon from "../assets/images/LogoutIcon";
import {connect} from "react-redux";

const DrawerContent = (props) => {
    const logout = () => {
        Alert.alert('Выйти из аккаунта', 'Вы уверены что хотите выйти из аакунта?', [
            {text: 'Отмена'},
            {text: 'Выйти', onPress: () => props.dispatch({type: 'LOGOUT'})}
        ])
    };
    return (
        <View style={styles.container}>
            <UserInfo
                name={props.user.data.name}
                phoneNumber={props.user.data.phone}
            />
            <ScrollView
                style={{marginBottom: 20}}
                showsVerticalScrollIndicator={false}
            >
                <View>
                    {
                        routes.map((route, item) => {
                            return (
                                route.label &&
                                <DrawerItem
                                    key={route.label}
                                    label={route.label}
                                    name={route.name}
                                    url={route.url}
                                    {...props}
                                />
                            )
                        })
                    }
                </View>
                <TouchableWithoutFeedback onPress={logout}>
                    <View style={{alignItems: 'center', marginVertical: 20}}>
                        <View style={styles.icon}>
                            <LogoutIcon/>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </ScrollView>
            <Regular style={{position: 'absolute', fontSize: 15, bottom: 10, left: 35}}>Версия 2.0</Regular>
        </View>
    );
};

const DrawerItem = ({label, name, navigation, url}) => {
    return (
        <TouchableWithoutFeedback
            onPress={() => !url ? navigation.navigate(name) : Linking.openURL(`tel:+998994722244`)}>
            <View style={styles.itemStyle}>
                <Regular style={styles.text}>{label}</Regular>
            </View>
        </TouchableWithoutFeedback>
    )
};

const styles = StyleSheet.create({
    container: {
        paddingTop: Screen.height > 700 ? 66 : 20,
        paddingLeft: 14,
        paddingRight: 41,
        flex: 1,
        paddingBottom: 35,
        backgroundColor: Colors.background,
    },
    itemStyle: {
        paddingBottom: 14,
        borderBottomWidth: 1,
        borderBottomColor: '#EAECF1',
        marginBottom: 18,
        paddingLeft: 20
    },
    text: {
        fontSize: 15,
    },
    icon: {
        borderRadius: 100,
        backgroundColor: Colors.background,
        elevation: 7,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

const mapStateToProps = ({user}) => ({
    user
});

export default connect(mapStateToProps)(DrawerContent)
