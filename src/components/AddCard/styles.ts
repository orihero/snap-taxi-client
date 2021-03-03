import {StyleSheet} from "react-native";
import Colors from "../../assets/styles/Colors";

export default StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        backgroundColor: Colors.background,
        elevation: 10,
        borderRadius: 10,
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#BBBFC7',
        borderStyle: 'dashed'

    },
    text: {
        fontSize: 20,
        color: '#646974'
    }
});
