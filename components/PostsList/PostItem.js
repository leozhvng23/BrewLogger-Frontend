import {
	View,
	Pressable,
	Text,
	Image,
	StyleSheet,
	Platform,
	ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import RecipeDetails from "../RecipeDetail/RecipeDetails";

const RecipeItem = ({
	id,
	name,
	photo_url,
	brewer,
	type,
	bean,
    bid,
	brewer_eid,
	created_on,
	user_name,
    uid,
	num_of_comments,
	num_of_likes,
}) => {
	const navigation = useNavigation();

	const selectRecipeHandler = () => {
		navigation.navigate("RecipeDetail", { id: id });
	};

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
						<RecipeDetails
							brewer={brewer}
							type={type}
						/>
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
		minWidth: 300,
		borderRadius: 8,
		overflow: Platform.OS === "android" ? "hidden" : "visible",
		backgroundColor: "white",
		shadowColor: "black",
		shadowOpacity: 0.2,
		shadowOffset: { width: 0, height: 0.5 },
		shadowRadius: 4,
	},

	buttonPressed: {
		opacity: 0.5,
	},
	image: {
		borderRadius: 8,
		overflow: "hidden",
	},
	innerContainer: {
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "rgba(255,255,255, 0.9)",
		paddingHorizontal: 3,
		borderRadius: 8,
		marginTop: 135,
		shadowColor: "black",
		shadowOpacity: 0.2,
		shadowOffset: { width: 0, height: 0.5 },
		shadowRadius: 6,
	},
	title: {
		fontWeight: "600",
		textAlign: "center",
		fontSize: 18,
		marginTop: 8,
	},
});
