import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import BeansScreen from "./screens/BeansScreen";
import RecipesOverviewScreen from "./screens/RecipesOverviewScreen";
import RecipeDetailScreen from "./screens/RecipeDetailScreen";

const Stack = createNativeStackNavigator();

export default function App() {


	return (
		<View style={styles.rootContainer}>
			<StatusBar style="auto" />
			<NavigationContainer>
				<Stack.Navigator
					screenOptions={{
						headerTransparent: true,
						headerStyle: {
							position: "absolute",
							backgroundColor: "transparent",
						},
						headerBlurEffect: true,
						headerTitleStyle: {},
						headerTintColor: "black",
						contentStyle: { backgroundColor: "rgb(255,255,255)" },
					}}
				>
					<Stack.Screen
						name="Beans"
						component={BeansScreen}
						options={{ title: "All Beans" }}
					/>
					<Stack.Screen
						name="RecipesOverview"
						component={RecipesOverviewScreen}
					/>
					<Stack.Screen name="RecipeDetail" component={RecipeDetailScreen} options={{title: "Recipe Detail"}}/>
				</Stack.Navigator>
			</NavigationContainer>
		</View>
	);
}

const styles = StyleSheet.create({
	rootContainer: {
		flex: 1,
	},
});
