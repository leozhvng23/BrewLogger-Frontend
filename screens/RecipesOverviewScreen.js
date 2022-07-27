import { View, Text, StyleSheet, FlatList } from "react-native";

import RecipeItem from "../components/RecipeItem";
import { RECIPES } from "../data/dummy";

const RecipesOverviewScreen = ({ route }) => {
	const bid = route.params.beanId;

	const displayedRecipes = RECIPES.filter((recipe) => recipe.beanId === bid);
    console.log(displayedRecipes);

	const renderRecipe = (data) => {
		const recipe = data.item;

		const recipeProps = {
			name: recipe.name,
			imageUrl: recipe.imageUrl,
			brewer: recipe.brewer,
			brewType: recipe.brewType,
			duration: recipe.duration,
		};

		return <RecipeItem {...recipeProps} />;
	};

	return (
		<View style={styles.container}>
			<FlatList
				data={displayedRecipes}
				keyExtractor={(item) => item.id}
				renderItem={renderRecipe}
			/>
		</View>
	);
};

export default RecipesOverviewScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
	},
});
