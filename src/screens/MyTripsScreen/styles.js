import {Platform, StyleSheet} from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        zIndex: 2,
		marginTop: Platform.select({
			ios: 0,
			android: -44
		}),
		zIndex: 99999
    },
});
