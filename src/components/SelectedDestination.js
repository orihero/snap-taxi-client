import React, {useState} from 'react'
import {View, Text, StyleSheet, Dimensions} from "react-native"
import AddIcon from "./AddIcon";
import LocationIcon from "../assets/images/LocationIcon";

const SelectedDestination = () => {
    const [value, setValue] = useState();
    return (
        <View>
            <View style={{alignItems: 'center'}}>
                <View style={styles.container}>
                    <View>
                        <LocationIcon/>
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
                <View style={styles.searchBottomFragment}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width - 30,
        alignSelf: 'center',
        backgroundColor: '#fff',
        marginTop: 22,
        flexDirection: 'row',
        paddingHorizontal: 17,
        minHeight: 107,
        paddingVertical: 12,
        borderRadius: 15,
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
        fontSize: 20,
        color: '#232323',
        fontWeight: 'bold',
    },
    textWrapper: {
        borderBottomWidth: 1,
        borderBottomColor: '#eaecf1',
        paddingBottom: 8,
        marginBottom: 6
    }
});


export default SelectedDestination;