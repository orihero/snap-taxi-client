import {Dimensions, StyleSheet} from "react-native";
import Colors from "../../assets/styles/Colors";

export default StyleSheet.create({
    container: {
        width: Dimensions.get('window').width - 30,
        alignSelf: 'center',
        backgroundColor: Colors.background,
        borderWidth: 2,
        borderColor: '#fff',
        marginTop: 32,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 18,
        borderRadius: 250,
        justifyContent: 'center',
        elevation: 20,
        zIndex: 999
    },
    input: {
        width: '79%',
        color: '#454F63',
        fontSize: 16,
        height: '100%',
        fontFamily: 'SFUIDisplay-Light',
    },
    searchResult: {
        alignSelf: 'center',
        width: Dimensions.get('window').width - 64,
        backgroundColor: Colors.background,
        borderWidth: 2,
        borderColor: '#fff',
        paddingBottom: 27.7,
        paddingTop: 30,
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20,
        zIndex: 2,
        paddingHorizontal: 12.5
    },
    main: {
        color: '#1A1C20',
        fontSize: 15
    },
    secondary: {
        color: '#646974',
        marginRight: 55,
        width: '90%'
    },
    resultItem: {
        backgroundColor: Colors.background,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 6.5,
        paddingTop: 11.5,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(170,174,183, 0.37)',
        zIndex: 9999,
    }
});
