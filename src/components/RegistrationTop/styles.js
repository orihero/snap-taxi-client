import {Dimensions, StyleSheet} from "react-native";
import Colors from "../../assets/styles/Colors";

export default StyleSheet.create({
    top: {
        backgroundColor: Colors.blue,
        height: Dimensions.get('window').height > 700 ? Dimensions.get('window').height * 0.4 : 150,
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    logo: {
        alignSelf: 'flex-end',
        marginBottom: Dimensions.get('window').height > 700 ? 109.18 : 50
    },
});
