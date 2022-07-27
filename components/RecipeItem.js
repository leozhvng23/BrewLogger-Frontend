import { View, Pressable, Text, Image, StyleSheet, Platform } from "react-native";

const RecipeItem = () => {
	return (
		<View style={styles.recipeItem}>
			<Text>RecipeItem</Text>
		</View>
	);
};

export default RecipeItem;

const styles = StyleSheet.create({
    recipeItem: {
        margin: 16,
        borderRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
      },
})
