import {StyleSheet} from "react-native";

import Screen from "../../../helpers/Dimensions";
import Colors from "../../../assets/styles/Colors";

export default StyleSheet.create({
    registrationContainer: {
        alignItems: 'center',
        marginHorizontal: 15,
        paddingTop: 57,
    },
    registrationForm: {
        marginBottom: Screen.height > 700 ? 84 : 42,
        borderRadius: 10,
        width: '100%',
        height: 52,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.background,
        borderWidth: 2,
        borderColor: '#fff',
        elevation: 10,
    },
    heading: {
        fontSize: Screen.width > 400 ? 20 : 15,
        marginBottom: 46
    },
    phoneIcon: {
        marginLeft: 18, marginRight: 15.73
    },
    auth: {
        color: '#858585',
        fontSize: 13,
        textAlign: 'center'
    },
    privacy: {
        color: '#858585',
        marginBottom: 50
    },
    mask: {
        color: '#232323',
        fontSize: 16,
        flex: 1,
        top: -0.6
    },
    prefix: {
        color: '#232323',
        fontSize: 16
    }
});
