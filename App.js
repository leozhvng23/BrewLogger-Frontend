import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import "react-native-gesture-handler";
import { Provider } from "react-redux";
import { store } from "./store/redux/store";
import { Ionicons } from "@expo/vector-icons";

import BeansScreen from "./screens/BeansScreen";
import RecipesOverviewScreen from "./screens/RecipesOverviewScreen";
import RecipeDetailScreen from "./screens/RecipeDetailScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
import AllRecipesOverviewScreen from "./screens/AllRecipesOverviewScreen";
// import FavoritesContextProvider from "./store/context/favorites-context";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
	return (
		<Drawer.Navigator screenOptions={styles.drawer}>
			<Drawer.Screen
				name="All Recipes"
				component={AllRecipesOverviewScreen}
				options={{
					drawerIcon: ({ color, size }) => (
						<Ionicons
							name="logo-buffer"
							color={color}
							size={size}
							style={{ marginRight: -25 }}
						/>
					),
				}}
			/>
			<Drawer.Screen
				name="Beans"
				component={BeansScreen}
				options={{
					title: "By Beans",
					drawerIcon: ({ color, size }) => (
						<Ionicons
							name="list"
							color={color}
							size={size}
							style={{ marginRight: -25 }}
						/>
					),
				}}
			/>
			<Drawer.Screen
				name="Favorites"
				component={FavoritesScreen}
				options={{
					drawerIcon: ({ color, size }) => (
						<Ionicons
							name="star"
							color={color}
							size={size}
							style={{ marginRight: -25 }}
						/>
					),
				}}
			/>
		</Drawer.Navigator>
	);
};

export default function App() {
	return (
		<View style={styles.rootContainer}>
			<StatusBar style="auto" />
			{/* <FavoritesContextProvider> */}
			<Provider store={store}>
				<NavigationContainer>
					<Stack.Navigator
						screenOptions={{
							headerTransparent: true,
							headerStyle: {
								backgroundColor: "transparent",
							},
							headerBlurEffect: true,
							headerTitleStyle: {},
							headerTintColor: "black",
							contentStyle: { backgroundColor: "rgb(255,255,255)" },
						}}
					>
						<Stack.Screen
							name="Drawer"
							component={DrawerNavigator}
							options={{
								title: "All Beans",
								headerShown: false,
							}}
						/>
						<Stack.Screen
							name="RecipesOverview"
							component={RecipesOverviewScreen}
						/>
						<Stack.Screen
							name="RecipeDetail"
							component={RecipeDetailScreen}
							options={{
								title: "Recipe Detail",
							}}
						/>
					</Stack.Navigator>
				</NavigationContainer>
			</Provider>
			{/* </FavoritesContextProvider> */}
		</View>
	);
}

const styles = StyleSheet.create({
	rootContainer: {
		flex: 1,
	},
	drawer: {
		headerShown: true,
		headerTransparent: true,
		headerBackgroundContainerStyle: {
			backgroundColor: "white",
		},
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
	},
});
