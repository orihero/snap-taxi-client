import React from 'react';
import {Switch} from 'react-native'
import Colors from "../../assets/styles/Colors";


const CustomSwitch = ({value, onValueChange}) => (
    <Switch
        trackColor={{false: '#ECECEC', true: '#ECECEC'}}
        thumbColor={value ? Colors.blue : "#ECECEC"}
        style={{marginLeft: 'auto'}}
        value={value}
        onValueChange={onValueChange}
    />
);


export default CustomSwitch;
