import { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { DrawerActions } from "@react-navigation/native";

import IconButton from "../components/UIElements/IconButton";
import AddButton from "../components/UIElements/AddButton";
import RecipeList from "../components/RecipesList/RecipeList";
import { RECIPES } from "../data/dummy";

const AllRecipesOverviewScreen = () => {
	const navigation = useNavigation();

	const addRecipeHandler = () => {
		console.log("added!")
	}

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
			headerRight: () => <AddButton onAddData={addRecipeHandler}/>,
		});
	}, [navigation]);

	return <RecipeList items={RECIPES} />;
};

export default AllRecipesOverviewScreen;

const styles = StyleSheet.create({});
