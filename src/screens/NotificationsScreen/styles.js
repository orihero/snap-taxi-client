import {StyleSheet} from "react-native";
import Colors from "../../assets/styles/Colors";

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    messageItem: {
        marginTop: 5,
        marginHorizontal: 15,
        marginBottom: 15,
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 15,
        elevation: 10
    },
    messageTitle: {
        fontSize: 15
    },
});
