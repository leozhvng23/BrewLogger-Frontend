import { View, Pressable, Text, Image, StyleSheet, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";

import RecipeDetails from "../RecipeDetails";

const RecipeItem = ({ id, name, imageUrl, brewer, brewType, duration }) => {
	const navigation = useNavigation();

	const selectRecipeHandler = () => {
		navigation.navigate("RecipeDetail", { rid: id });
	};

	return (
		<View style={styles.recipeItem}>
			<Pressable
				android_ripple={{ color: "#ccc" }}
				style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
				onPress={selectRecipeHandler}
			>
				<View style={styles.innerContainer}>
					<View>
						<Image source={{ uri: imageUrl }} style={styles.image} />
						<Text style={styles.title}>{name}</Text>
					</View>
					<RecipeDetails
						duration={duration}
						brewer={brewer}
						brewType={brewType}
					/>
				</View>
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
	innerContainer: {
		borderRadius: 8,
		overflow: "hidden",
	},
	image: {
		width: "100%",
		height: 200,
	},
	title: {
		fontWeight: "bold",
		textAlign: "center",
		fontSize: 18,
		margin: 8,
	},
	details: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 8,
	},
	detailItem: {
		marginHorizontal: 4,
		fontSize: 12,
	},
});
