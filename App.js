import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import BeansScreen from "./screens/beansScreen";

export default function App() {
	return (
		<>
			<StatusBar style="auto" />
			<BeansScreen />
		</>
	);
}

const styles = StyleSheet.create({
	container: {
	},
});
