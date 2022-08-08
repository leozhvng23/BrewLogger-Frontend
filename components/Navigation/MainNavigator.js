import { Text, View, StyleSheet } from "react-native";
import { createBottomTabNavigator, useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import "react-native-gesture-handler";
import {RecipesNavigator} from "./RecipesNavigator";
import { HomeNavigator } from "./HomeNavigator";
import { ProfileNavigator } from "./ProfileNavigator";
import {BlurView} from 'expo-blur'

const Tab = createBottomTabNavigator();


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
                tabBarBackground: () => <BlurView intensity={80} tint="light" style={{padding: 50}}/>,
                tabBarStyle: {position: "absolute"}
			})}
		>
			<Tab.Screen name="HomeNav" component={HomeNavigator} />
			<Tab.Screen name="RecipesNav" component={RecipesNavigator} />
			<Tab.Screen name="ProfileNav" component={ProfileNavigator} />
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
