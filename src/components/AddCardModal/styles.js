import {StyleSheet} from "react-native";
import Colors from "../../assets/styles/Colors";

export default StyleSheet.create({
    addCardContainer: {
        paddingHorizontal: 16,
        paddingVertical: 20,
        backgroundColor: Colors.background,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15
    },
    form: {
        backgroundColor: Colors.background,
        elevation: 10,
        padding: 18,
        borderRadius: 15,
        marginBottom: 17
    },
    inputWrapper: {
        height: 36,
        borderRadius: 12,
        borderColor: '#E5E5E5',
        borderWidth: 1,
        justifyContent: 'center',
        paddingLeft: 11
    },
    input: {
        padding: 0,
        margin: 0,
        fontSize: 15,
        color: '#646974',
        fontFamily: 'SFUIDisplay-Semibold'
    }
});
