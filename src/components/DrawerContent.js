import {View, Text, StyleSheet, TouchableWithoutFeedback} from "react-native"
import React from "react";
import routes from "../navigation/DrawerNavigation/routes";
import UserInfo from "./UserInfo";


const DrawerContent = (props) => {
    return (
        <View style={styles.container}>
            <UserInfo/>
            <View>
                {
                    routes.map((route, item) => {
                        return (
                            route.label &&
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
            <Text style={{marginTop: 'auto', fontSize: 15, marginLeft: 20}}>Версия 2.0</Text>
        </View>
    );
};

const DrawerItem = ({label, name, navigation}) => {
    return (
        <TouchableWithoutFeedback onPress={() => navigation.navigate(name)}>
            <View style={styles.itemStyle}>
                <Text style={styles.text}>{label}</Text>
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
        paddingBottom: 35
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