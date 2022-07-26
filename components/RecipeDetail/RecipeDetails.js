import { StyleSheet, Text, View } from "react-native";

const RecipeDetails = ({brew_time, brewer, type, style, textStyle}) => {
	return (
		<View style={[styles.details, style]}>
			<Text style={[styles.detailItem, textStyle]}>{brew_time}min</Text>
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
		fontWeight: "500"
	},
});
