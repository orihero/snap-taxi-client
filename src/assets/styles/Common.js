import {StyleSheet} from "react-native"
import Colors from "./Colors";

const Common = StyleSheet.create({
    border: {
        borderRadius: 100,
        borderColor: '#fff',
        backgroundColor: Colors.background,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    bold: {
        fontFamily: 'SFUIDisplay-Bold',
    },
    light: {
        fontFamily: 'SFUIDisplay-Light'
    },
    regular: {
        fontFamily: 'SFUIDisplay-Regular'
    },
    semiBold: {
        fontFamily: 'SFUIDisplay-Semibold',
    },
    thin: {
        fontFamily: 'SFUIDisplay-Thin'
    },
});

export default Common