import { useEffect, useLayoutEffect, useRef } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { useHeaderHeight } from '@react-navigation/elements';

import RecipeItem from "../components/RecipeItem";
import { RECIPES, BEANS } from "../data/dummy";



const RecipesOverviewScreen = ({ route, navigation }) => {

	const headerHeight = useHeaderHeight();

	const bid = route.params.beanId;

	const displayedRecipes = RECIPES.filter((recipe) => recipe.beanId === bid);


	useLayoutEffect(() => {
		const beanName = BEANS.find((bean) => bean.id === bid).name;
		navigation.setOptions({ title: beanName });
	}, [bid, navigation]);

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
		<View style={[styles.container]}>
			<FlatList
				data={displayedRecipes}
				keyExtractor={(item) => item.id}
				renderItem={renderRecipe}
				scrollsToTop
				contentContainerStyle={{ paddingTop: headerHeight, paddingBottom: 50 }} 
			/>
		</View>
	);
};

export default RecipesOverviewScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16
	},
});
