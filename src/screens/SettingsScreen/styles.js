import {StyleSheet} from "react-native";
import Colors from "../../assets/styles/Colors";

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    row: {
        marginHorizontal: 15,
        height: 52,
        paddingHorizontal: 12.5,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        elevation: 2,
        marginBottom: 19,
        backgroundColor: Colors.background,
        borderWidth: 2,
        borderColor: '#fff'
    },
    text: {
        fontSize: 16,
        color: '#858585'
    },
    option: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 14,
        borderColor: '#EAECF1',
        borderBottomWidth: 1,
    },
});
