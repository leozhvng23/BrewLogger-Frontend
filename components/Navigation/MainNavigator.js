import { Text, View, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import "react-native-gesture-handler";

import DrawerNavigator from "./DrawerNavigator";
import StackNavigator from "./StackNavigator";
import AllRecipesOverviewScreen from "../../screens/AllRecipesOverviewScreen";
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
		name: "All Recipes",
		component: AllRecipesOverviewScreen,
		title: "All Recipes",
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
		title: "All Recipes",
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
const RecipesNavigator = () => (
	<DrawerNavigator navigationList={drawerList} drawerScreenOptions={styles.drawer} id="recipesDrawer" />
);

const Tab = createBottomTabNavigator();

function HomeScreen() {
	return (
		<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
			<Text>Home</Text>
		</View>
	);
}

function ProfileScreen() {
	return (
		<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
			<Text>Profile</Text>
		</View>
	);
}

const MainNavigator = () => {
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color, size }) => {
					let iconName;

					if (route.name === "HomeNav") {
						iconName = focused ? "home" : "home-outline";
					} else if (route.name === "RecipesNav") {
						iconName = focused ? "list" : "list-outline";
					} else if (route.name === "ProfileNav") {
						iconName = focused ? "person-circle" : "person-circle-outline";
					}

					// You can return any component that you like here!
					return <Ionicons name={iconName} size={size} color={color} />;
				},
				tabBarActiveTintColor: "black",
				tabBarInactiveTintColor: "rgba(0,0,0,0.6)",
				headerShown: false,
				tabBarShowLabel: false,
			})}
		>
			<Tab.Screen name="HomeNav" component={HomeScreen} />
			<Tab.Screen name="RecipesNav" component={RecipesNavigator} />
			<Tab.Screen name="ProfileNav" component={ProfileScreen} />
		</Tab.Navigator>
	);
};

export default MainNavigator;

const styles = StyleSheet.create({
	drawer: {
		headerTransparent: true,
		headerTitleStyle: {},
		headerTintColor: "black",
		overlayColor: "transparent",
		drawerStyle: { width: 160 },
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
			justifyContent: "center",
		},
		swipeEnabled: false,
	},
});
