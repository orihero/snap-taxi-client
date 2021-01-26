import {StyleSheet} from "react-native";
import Screen from "../../helpers/Dimensions";

export default StyleSheet.create({
    topIcon: {
        alignSelf: 'center',
        marginBottom: 35,
        display: Screen.height > 700 ? 'flex' : 'none'
    },
    container: {
        marginHorizontal: 30
    },
    addressItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 10,
        borderBottomColor: '#EAECF1',
        borderBottomWidth: 1,
        marginBottom: 16
    },
    icon: {
        marginRight: 15.3,

    }
});
