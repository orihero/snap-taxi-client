import React from 'react';
import {View, StyleSheet} from 'react-native'
import TextWithIcon from "./TextWithIcon";
import CustomSwitch from "./CustomSwitch";

const SwitchWithText = ({value, text, setValue, Icon, style}) => {
    return (
        <View style={[styles.container, style]}>
            <TextWithIcon Icon={Icon}
                          active={value}>{text}</TextWithIcon>
            <CustomSwitch value={value} onValueChange={() => setValue(!value)}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: 6,
        alignItems: 'center',
        paddingVertical: 13,
        borderColor: '#EAECF1',
        borderBottomWidth: 1,
        overflow: 'visible'
    }
})

export default SwitchWithText;
