import { StyleSheet, Text, View } from "react-native";
import List from "./List";
import Subtitle from "./Subtitle";

const RecipeGuide = ({guide, style}) => {
	return (
		<View style={[styles.listOuterContainer, style]}>
			<View style={styles.listContainer}>
				<Subtitle>Brew Guide</Subtitle>
				<List data={guide} />
			</View>
		</View>
	);
};

export default RecipeGuide;

const styles = StyleSheet.create({
    listOuterContainer: {
		alignItems: "center",
	},
    listContainer: {},
});
