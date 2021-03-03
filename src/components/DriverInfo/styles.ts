import {StyleSheet} from "react-native";
import Colors from "../../assets/styles/Colors";
import Screen from "../../helpers/Dimensions";

export default StyleSheet.create({
    topBlock: {
        width: Screen.width - 32,
        alignSelf: 'center',
        marginBottom: 6,
    },
    topBlockContent: {
        elevation: 10,
        borderRadius: 15,
        backgroundColor: Colors.background,
        paddingHorizontal: 8,
        paddingVertical: 11,
        borderWidth: 2,
        borderColor: '#fff',
    },
    img: {
        borderRadius: 100,
        borderWidth: 2,
        width: 50,
        height: 50,
        justifyContent: 'flex-end',
        alignItems: 'center',
        borderColor: '#EDEEF2',
        backgroundColor: '#fff',
        elevation: 5,
        marginRight: 4
    },
    icon: {
        width: 44,
        height: 44,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5,
        backgroundColor: '#fff',
		shadowColor: '#000',
		shadowOffset: {
			height: 44,
			width: 44
		},
		shadowRadius: 100,
		shadowOpacity: 0.3
    },
    func: {
        flexDirection: 'row',
        marginTop: Screen.width > 400 ? 0 : 10,
        marginLeft: Screen.width > 400 ? 'auto' : 0
    },
    wrapper: {
        flexDirection: Screen.width > 400 ? 'row' : 'column',
        alignItems: 'center',
    }
});
