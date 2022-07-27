import { View, Pressable, Text, Image, StyleSheet, Platform } from "react-native";

const RecipeItem = ({ name, imageUrl, brewer, brewType, duration }) => {
	return (
		<View style={styles.recipeItem}>
			<Pressable
				android_ripple={{ color: "#ccc" }}
				style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
			>
				<View style={styles.innerContainer}>
					<View>
						<Image source={{ uri: imageUrl }} style={styles.image} />
						<Text style={styles.title}>{name}</Text>
					</View>
					<View Style={styles.details}>
						<Text style={styles.detailItem}>{brewer}</Text>
						<Text style={styles.detailItem}>{brewType}</Text>
						<Text style={styles.detailItem}>{duration} min</Text>
					</View>
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
		shadowOpacity: 0.25,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 8,
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
