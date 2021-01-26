import {StyleSheet} from "react-native";
import Screen from "../../helpers/Dimensions";
import Colors from "../../assets/styles/Colors";

export default StyleSheet.create({
    icon: {
        alignSelf: 'center',
        marginBottom: 21.7,
        // display: Screen.height > 700 ? 'flex' : 'none'
    },
    fz: {
        fontSize: Screen.width > 400 ? 14 : 13
    },
    heading: {
        fontSize: Screen.width > 400 ? 22 : 18,
        alignSelf: 'center',
        marginBottom: 11
    },
    textarea: {
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 10,
        elevation: 10,
        backgroundColor: Colors.background,
        minHeight: 80,
        marginHorizontal: 10,
        marginTop: 13,
        marginBottom: 40
    }
});
