import { useCallback, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { removeFavorite, addFavorite } from "../../store/redux/favorites";
import { removeLike, addLike } from "../../store/redux/likes";
import { likeRecipe, unlikeRecipe } from "../../util/http";

import IconButton from "./Buttons/IconButton";
import ErrorOverlay from "./Overlays/ErrorOverlay";


const LikeFavoriteBar = ({
    id,
	style,
}) => {
	const [error, setError] = useState();
	const dispatch = useDispatch();
    const favoriteRecipesIds = useSelector((state) => state.favoriteRecipes.ids);
    const likedRecipeIds = useSelector((state) => state.likes.ids )
    const num_of_likes = useSelector((state) => state.likes.recipeLikes[id])
	const recipeIsFavorite = favoriteRecipesIds.includes(id);
    const recipeIsLiked = likedRecipeIds.includes(id);

	const changeFavoriteStatusHandler = useCallback(() => {
		if (recipeIsFavorite) {
			dispatch(removeFavorite({ id: id }));
		} else {
			dispatch(addFavorite({ id: id }));
		}
	}, [recipeIsFavorite]);

    const changeLikeStatusHandler = useCallback(async () => {
		console.log("pressed like");
        if (recipeIsLiked) {
			dispatch(removeLike({ id: id }));
            try {
                const result = await unlikeRecipe(id);
            } catch (err) {
                setError("Could not unlike recipe.");
            }
		} else {
			dispatch(addLike({ id: id }));
            try {
                const result = await likeRecipe(id);
            } catch (err) {
                setError("Could not like recipe.")
            }
		} 
	}, [recipeIsLiked]);

    if (error) {
		// return <ErrorOverlay message={error} onConfirm={errorHandler} />;
		return <ErrorOverlay message={error} />;
	}


	return (
		<View style={[style, styles.container]}>
			{num_of_likes > 0 && (
				<Text style={[styles.likeNumber, { fontWeight: "600", marginRight: -2 }]}>
					{" "}
					{num_of_likes}{" "}
				</Text>
			)}
			{num_of_likes > 0 && <Text style={styles.likeNumber}>{num_of_likes > 1 ? "likes": "like"}</Text>}
			<IconButton
				icon={recipeIsLiked ? "heart" : "heart-outline"}
				color={recipeIsLiked ? "red" : "black"}
				size={25}
				onPress={changeLikeStatusHandler}
				style={styles.button}
			/>
			<IconButton
				icon={recipeIsFavorite ? "ios-star" : "ios-star-outline"}
				color={recipeIsFavorite ? "orange" : "black"}
				size={20}
				onPress={changeFavoriteStatusHandler}
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
