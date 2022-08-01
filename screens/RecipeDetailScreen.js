import { useLayoutEffect, useContext } from "react";
import { View, Text, Image, StyleSheet, ScrollView, Alert } from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";
import { useDispatch, useSelector } from "react-redux";

import List from "../components/RecipeDetail/List";
import Subtitle from "../components/RecipeDetail/Subtitle";
import RecipeDetails from "../components/RecipeDetails";
import IconButton from "../components/UIElements/IconButton";
import ShareEditDelete from "../components/UIElements/ShareEditDelete";
import { RECIPES } from "../data/dummy";
import { addFavorite, removeFavorite } from "../store/redux/favorites";

// import { FavoritesContext } from "../store/context/favorites-context";

function RecipeDetailScreen({ route, navigation }) {
	const headerHeight = useHeaderHeight();

	const rid = route.params.rid;

	// const favoriteRecipesCtx = useContext(FavoritesContext);

	const favoriteRecipeIds = useSelector((state) => state.favoriteRecipes.ids);

	const dispatch = useDispatch();

	const selectedRecipe = RECIPES.find((recipe) => recipe.id === rid);

	const recipeIsFavorite = favoriteRecipeIds.includes(rid);

	const changeFavoriteStatusHandler = () => {
		if (recipeIsFavorite) {
			dispatch(removeFavorite({ id: rid }));
		} else {
			dispatch(addFavorite({ id: rid }));
		}
	};

	const onDeleteData = () => {
		console.log("deleting data");
		console.log("deleted");
	};

	const deleteDataHandler = () => {
		Alert.alert(
			"Delete recipe?",
			`\"${selectedRecipe.name}\" will be permanently deleted.`,
			[
				{
					text: "Cancel",
					onPress: () => console.log("canceled delete recipe action"),
					style: "cancel",
				},
				{
					text: "Delete",
					style: "destructive",
					onPress: onDeleteData,
				},
			]
		);
	};

	const onEditData = () => {
		navigation.navigate("ManageRecipe", { rid: rid });
	};

	const onShareData = () => {
		console.log("share data");
	};

	useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: () => {
				return (
					<IconButton
						icon={recipeIsFavorite ? "ios-star" : "ios-star-outline"}
						color="black"
						onPress={changeFavoriteStatusHandler}
					/>
				);
			},
		});
	}, [navigation, changeFavoriteStatusHandler]);

	return (
		<ScrollView
			contentContainerStyle={[styles.rootContainer, { paddingTop: headerHeight }]}
		>
			<Image style={styles.image} source={{ uri: selectedRecipe.imageUrl }} />
			<View style={styles.contentContainer}>
				<Text style={styles.title}>{selectedRecipe.name}</Text>
				<RecipeDetails
					duration={selectedRecipe.duration}
					brewer={selectedRecipe.brewer}
					brewType={selectedRecipe.brewType}
					ratio={selectedRecipe.ratio}
					textStyle={styles.detailText}
				/>

				<Text style={styles.description}>{selectedRecipe.description}</Text>

				<View style={styles.listOuterContainer}>
					<View style={styles.listContainer}>
						<Subtitle>Steps</Subtitle>
						<List data={selectedRecipe.steps} />
					</View>
				</View>
				<View style={styles.buttonsBar}>
					<ShareEditDelete
						onDeleteData={deleteDataHandler}
						onShareData={onShareData}
						onEditData={onEditData}
					/>
				</View>
			</View>
		</ScrollView>
	);
}

export default RecipeDetailScreen;

const styles = StyleSheet.create({
	rootContainer: {
		paddingBottom: 50,
	},
	image: {
		width: "100%",
		height: 350,
	},
	title: {
		fontWeight: "bold",
		fontSize: 24,
		marginTop: "10%",
		marginBottom: "5%",
		textAlign: "center",
	},
	contentContainer: {
		alignItems: "center",
		paddingHorizontal: "3%",
		marginBottom: 12,
	},
	description: {
		marginVertical: "5%",
		paddingHorizontal: "5%",
		fontSize: 16,
	},
	detailText: {
		fontSize: 16,
		color: "#7c7c7c",
		fontWeight: "500",
	},
	listOuterContainer: {
		alignItems: "center",
	},
	listContainer: {},
	buttonsBar: {
		marginTop: "10%",
	},
});
