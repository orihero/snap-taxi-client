import {StyleSheet} from "react-native";
import Colors from "../../assets/styles/Colors";

export default StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        flex: 1
    },
    row: {
        height: 52,
        paddingHorizontal: 14.2,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: Colors.background,
        elevation: 2,
        borderWidth: 2,
        borderColor: '#fff'
    },
    text: {
        fontSize: 16,
        color: '#858585',
        flex: 1
    }
});
