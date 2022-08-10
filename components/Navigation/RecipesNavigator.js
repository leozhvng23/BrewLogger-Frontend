import { StyleSheet } from "react-native";
import "react-native-gesture-handler";

import DrawerNavigator from "./DrawerNavigator";
import StackNavigator from "./StackNavigator";
import MyRecipesScreen from "../../screens/MyRecipesScreen";
import BeansScreen from "../../screens/BeansScreen";
import FavoritesScreen from "../../screens/FavoritesScreen";
import RecipesOverviewScreen from "../../screens/RecipesOverviewScreen";
import RecipeDetailScreen from "../../screens/RecipeDetailScreen";
import ManageRecipeScreen from "../../screens/ManageRecipeScreen";

const recipeDetailStack = [
	{
		name: "RecipeDetail",
		component: RecipeDetailScreen,
		title: "Recipe Detail",
	},
	{
		name: "ManageRecipe",
		component: ManageRecipeScreen,
		presentation: "modal",
		gestureEnabled: "false",
		// headerLeft: () => <BackButton/>
	},
];

const recipesByBeansStack = [
	{ name: "All Beans", component: BeansScreen, title: "All Beans" },
	{ name: "RecipesOverview", component: RecipesOverviewScreen },
	...recipeDetailStack,
];

const allRecipesStack = [
	{
		name: "My Recipes",
		component: MyRecipesScreen,
		title: "My Recipes",
	},
	...recipeDetailStack,
];

const favoriteRecipesStack = [
	{
		name: "Favorite Recipes",
		component: FavoritesScreen,
		title: "Favorite Recipes",
	},
	...recipeDetailStack,
];

const RecipesByBeansStackNavigator = () => (
	<StackNavigator navigationList={recipesByBeansStack} id="recipesStack" />
);

const AllRecipesStackNavigator = () => (
	<StackNavigator navigationList={allRecipesStack} id="recipesStack" />
);

const FavoriteRecipesStackNavigator = () => (
	<StackNavigator navigationList={favoriteRecipesStack} id="recipesStack" />
);

const drawerList = [
	{
		name: "Recipes",
		component: AllRecipesStackNavigator,
		title: "My Recipes",
		iconName: "logo-buffer",
	},
	{
		name: "RecipesByBeans",
		component: RecipesByBeansStackNavigator,
		title: "By Beans",
		iconName: "list",
	},
	{
		name: "Favorites",
		component: FavoriteRecipesStackNavigator,
		title: "Favorites",
		iconName: "star",
	},
];

export function RecipesNavigator() {
	return (
		<DrawerNavigator
			navigationList={drawerList}
			drawerScreenOptions={styles.drawer}
			id="recipesDrawer"
		/>
	);
}

const styles = StyleSheet.create({
	drawer: {
		headerTransparent: true,
		headerTitleStyle: {},
		headerTintColor: "black",
		overlayColor: "transparent",
		drawerStyle: { width: 180 },
		drawerActiveBackgroundColor: "transparent",
		drawerActiveTintColor: "black",
		drawerInactiveTintColor: "rgba(0,0,0,0.3)",
		drawerLabelStyle: {
			fontSize: 15,
			textAlign: "left",
			fontWeight: "700",
		},
		drawerItemStyle: {
			width: "100%",
			height: 50,
		},
		drawerContentContainerStyle: {
			height: "90%",
			marginLeft: 10,
			justifyContent: "center",
			
		},
		swipeEnabled: false,
	},
});
