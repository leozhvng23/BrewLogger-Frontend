import React, { useLayoutEffect, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Dimensions, View, Text, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import IconButton from "../components/UIElements/Buttons/IconButton";
import AddButton from "../components/UIElements/Buttons/AddButton";
import RecipeList from "../components/RecipesList/RecipeList";
import TextTitle from "../components/UIElements/TextTitle";
import LoadingOverlay from "../components/UIElements/Overlays/LoadingOverlay";
import ErrorOverlay from "../components/UIElements/Overlays/ErrorOverlay";
import { getRecipesByUserId } from "../util/http";
import { setRecipes } from "../store/redux/recipes";
import { useHeaderHeight } from "@react-navigation/elements";


const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;



const HomeScreen = ({navigation}) => {

	const [isFetching, setIsFetching] = useState(true);
	const [error, setError] = useState();
	const uid = useSelector((state) => state.user.uid);
    const username = useSelector((state) => state.user.name);
	const dispatch = useDispatch();
	const headerHeight = useHeaderHeight();

    const addRecipeHandler = () => {
		navigation.navigate("ManageRecipe");
	};

    useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: () => <AddButton onAddData={addRecipeHandler} />,
            title: `Welcome ${username}!`
		});
	}, [navigation]);



	useEffect(() => {
		const fetchRecipes = async () => {
			setIsFetching(true);
			try {
				const [recipes, ids] = await getRecipesByUserId(uid);
				dispatch(setRecipes({ recipes: recipes, ids: ids }));
			} catch (err) {
				setError("Could not fetch recipes.");
			}
			setIsFetching(false);
			// setTimeout(() => setIsFetching(false), 2000);
		};
		fetchRecipes();
	}, []);

	const recipes = useSelector((state) => state.recipes.recipes);

	if (isFetching) {
		return <LoadingOverlay />;
	}
	// const errorHandler = () => setError(null);

	if (error && !isFetching) {
		// return <ErrorOverlay message={error} onConfirm={errorHandler} />;
		return <ErrorOverlay message={error} />;
	}

	return (
		<View style={styles.container}>
			<FlatList
				ListHeaderComponent={() => (
					<View style={styles.horizontalList}>
						<TextTitle style={styles.title}>Popular Today</TextTitle>
						<RecipeList
							items={recipes}
							horizontal
							showsHorizontalScrollIndicator={false}
							style={[styles.recipeList]}
						/>
                        <TextTitle style={styles.title}>My Feed</TextTitle>
					</View>
				)}
				contentContainerStyle={{
					paddingTop: headerHeight,
					minHeight: windowHeight,
				}}
			></FlatList>
		</View>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	container: {},
	horizontalList: {},
    title:{
        // maxWidth: 150
    },
	recipeList: {
		// paddingHorizontal: "3%",
        marginBottom: 15
	},
});
