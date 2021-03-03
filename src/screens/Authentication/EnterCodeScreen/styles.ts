import {StyleSheet} from "react-native";

import Colors from "../../../assets/styles/Colors";
import Screen from "../../../helpers/Dimensions";

export default StyleSheet.create({
    registrationContainer: {
        alignItems: 'center',
        marginHorizontal: 15,
        paddingTop: 57,
    },
    registrationForm: {
        borderRadius: 10,
        width: '100%',
        borderWidth: 2,
        borderColor: '#fff',
        height: 52,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: "15%",
        backgroundColor: Colors.background,
        elevation: 10,
    },
    heading: {
        fontSize: Screen.width > 400 ? 20 : 15,
        marginBottom: 46
    },
    icon: {
        marginLeft: 16.6,
        marginRight: 19.6,
        marginTop: 10
    },
    bottom: {
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 50
    },
    input: {
        color: '#858585',
        fontSize: 16,
        fontFamily: 'SFUIDisplay-Regular',
        flex: 1,
    },
    confirm: {
        color: '#858585',
        fontSize: 14,
        textAlign: 'center'
    },
    time: {
        fontSize: 14,
        textAlign: 'center'
    }
});
