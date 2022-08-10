import { useLayoutEffect, useEffect, useState, useCallback } from "react";
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
import { setMyRecipes } from "../store/redux/recipes";
import { useHeaderHeight } from "@react-navigation/elements";
import { selectMyRecipes } from "../util/selectors";

const MyRecipesScreen = ({ navigation }) => {
	const [isFetching, setIsFetching] = useState(true);
	const [error, setError] = useState();
	const uid = useSelector((state) => state.user.uid);
	const dispatch = useDispatch();
	const headerHeight = useHeaderHeight();

	const addRecipeHandler = () => {
		navigation.navigate("ManageRecipe");
	};

	const setHeaders = useCallback(() => {
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
	}, []);

	useLayoutEffect(() => {setHeaders()}, [navigation]);

	const fetchRecipes = useCallback(async () => {
		setIsFetching(true);
		try {
			const [recipes, ids] = await getRecipesByUserId(uid);
			dispatch(setMyRecipes({ recipes: recipes, ids: ids }));
		} catch (err) {
			setError("Could not fetch recipes.");
		}
		setIsFetching(false);
		// setTimeout(() => setIsFetching(false), 2000);
	}, []);

	useEffect(() => {
		fetchRecipes();
	}, []);

	const myRecipes = selectMyRecipes();

	if (isFetching) {
		return <LoadingOverlay />;
	}
	// const errorHandler = () => setError(null);

	if (error && !isFetching) {
		// return <ErrorOverlay message={error} onConfirm={errorHandler} />;
		return <ErrorOverlay message={error} />;
	}

	return (
		<RecipeList
			items={myRecipes}
			style={[styles.recipeList, { paddingTop: headerHeight }]}
		/>
	);
};

export default MyRecipesScreen;

const styles = StyleSheet.create({
	recipeList: {
		paddingBottom: 100,
		paddingHorizontal: "3%",
	},
});
