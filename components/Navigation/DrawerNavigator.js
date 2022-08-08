import { View, Text, Button } from "react-native";
import {
	createDrawerNavigator,
	DrawerContentScrollView,
	DrawerItemList,
	DrawerItem,
} from "@react-navigation/drawer";
import "react-native-gesture-handler";

import { Ionicons } from "@expo/vector-icons";

const DrawerNavigator = ({navigationList, drawerScreenOptions, backBehavior}) => {
	// const DrawerContent = (props) => {
	// 	return (
	// 		<DrawerContentScrollView {...props}>
	// 			<DrawerItemList {...props} />
	// 			{navigationList.map((item) => {
	// 				return (
	// 					<DrawerItem
	// 						label={item.name}
	// 						navigation={item.component}
	// 					/>
	// 				);
	// 			})}
	// 		</DrawerContentScrollView>
	// 	);
	// };
	const Drawer = createDrawerNavigator();

	return (
		<Drawer.Navigator
			// drawerContent={(props) => <DrawerContent {...props} />}
			screenOptions={drawerScreenOptions}
			backBehavior="initialRoute"
			id="recipeDrawer"
		>
			{navigationList.map((item) => {
				return (
					<Drawer.Screen
					key={item.name}
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
							headerShown: item.headerShown || false,
						}}
					/>
				);
			})}
		</Drawer.Navigator>
	);
};

export default DrawerNavigator;
