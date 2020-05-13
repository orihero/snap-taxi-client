import React from 'react';
import Colors from "../../assets/styles/Colors";
import {Bold} from "../Layout/AppText";
import Screen from "../../helpers/Dimensions";

const TextWithIcon = ({active, Icon, children}) => (
    <>
        <Icon style={{marginRight: 20}} color={active ? Colors.blue : '#000'}/>
        <Bold style={{
            color: active ? Colors.blue : '#000',
            fontSize: Screen.width > 400 ? 15 : 13,
            width: '70%'
        }}>{children}</Bold>
    </>
);

export default TextWithIcon;
