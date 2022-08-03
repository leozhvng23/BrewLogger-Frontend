import { useLayoutEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { useNavigation, DrawerActions } from "@react-navigation/native";
// import { useContext } from 'react';

import IconButton from "../components/UIElements/Buttons/IconButton";
import RecipeList from "../components/RecipesList/RecipeList";
// import { FavoritesContext } from '../store/context/favorites-context';
import { RECIPES } from "../data/dummy";

function FavoritesScreen() {
	//   const favoriteRecipesCtx = useContext(FavoritesContext);
	const navigation = useNavigation();

	useLayoutEffect(() => {
		navigation.setOptions({
			headerLeft: () => {
				return (
					<IconButton
						icon="filter"
						color="black"
						onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
					/>
				);
			},
		});
	}, [navigation]);
	
    const favoriteRecipeIds = useSelector(state => state.favoriteRecipes.ids)
	const favoriteRecipes = RECIPES.filter((recipe) =>
		favoriteRecipeIds.includes(recipe.id)
	);

	if (favoriteRecipes.length === 0) {
		return (
			<View style={styles.rootContainer}>
				<Text style={styles.text}>You have no favorite recipes yet.</Text>
			</View>
		);
	}

	return <RecipeList items={favoriteRecipes} />;
}

export default FavoritesScreen;

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
});
