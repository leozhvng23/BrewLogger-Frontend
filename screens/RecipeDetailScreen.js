import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { useHeaderHeight } from '@react-navigation/elements';

import List from "../components/RecipeDetail/List";
import Subtitle from "../components/RecipeDetail/Subtitle";
import RecipeDetails from "../components/RecipeDetails";
import { RECIPES } from "../data/dummy";

// id,
// // beanId,
// // name,
// // imageUrl,
// // brewer,
// // brewType,
// // ratio,
// // description,
// // duration,
// // steps

function RecipeDetailScreen({ route }) {

    const headerHeight = useHeaderHeight();

	const rid = route.params.rid;

	const selectedRecipe = RECIPES.find((recipe) => recipe.id === rid);

	return (
		<ScrollView style={[styles.rootContainer,{paddingTop: (headerHeight - 20)}]}>
			<Image style={styles.image} source={{ uri: selectedRecipe.imageUrl }} />
			<Text style={styles.title}>{selectedRecipe.name}</Text>
			<RecipeDetails
				duration={selectedRecipe.duration}
				brewer={selectedRecipe.brewer}
				brewType={selectedRecipe.brewType}
				ratio={selectedRecipe.ratio}
				textStyle={styles.detailText}
			/>

			<View style={styles.descriptionContainer}>
				<Text style={styles.description}>{selectedRecipe.description}</Text>
			</View>

			<View style={styles.listOuterContainer}>
				<View style={styles.listContainer}>
					<Subtitle>Steps</Subtitle>
					<List data={selectedRecipe.steps} />
				</View>
			</View>
		</ScrollView>
	);
}

export default RecipeDetailScreen;

const styles = StyleSheet.create({
	rootContainer: {
		marginBottom: 32,
	},
	image: {
		width: "100%",
		height: 350,
	},
	title: {
		fontWeight: "bold",
		fontSize: 24,
		margin: 8,
		textAlign: "center",
		color: "white",
	},
	detailText: {
		color: "white",
	},
	listOuterContainer: {
		alignItems: "center",
	},
	listContainer: {
		width: "80%",
	},
});
