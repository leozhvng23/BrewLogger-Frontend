import { useLayoutEffect, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { DrawerActions } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";

import IconButton from "../components/UIElements/IconButton";
import AddButton from "../components/UIElements/AddButton";
import RecipeList from "../components/RecipesList/RecipeList";
import { getRecipesByUserId } from "../util/http";
import { setRecipes } from "../store/redux/recipes";

const AllRecipesOverviewScreen = () => {

	const uid = useSelector((state) => state.user.uid);

	const navigation = useNavigation();
	const dispatch = useDispatch();

	const addRecipeHandler = () => {
		navigation.navigate("ManageRecipe");
	};
	useEffect(() => {
		const fetchRecipes = async () => {
			const recipes = await getRecipesByUserId(uid);
			dispatch(setRecipes({recipes: recipes}));
		};
		fetchRecipes();
	}, []);

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
			headerRight: () => <AddButton onAddData={addRecipeHandler} />,
		});
	}, [navigation]);

	const recipes = useSelector((state) => state.recipes.recipes)

	return <RecipeList items={recipes} />;
};

export default AllRecipesOverviewScreen;

const styles = StyleSheet.create({});
