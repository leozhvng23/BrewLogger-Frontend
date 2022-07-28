import { Text, StyleSheet, View } from "react-native";

function FavoritesScreen() {
	return (
		<View style={styles.container}>
			<Text> My favorites! </Text>
		</View>
	);
}

export default FavoritesScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})