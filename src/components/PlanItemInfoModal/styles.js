import {StyleSheet} from "react-native";
import Screen from "../../helpers/Dimensions";

export default StyleSheet.create({
    heading: {
        fontSize: Screen.width > 400 ? 22 : 18,
        alignSelf: 'center',
        marginBottom: 48,
        marginTop:  Screen.height > 700 ? 0 : 40
    },
    textContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 6,
        paddingBottom: 12,
        borderBottomColor: '#EAECF1',
        borderBottomWidth: 1,
        marginBottom: 10
    },
    icon: {
        alignSelf: 'center',
        marginBottom: 21.7,
        display: Screen.height > 700 ? 'flex' : 'none'
    }
});
