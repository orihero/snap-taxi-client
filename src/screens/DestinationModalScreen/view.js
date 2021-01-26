import React, {useState} from 'react';
import {View, Modal, TouchableOpacity, TouchableWithoutFeedback, TextInput, FlatList} from "react-native";

import styles from "./styles";
import BackButtonIcon from "../../assets/images/BackButtonIcon";
import {Regular, SemiBold} from "../../components/Layout/AppText";
import {localization} from "../../services/Localization";

const DestinationModalScreenView = (
    {
        visible,
        onAddressSelect,
        closeModal,
        searchOrigin,
        origin,
        setOrigin,
        result,
        text,
        setText,
        searchDestination,
        originResult,
        bookings,
        setIsDestSelecting,
    }) => {

    const [isFocused, setIsFocused] = useState(false);

    return (
        <Modal visible={visible} onRequestClose={closeModal}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.btn} onPress={closeModal}>
                        <BackButtonIcon/>
                    </TouchableOpacity>
                    <SemiBold style={styles.title}>Пункт назначение</SemiBold>
                </View>
                <View style={[styles.selected]}>
                    <View style={{marginLeft: 13, flex: 1}}>
                        <View style={styles.row}>
                            <View style={[styles.addressCircle]}>
                                <View style={styles.innerCircle}/>
                            </View>
                            <TextInput
                                style={[styles.directionText, styles.input]}
                                onFocus={() => setIsFocused(true)}
                                onChangeText={text1 => {
                                    setOrigin(text1);
                                    searchOrigin();
                                }}
                                value={origin}
                                placeholder={localization.whereAreWeGoing}
                            />
                        </View>
                        <TouchableWithoutFeedback onPress={() => null}>
                            <View>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <View style={[styles.addressCircle, {backgroundColor: 'red'}]}>
                                        <View style={styles.innerCircle}/>
                                    </View>
                                    <TextInput
                                        autoFocus
                                        style={[styles.directionText, styles.input]}
                                        onFocus={() => setIsFocused(false)}
                                        onChangeText={text1 => {
                                            setText(text1);
                                            searchDestination();
                                        }}
                                        value={text}
                                        placeholder={localization.whereAreWeGoing}
                                    />
                                    <TouchableOpacity style={styles.map} onPress={() => {
                                        setIsDestSelecting(true);
                                        closeModal()
                                    }}>
                                        <Regular>Карта</Regular>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </View>
            </View>
            {
                !isFocused && (text ?
                    <FlatList
                        style={{flex: 1, marginTop: 20}}
                        contentContainerStyle={styles.flatList}
                        data={result}
                        renderItem={({item}) => (
                            <TouchableOpacity
                                style={styles.address}
                                key={item.GeoObject.name}
                                onPress={() => onAddressSelect(item)}
                            >
                                <SemiBold>{item.GeoObject.name}</SemiBold>
                                <Regular style={styles.addressDescription}>{item.GeoObject.description}</Regular>
                            </TouchableOpacity>
                        )}
                    /> : <FlatList
                        style={{flex: 1, marginTop: 20}}
                        contentContainerStyle={styles.flatList}
                        data={bookings}
                        renderItem={({item}) => (
                            item.routes[1] && <TouchableOpacity
                                style={styles.address}
                                key={item.id}
                                onPress={() => onAddressSelect(item, false, true)}
                            >
                                <SemiBold>{item.routes[1].address}</SemiBold>
                                <Regular style={styles.addressDescription}>{item.routes[1].address}</Regular>
                            </TouchableOpacity>
                        )}
                    />)
            }
            {
                isFocused && (origin ?
                    <FlatList
                        style={{flex: 1, marginTop: 20}}
                        contentContainerStyle={styles.flatList}
                        data={originResult}
                        renderItem={({item}) => (
                            <TouchableOpacity
                                style={styles.address}
                                key={item.GeoObject.name}
                                onPress={() => onAddressSelect(item, true)}
                            >
                                <SemiBold>{item.GeoObject.name}</SemiBold>
                                <Regular style={styles.addressDescription}>{item.GeoObject.description}</Regular>
                            </TouchableOpacity>
                        )}
                    /> : <FlatList
                        style={{flex: 1, marginTop: 20}}
                        contentContainerStyle={styles.flatList}
                        data={bookings}
                        renderItem={({item}) => (
                            item.routes[1] && <TouchableOpacity
                                style={styles.address}
                                key={item.id}
                                onPress={() => onAddressSelect(item, true, true)}
                            >
                                <SemiBold>{item.routes[1].address}</SemiBold>
                                <Regular style={styles.addressDescription}>{item.routes[1].address}</Regular>
                            </TouchableOpacity>
                        )}
                    />)
            }


        </Modal>
    );
};

export default DestinationModalScreenView;
