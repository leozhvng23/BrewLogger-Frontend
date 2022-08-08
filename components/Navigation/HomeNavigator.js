import "react-native-gesture-handler";

import StackNavigator from "./StackNavigator";
import HomeScreen from "../../screens/HomeScreen";
import RecipeDetailScreen from "../../screens/RecipeDetailScreen";
import ManageRecipeScreen from "../../screens/ManageRecipeScreen";


const homeStack = [
	{
		name: "Home",
		component: HomeScreen,
		title: "Welcome!",
	},
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

export function HomeNavigator() {
	return <StackNavigator navigationList={homeStack} id="homeStack" />
}


