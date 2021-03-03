import {Platform, StyleSheet} from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
		marginTop: Platform.select({
			ios: 100,
			android: -44
		}),
		zIndex: 99999
    },
});
