import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import { Provider } from "react-redux";
import { store } from "./store/redux/store";

import MainNavigator from "./components/Navigation/MainNavigator";


export default function App() {
	return (
		<View style={styles.rootContainer}>
			<StatusBar style="auto" />
			{/* <FavoritesContextProvider> */}
			<Provider store={store}>
				<NavigationContainer>
					<MainNavigator />
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
});
