import { StyleSheet } from "react-native";
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
                        key={item.name}
						name={item.name}
						component={item.component}
						options={{
							title: item.title,
							headerShown: item.headerShown,
                            presentation: item.presentation
						}}
					/>
				);
			})}
		</Stack.Navigator>
	);
};

export default StackNavigator;

const styles = StyleSheet.create({});
