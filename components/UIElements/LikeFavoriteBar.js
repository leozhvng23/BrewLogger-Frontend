import React from "react";
import { StyleSheet, Text, View } from "react-native";
import IconButton from "./Buttons/IconButton";

const LikeFavoriteBar = ({
	style,
	num_of_likes,
	recipeIsLiked,
	recipeIsFavorite,
	onPressLike,
	onPressFavorite,
}) => {
	return (
		<View style={[style, styles.container]}>
			{num_of_likes && (
				<Text style={[styles.likeNumber, { fontWeight: "600", marginRight: -2 }]}>
					{" "}
					{num_of_likes}{" "}
				</Text>
			)}
			{num_of_likes && <Text style={styles.likeNumber}>{num_of_likes > 1 ? "likes": "like"}</Text>}
			<IconButton
				icon={recipeIsLiked ? "heart" : "heart-outline"}
				color={recipeIsLiked ? "red" : "black"}
				size={25}
				onPress={onPressLike}
				style={styles.button}
			/>
			<IconButton
				icon={recipeIsFavorite ? "ios-star" : "ios-star-outline"}
				color={recipeIsFavorite ? "orange" : "black"}
				size={20}
				onPress={onPressFavorite}
				style={styles.button}
			/>
		</View>
	);
};

export default LikeFavoriteBar;

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		paddingHorizontal: 12,
		paddingVertical: 3,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "rgba(255,255,255,0.8)",
		borderRadius: "25%",
		margin: 10,
	},
	likeNumber: {
		fontSize: 12,
		fontWeight: "400",
		justifyContent: "center",
		alignItems: "center",
		color: "black",
		opacity: 0.8,
	},
	button: {
		marginHorizontal: 3,
	},
});
