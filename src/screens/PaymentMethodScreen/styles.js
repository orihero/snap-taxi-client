import {StyleSheet} from "react-native";

export default StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        flex: 1
    },
    option: {
        flexDirection: 'row',
        marginHorizontal: 6,
        alignItems: 'center',
        paddingVertical: 14,
        borderColor: '#EAECF1',
        borderBottomWidth: 1
    },
    radioButton: {
        width: 23,
        height: 23,
        borderColor: '#B8B8B8',
        borderWidth: 2,
        borderRadius: 100,
        marginLeft: 'auto',
        justifyContent: 'center',
        alignItems: 'center'
    },
    cards: {
        marginTop: 21
    },
});
