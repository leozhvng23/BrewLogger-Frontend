import { View, Text, Button } from "react-native";
import {
	createDrawerNavigator,
	DrawerContentScrollView,
	DrawerItemList,
	DrawerItem,
} from "@react-navigation/drawer";
import "react-native-gesture-handler";

import { Ionicons } from "@expo/vector-icons";

const DrawerNavigator = ({navigationList, drawerScreenOptions}) => {
	const DrawerContent = (props) => {
		return (
			<DrawerContentScrollView {...props}>
				<DrawerItemList {...props} />
				{navigationList.map((item) => {
					return (
						<DrawerItem
							label={item.name}
							navigation={item.component}
						/>
					);
				})}
			</DrawerContentScrollView>
		);
	};
	const Drawer = createDrawerNavigator();

	return (
		<Drawer.Navigator
			// drawerContent={(props) => <DrawerContent {...props} />}
			screenOptions={drawerScreenOptions}
		>
			{navigationList.map((item) => {
				return (
					<Drawer.Screen
						name={item.name}
						component={item.component}
						options={{
							title: item.title,
							drawerIcon: ({ color, size }) => (
								<Ionicons
									name={item.iconName}
									color={color}
									size={size}
									style={{ marginRight: -25 }}
								/>
							),
							headerShown: item.headerShown
						}}
					/>
				);
			})}
			{/* <Drawer.Screen
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
			/> */}
		</Drawer.Navigator>
	);
};

export default DrawerNavigator;
