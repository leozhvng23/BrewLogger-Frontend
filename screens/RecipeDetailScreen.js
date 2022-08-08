import { useLayoutEffect, useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, ScrollView, Alert } from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";
import { useDispatch, useSelector } from "react-redux";

import RecipeDetailsFull from "../components/RecipeDetail/RecipeDetailsFull";
import IconButton from "../components/UIElements/Buttons/IconButton";
import ShareEditDelete from "../components/UIElements/Buttons/ShareEditDelete";
import LoadingOverlay from "../components/UIElements/Overlays/LoadingOverlay";
import ErrorOverlay from "../components/UIElements/Overlays/ErrorOverlay";
import RecipeGuide from "../components/RecipeGuide/RecipeGuide";
import { useNavigation, useRoute } from "@react-navigation/native";

import { addFavorite, removeFavorite } from "../store/redux/favorites";
import { getRecipeById } from "../util/http";
import { setRecipeDetail } from "../store/redux/recipes";

function RecipeDetailScreen() {
	// const [isFetching, setIsFetching] = useState(true);
	// const [error, setError] = useState();
	const navigation = useNavigation().getParent("recipesStack");
	const route = useRoute();
	const id = route.params.id;
	const favoriteRecipeIds = useSelector((state) => state.favoriteRecipes.ids);
	const recipeIsFavorite = favoriteRecipeIds.includes(id);
	const fetchedRecipeIds = useSelector((state) => state.recipes.fetchedIds);
	// const recipeIsFetched = fetchedRecipeIds.includes(id);
	const dispatch = useDispatch();
	const headerHeight = useHeaderHeight();

	const changeFavoriteStatusHandler = () => {
		if (recipeIsFavorite) {
			dispatch(removeFavorite({ id: id }));
		} else {
			dispatch(addFavorite({ id: id }));
		}
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

	// useEffect(() => {
	// 	const fetchRecipe = async () => {
	// 		setIsFetching(true);
	// 		try {
	// 			const recipeDetail = await getRecipeById(id);
	// 			dispatch(setRecipeDetail({ id: id, recipeDetail: recipeDetail }));
	// 		} catch (err) {
	// 			setError("Could not fetch recipe detail.");
	// 		}
	// 		setIsFetching(false);
	// 		// setTimeout(() => setIsFetching(false), 2000);
	// 	};
	// 	recipeIsFetched ? setIsFetching(false) : fetchRecipe();
	// }, []);

	const selectedRecipe = useSelector((state) => state.recipes.recipes[id]);

	// if (isFetching) {
	// 	return <LoadingOverlay />;
	// }
	// // const errorHandler = () => setError(null);

	// if (error && !isFetching) {
	// 	// return <ErrorOverlay message={error} onConfirm={errorHandler} />;
	// 	return <ErrorOverlay message={error} />;
	// }

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
		navigation.navigate("ManageRecipe", { id: id });
	};

	const onShareData = () => {
		console.log("share data");
	};

	return (
		<ScrollView
			contentContainerStyle={[styles.rootContainer, { paddingTop: headerHeight }]}
		>
			<Image style={styles.image} source={{ uri: selectedRecipe.photo_url }} />
			<View style={styles.contentContainer}>
				<Text style={styles.title}>{selectedRecipe.name}</Text>
				<RecipeDetailsFull
					type={selectedRecipe.type}
					yields={selectedRecipe.yield}
					brew_time={selectedRecipe.brew_time}
					bean_name={selectedRecipe.bean_name}
					bid={selectedRecipe.bid}
					created_on={selectedRecipe.created_on}
					brewer={selectedRecipe.brewer}
					grinder={selectedRecipe.grinder}
					brewer_eid={selectedRecipe.brewer_eid}
					grinder_eid={selectedRecipe.grinder_eid}
				/>
				<Text style={styles.description}>{selectedRecipe.description}</Text>
				<RecipeGuide guide={selectedRecipe.guide} style={styles.guide}/>
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
	buttonsBar: {
		marginTop: "10%",
	},
	guide:{
		marginTop: 10
	}
});
