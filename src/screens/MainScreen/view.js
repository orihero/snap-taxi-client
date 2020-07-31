import React from 'react';
import {View, TouchableWithoutFeedback} from 'react-native'

import styles from "./styles";
import MapScreen from "../MapScreen";
import Search from "../../components/Search/Search";
import Header from "../../components/Header/Header";
import Button from "../../components/Button";
import CursorIcon from "../../assets/images/CursorIcon";


const MainScreenView = ({navigation, isSearchActive, setSearchActive}) => {
    return (
        <View style={{flex: 1}}>
            <Header navigation={navigation}/>
            <MapScreen/>
            <Search
                navigation={navigation}
                setSearchActive={setSearchActive}
                isSearchActive={isSearchActive}
            />
            {
                !isSearchActive &&
                <View style={{marginTop: 'auto', marginHorizontal: 10}}>
                    <TouchableWithoutFeedback>
                        <View style={styles.circleIcon}>
                            <CursorIcon/>
                        </View>
                    </TouchableWithoutFeedback>
                    <Button
                        title={'Далее'}
                        onPress={() => navigation.navigate('SelectCar')}
                        containerStyle={{marginBottom: 10}}
                    />
                </View>
            }
        </View>
    );
};

export default MainScreenView;

