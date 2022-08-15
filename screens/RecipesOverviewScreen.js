import { useLayoutEffect } from "react";
import { StyleSheet, View, Text} from "react-native";
import { useSelector } from "react-redux";
import { useHeaderHeight } from "@react-navigation/elements";

import RecipeList from "../components/RecipesList/RecipeList";
import { RECIPES, BEANS } from "../data/dummy";

const RecipesOverviewScreen = ({ route, navigation }) => {
	const bid = route.params.beanId;
	const headerHeight = useHeaderHeight();

	const displayedRecipes = RECIPES.filter((recipeItem) => {
		return recipeItem.bid === bid;
	});

	useLayoutEffect(() => {
		const beanName = BEANS.find((bean) => bean.id === bid).name;
		navigation.setOptions({ title: beanName });
	}, [bid, navigation]);

	return displayedRecipes.length === 0 ? (
		<View style={styles.rootContainer}>
			<Text style={styles.text}>You have no recipes yet.</Text>
		</View>
	) : (
		<RecipeList items={displayedRecipes} style={[styles.recipeList, { paddingTop: headerHeight }]} />
	);
};

export default RecipesOverviewScreen;


const styles = StyleSheet.create({
	rootContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		fontSize: 16,
		fontWeight: "500",
		color: "rgba(0,0,0,0.3)",
	},
	recipeList: {
		paddingBottom: 100,
		paddingHorizontal: "3%",
	},
});