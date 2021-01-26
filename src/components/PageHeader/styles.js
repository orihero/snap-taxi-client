import {StyleSheet} from "react-native";
import Colors from "../../assets/styles/Colors";

export default StyleSheet.create({
    container: {
        paddingVertical: 34,
        backgroundColor: Colors.blue,
        borderBottomEndRadius: 15,
        borderBottomStartRadius: 15,
        marginBottom: 35,
        zIndex: -1
    },
    header: {
        flexDirection: 'row',
        paddingHorizontal: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: '#fff',
        fontSize: 18,
    }
});
