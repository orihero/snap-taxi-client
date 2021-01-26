import {StyleSheet} from "react-native";

export default StyleSheet.create({
    searchResultItem: {
        flexDirection: 'row',
        marginHorizontal: 12.5,
        alignItems: 'center',
        paddingBottom: 6.5,
        marginBottom: 11.5,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(170,174,183, 0.37)',
        zIndex: 9999,
    },
    noBorder: {
        borderBottomWidth: 0,
        paddingBottom: 0,
    }
});
