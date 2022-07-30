import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const StackNavigator = ({ navigationList }) => {
	return (
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
			{navigationList.map((item) => {
				return (
					<Stack.Screen
						name={item.name}
						component={item.component}
						options={{
							title: item.title,
							headerShown: item.headerShown,
						}}
					/>
				);
			})}

			{/* <Stack.Screen
				name="Drawer"
				component={DrawerNavigator}
				options={{
					title: "All Beans",
					headerShown: false,
				}}
			/>
			<Stack.Screen name="RecipesOverview" component={RecipesOverviewScreen} />
			<Stack.Screen
				name="RecipeDetail"
				component={RecipeDetailScreen}
				options={{
					title: "Recipe Detail",
				}}
			/> */}
		</Stack.Navigator>
	);
};

export default StackNavigator;

const styles = StyleSheet.create({});
