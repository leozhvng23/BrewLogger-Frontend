import { View, Pressable, Text, Image, StyleSheet, Platform, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";

import RecipeDetails from "../RecipeDetails";

const RecipeItem = ({ id, name, photo_url, brewer, type, brew_time }) => {
	const navigation = useNavigation();

	const selectRecipeHandler = () => {
		navigation.navigate("RecipeDetail", { id: id });
	};

	// id: recipe.id,
	// name: recipe.name,
	// photo_url: recipe.photo_url,
	// type: recipe.type,
	// brew_time: recipe.brew_time,
	// brewer: recipe.brewer

	return (
		<View style={styles.recipeItem}>
			<Pressable
				android_ripple={{ color: "#ccc" }}
				style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
				onPress={selectRecipeHandler}
			>
				<ImageBackground
					source={{ uri: photo_url }}
					resizeMode="cover"
					style={styles.image}
				>
					<View style={styles.innerContainer}>
						<Text style={styles.title}>{name}</Text>
						<RecipeDetails brew_time={brew_time} brewer={brewer} type={type} />
					</View>
				</ImageBackground>
			</Pressable>
		</View>
	);
};

export default RecipeItem;

const styles = StyleSheet.create({
	recipeItem: {
		margin: 16,
		borderRadius: 8,
		overflow: Platform.OS === "android" ? "hidden" : "visible",
		backgroundColor: "white",
		elevation: 4,
		shadowColor: "black",
		shadowOpacity: 0.2,
		shadowOffset: { width: 0, height: 0.5 },
		shadowRadius: 4,
	},

	buttonPressed: {
		opacity: 0.5,
	},
	image: {
		flex: 1,
		borderRadius: 8,
		overflow: "hidden",
		height: 200
	},
	innerContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "rgba(255,255,255, 0.9)",
		paddingHorizontal: "5%",
		borderRadius: 8,
		marginTop: 135,
		shadowColor: "black",
		shadowOpacity: 0.2,
		shadowOffset: { width: 0, height: 0.5 },
		shadowRadius:6,
	},
	title: {
		fontWeight: "bold",
		textAlign: "center",
		fontSize: 18,
		marginTop: 8,
	},
});
