import { StyleSheet, Text, View } from "react-native";
import React from "react";

const RecipeDetails = ({brew_time, brewer, type, style, textStyle}) => {

	const brewTime = brew_time.split(':');
	const hr = brewTime[1] === "00" ? "" : brewTime[1] + "h";
	const min = brewTime[2] === "00" ? "" : brewTime[2] + "m";

	return (
		<View style={[styles.details, style]}>
			<Text style={[styles.detailItem, textStyle]}>{hr} {min}</Text>
			<Text style={[styles.detailItem, textStyle]}>{brewer}</Text>
			<Text style={[styles.detailItem, textStyle]}>{type}</Text>
		</View>
	);
};

export default RecipeDetails;

const styles = StyleSheet.create({
	details: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 8,
	},
	detailItem: {
		marginHorizontal: 4,
		fontSize: 12,
	},
});
