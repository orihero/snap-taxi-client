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
        height: 59,
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
        zIndex: 2
    },
});
