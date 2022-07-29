import { useLayoutEffect } from "react";
import { StyleSheet } from "react-native";

import RecipeList from "../components/RecipesList/RecipeList";
import { RECIPES, BEANS } from "../data/dummy";

const RecipesOverviewScreen = ({ route, navigation }) => {
	const bid = route.params.beanId;

	const displayedRecipes = RECIPES.filter((recipeItem) => {
		return recipeItem.beanId === bid;
	});

	useLayoutEffect(() => {
		const beanName = BEANS.find((bean) => bean.id === bid).name;
		navigation.setOptions({ title: beanName });
	}, [bid, navigation]);

	return <RecipeList items={displayedRecipes} />;
};

export default RecipesOverviewScreen;

const styles = StyleSheet.create({});
