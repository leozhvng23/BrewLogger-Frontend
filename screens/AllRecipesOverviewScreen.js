import { StyleSheet } from "react-native";

import RecipeList from "../components/RecipesList/RecipeList";
import { RECIPES} from "../data/dummy";

const AllRecipesOverviewScreen = () => {
	return <RecipeList items={RECIPES} />;
};

export default AllRecipesOverviewScreen;

const styles = StyleSheet.create({});
