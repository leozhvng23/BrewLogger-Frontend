import { useLayoutEffect, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { DrawerActions } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";

import IconButton from "../components/UIElements/Buttons/IconButton";
import AddButton from "../components/UIElements/Buttons/AddButton";
import RecipeList from "../components/RecipesList/RecipeList";
import LoadingOverlay from "../components/UIElements/Overlays/LoadingOverlay";
import ErrorOverlay from "../components/UIElements/Overlays/ErrorOverlay";
import { getRecipesByUserId } from "../util/http";
import { setRecipes } from "../store/redux/recipes";

const AllRecipesOverviewScreen = () => {
	const navigation = useNavigation();
	const addRecipeHandler = () => {
		navigation.getParent("recipesStack").navigate("ManageRecipe");
	};

	useLayoutEffect(() => {
		navigation.getParent("recipesStack").setOptions({
			headerLeft: () => {
				return (
					<IconButton
						icon="filter"
						color="black"
						onPress={() =>
							navigation
								.getParent("recipeDrawer")
								.dispatch(DrawerActions.toggleDrawer())
						}
					/>
				);
			},
			headerRight: () => <AddButton onAddData={addRecipeHandler} />,
		});
	}, [navigation]);

	const [isFetching, setIsFetching] = useState(true);
	const [error, setError] = useState();
	const uid = useSelector((state) => state.user.uid);
	const dispatch = useDispatch();

	useEffect(() => {
		const fetchRecipes = async () => {
			setIsFetching(true);
			try {
				const [recipes, ids] = await getRecipesByUserId(uid);
				dispatch(setRecipes({ recipes: recipes, ids: ids }));
			} catch (err) {
				setError("Could not fetch recipes.");
			}
			setIsFetching(false);
			// setTimeout(() => setIsFetching(false), 2000);
		};
		fetchRecipes();
	}, []);

	const recipes = useSelector((state) => state.recipes.recipes);

	if (isFetching) {
		return <LoadingOverlay />;
	}
	// const errorHandler = () => setError(null);

	if (error && !isFetching) {
		// return <ErrorOverlay message={error} onConfirm={errorHandler} />;
		return <ErrorOverlay message={error} />;
	}

	return <RecipeList items={recipes} />;
};

export default AllRecipesOverviewScreen;

const styles = StyleSheet.create({});
