import { StyleSheet, Text, View } from "react-native";
import React from "react";

const TextTitle = ({ children, style, textStyle }) => {
	return (
		<View style={[styles.titleContainer, style]}>
			<Text style={[styles.title, textStyle]}>{children}</Text>
		</View>
	);
};

export default TextTitle;

const styles = StyleSheet.create({
	titleContainer: {
		marginHorizontal: "5%",
		paddingBottom: 10,
		paddingHorizontal: 5,
        borderBottomWidth: 0.5,
        borderBottomColor: "rgba(0,0,0,0.3)",
		justifyContent: "center",
        margin: 5
	},
	title: {
		fontSize: 18,
		fontWeight: "500",
        fontFamily: "Futura"
	},
});
