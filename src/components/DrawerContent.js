import {View, StyleSheet, TouchableWithoutFeedback, ScrollView, Animated, Linking} from "react-native"
import React from "react";
import routes from "../navigation/DrawerNavigation/routes";
import UserInfo from "./UserInfo";
import Colors from "../assets/styles/Colors";
import {Regular} from "./Layout/AppText";
import Screen from "../helpers/Dimensions";


const DrawerContent = (props) => {
    const scrollY = new Animated.Value(0);
    return (
        <View style={styles.container}>
            <UserInfo scrollY={scrollY}/>
            <Animated.ScrollView
                style={{marginBottom: 20}}
                scrollEventThrottle={16}
                showsVerticalScrollIndicator={false}
                onScroll={Animated.event([{
                    nativeEvent: {
                        contentOffset: {y: scrollY}
                    }
                }], {useNativeDriver: false})}>
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
            </Animated.ScrollView>
            <Regular style={{position: 'absolute', fontSize: 15, bottom: 10, left: 35}}>Версия 2.0</Regular>
        </View>
    );
};

const DrawerItem = ({label, name, navigation, url}) => {
    return (
        <TouchableWithoutFeedback
            onPress={() => !url ? navigation.navigate(name) : Linking.openURL(url)}>
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
    }
});

export default DrawerContent
