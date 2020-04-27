import {View, StyleSheet, TouchableWithoutFeedback, ScrollView} from "react-native"
import React from "react";
import routes from "../navigation/DrawerNavigation/routes";
import UserInfo from "./UserInfo";
import Colors from "../assets/styles/Colors";
import {Regular} from "./Layout/AppText";


const DrawerContent = (props) => {
    return (
        <ScrollView style={styles.container}>
            <UserInfo/>
            <View>
                {
                    routes.map((route, item) => {
                        return (
                            route.label && !route.link &&
                            <DrawerItem
                                key={route.label}
                                label={route.label}
                                name={route.name}
                                {...props}
                            />
                        )
                    })
                }
            </View>
            <Regular style={{marginTop: 'auto', fontSize: 15, marginLeft: 20}}>Версия 2.0</Regular>
        </ScrollView>
    );
};

const DrawerItem = ({label, name, navigation}) => {
    return (
        <TouchableWithoutFeedback onPress={() => navigation.navigate(name)}>
            <View style={styles.itemStyle}>
                <Regular style={styles.text}>{label}</Regular>
            </View>
        </TouchableWithoutFeedback>
    )
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 66,
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
    }
});

export default DrawerContent