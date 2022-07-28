import { View, Text, Image, StyleSheet, ScrollView, Button } from "react-native";
import { useLayoutEffect } from "react";
import { useHeaderHeight } from "@react-navigation/elements";

import List from "../components/RecipeDetail/List";
import Subtitle from "../components/RecipeDetail/Subtitle";
import RecipeDetails from "../components/RecipeDetails";
import { RECIPES } from "../data/dummy";
import IconButton from "../components/IconButton";

function RecipeDetailScreen({ route, navigation }) {
	const headerHeight = useHeaderHeight();

	const rid = route.params.rid;

	const headerButtonPressHandler = () => {
		console.log("pressed!");
	};

	useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: () => {
				return (
					<IconButton
						icon="ios-star-outline"
						color="black"
						onPress={headerButtonPressHandler}
					/>
				);
			},
		});
	}, [navigation, headerButtonPressHandler]);

	const selectedRecipe = RECIPES.find((recipe) => recipe.id === rid);

	return (
		<ScrollView
			contentContainerStyle={[styles.rootContainer, { paddingTop: headerHeight }]}
		>
			<Image style={styles.image} source={{ uri: selectedRecipe.imageUrl }} />
			<View style={styles.contentContainer}>
				<Text style={styles.title}>{selectedRecipe.name}</Text>
				<RecipeDetails
					duration={selectedRecipe.duration}
					brewer={selectedRecipe.brewer}
					brewType={selectedRecipe.brewType}
					ratio={selectedRecipe.ratio}
					textStyle={styles.detailText}
				/>

				<Text style={styles.description}>{selectedRecipe.description}</Text>

				<View style={styles.listOuterContainer}>
					<View style={styles.listContainer}>
						<Subtitle>Steps</Subtitle>
						<List data={selectedRecipe.steps} />
					</View>
				</View>
			</View>
		</ScrollView>
	);
}

export default RecipeDetailScreen;

const styles = StyleSheet.create({
	rootContainer: {
		paddingBottom: 50,
	},
	image: {
		width: "100%",
		height: 350,
	},
	title: {
		fontWeight: "bold",
		fontSize: 24,
		marginTop: "10%",
		marginBottom: "5%",
		textAlign: "center",
	},
	contentContainer: {
		alignItems: "center",
		paddingHorizontal: "3%",
	},
	description: {
		marginVertical: "5%",
		paddingHorizontal: "5%",
		fontSize: 16,
	},
	detailText: {
		fontSize: 16,
		color: "#7c7c7c",
		fontWeight: "500",
	},
	listOuterContainer: {
		alignItems: "center",
	},
	listContainer: {},
});
