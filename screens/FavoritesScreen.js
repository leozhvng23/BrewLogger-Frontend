import { useCallback, useLayoutEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { DrawerActions } from "@react-navigation/native";
import { useHeaderHeight } from "@react-navigation/elements";

import IconButton from "../components/UIElements/Buttons/IconButton";
import RecipeList from "../components/RecipesList/RecipeList";
import { selectFavoriteRecipes } from "../util/selectors";

const FavoritesScreen = ({ navigation }) => {
	const headerHeight = useHeaderHeight();

	const setHeader = useCallback(() => {
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
	}, []);

	useLayoutEffect(() => {
		setHeader();
	}, [navigation]);

	const favoriteRecipes = selectFavoriteRecipes();

	if (favoriteRecipes.length === 0) {
		return (
			<View style={styles.rootContainer}>
				<Text style={styles.text}>You have no favorite recipes yet.</Text>
			</View>
		);
	}

	return (
		<RecipeList
			items={favoriteRecipes}
			style={[styles.recipeList, { paddingTop: headerHeight }]}
		/>
	);
};

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
	recipeList: {
		paddingBottom: 100,
		paddingHorizontal: "3%",
	},
});
