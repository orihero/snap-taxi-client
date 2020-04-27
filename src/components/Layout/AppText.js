import React from 'react';
import {Text} from "react-native"
import Common from "../../assets/styles/Common";
import Colors from "../../assets/styles/Colors";

const Regular = ({style, children}) =>
    <Text style={[Common.regular, {color: Colors.text}, style]}>{children}</Text>;

const Bold = ({style, children}) =>
    <Text style={[Common.bold, {color: Colors.text}, style]}>{children}</Text>;

const SemiBold = ({style, children}) =>
    <Text style={[Common.semiBold, {color: Colors.text}, style]}>{children}</Text>;

const Thin = ({style, children}) =>
    <Text style={[Common.thin, {color: Colors.text}, style]}>{children}</Text>;

const Light = ({style, children}) =>
    <Text style={[Common.light, {color: Colors.text}, style]}>{children}</Text>;


export {
    Regular,
    Bold,
    SemiBold,
    Thin,
    Light
}