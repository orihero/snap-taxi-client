import {StyleSheet} from "react-native";
import Colors from "../../assets/styles/Colors";

export default StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 30
    },
    inputWrapper: {
        paddingBottom: 10,
        marginBottom: 10,
        borderBottomColor: Colors.border,
        borderBottomWidth: 1
    },
    input: {
        fontWeight: 'bold',
        color: '#000',
        padding: 0
    }
});
