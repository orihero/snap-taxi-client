import {StyleSheet} from "react-native";
import Colors from "../../assets/styles/Colors";

export default StyleSheet.create({
    shadow: {
        elevation: 10,
        alignSelf: 'center',
        borderRadius: 15,
        overflow: 'hidden'
    },
    content: {
        backgroundColor: Colors.background,
        paddingHorizontal: 15,
        borderWidth: 2,
        borderColor: '#fff',
        borderTopWidth: 0
    },
    tripItem: {
        marginBottom: 20,
    },
    textWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 8,
        paddingBottom: 12,
        paddingHorizontal: 6,
        borderTopWidth: 1,
        borderTopColor: '#EAECF1'
    },
    text: {
        color: '#646974'
    }
});
