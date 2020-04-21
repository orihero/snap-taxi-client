import React from 'react'
import {View, Text, StyleSheet, Dimensions} from "react-native"
import AddIcon from "./AddIcon";
import LocationIcon from "../assets/images/LocationIcon";
import Colors from "../assets/styles/Colors";

export const DestContent = ({containerStyle, style}) => (
    <View style={[styles.container, containerStyle, style]}>
        <View style={styles.icons}>
            <LocationIcon/>
            <View style={styles.smallCircle}/>
            <View style={styles.smallCircle}/>
            <View style={styles.smallCircle}/>
            <View style={styles.smallCircle}/>
            <View style={styles.circle}/>
        </View>
        <View style={{marginLeft: 13, flex: 1}}>
            <View style={styles.textWrapper}>
                <Text style={styles.textColor}>Едем из</Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={styles.directionText}>Саларская набережаная 35</Text>
                    <AddIcon style={{marginLeft: 'auto'}}/>
                </View>
            </View>
            <View>
                <Text style={styles.textColor}>Едем в</Text>
                <Text style={styles.directionText}>Дом</Text>
            </View>
        </View>
    </View>
);

const SelectedDestination = () => {
    return (
        <View>
            <View style={{alignItems: 'center'}}>
                <DestContent style={styles.additionalContainerStyles}/>
                <View style={styles.searchBottomFragment}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 15,
        alignSelf: 'center',
        flexDirection: 'row',
        minHeight: 107,
        paddingVertical: 12,
    },
    additionalContainerStyles: {
        width: Dimensions.get('window').width - 30,
        marginTop: 22,
        backgroundColor: '#fff',
        paddingHorizontal: 17,
        elevation: 20,
        zIndex: 2
    },
    searchBottomFragment: {
        width: Dimensions.get('window').width - 48,
        backgroundColor: '#fff',
        borderRadius: 250,
        height: 20,
        position: 'absolute',
        bottom: -3,
        elevation: 20,
        zIndex: 1
    },
    textColor: {
        color: '#aaaeb7',
    },
    directionText: {
        fontSize: 15,
        color: '#232323',
        fontWeight: 'bold',
    },
    textWrapper: {
        borderBottomWidth: 1,
        borderBottomColor: '#eaecf1',
        paddingBottom: 8,
        marginBottom: 6
    },
    circle: {
        width: 8,
        height: 8,
        backgroundColor: Colors.blue,
        borderRadius: 100
    },
    icons: {
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 30,
        marginTop: 3
    },
    smallCircle: {
        width: 3,
        height: 3,
        backgroundColor: '#B6C5EE',
        borderRadius: 100
    }
});


export default SelectedDestination;