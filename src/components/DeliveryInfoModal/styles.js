import {StyleSheet} from "react-native";
import Colors from "../../assets/styles/Colors";

export default StyleSheet.create({
    container: {
        paddingTop: 50,
        paddingHorizontal: 16,
        backgroundColor: 'rgba(0,0,0,.2)',
        flex: 1,
        paddingBottom: 20
    },
    topBlock: {
        width: '100%',
        alignSelf: 'center',
        marginBottom: 6,
    },
    topBlockContent: {
        elevation: 10,
        borderRadius: 15,
        backgroundColor: Colors.background,
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderWidth: 2,
        borderColor: '#fff',
    },
    addressItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 10,
        borderBottomColor: '#EAECF1',
        borderBottomWidth: 1,
        marginBottom: 16
    },
    textarea: {
        paddingHorizontal: 16,
        borderRadius: 10,
        elevation: 10,
        backgroundColor: Colors.background,
        height: 80,
        marginTop: 13,
    },
    bottomBlock: {
        width: '100%',
        alignSelf: 'center',
        backgroundColor: Colors.background,
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderBottomEndRadius: 15,
        borderBottomStartRadius: 15,
        paddingBottom: 23,
        paddingTop: 13,
        borderWidth: 2,
        borderColor: '#fff',
        borderTopWidth: 0,

    }
});
