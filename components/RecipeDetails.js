import { StyleSheet, Text, View } from "react-native";
import React from "react";

const RecipeDetails = ({duration, brewer, brewType, ratio, style, textStyle}) => {
	return (
		<View style={[styles.details, style]}>
			<Text style={[styles.detailItem, textStyle]}>{duration}m</Text>
			<Text style={[styles.detailItem, textStyle]}>{brewer}</Text>
			<Text style={[styles.detailItem, textStyle]}>{brewType}</Text>
            <Text style={[styles.detailItem, textStyle]}>{ratio}</Text>
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
