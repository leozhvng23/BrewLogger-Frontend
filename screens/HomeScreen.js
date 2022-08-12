import React, { useLayoutEffect, useEffect, useState, useCallback } from "react";
import { StyleSheet, Dimensions, View, Text, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import IconButton from "../components/UIElements/Buttons/IconButton";
import AddButton from "../components/UIElements/Buttons/AddButton";
import RecipeList from "../components/RecipesList/RecipeList";
import TextTitle from "../components/UIElements/TextTitle";
import LoadingOverlay from "../components/UIElements/Overlays/LoadingOverlay";
import ErrorOverlay from "../components/UIElements/Overlays/ErrorOverlay";
import PostsList from "../components/PostsList/PostsList";
import { getFavoriteIds, getFeedRecipes, getPopularRecipes } from "../util/http";
import { selectFeedRecipes, selectPopularRecipes } from "../util/selectors";
import { setFeedRecipes, setPopularRecipes } from "../store/redux/recipes";
import { useHeaderHeight } from "@react-navigation/elements";
import { setFavoriteIds } from "../store/redux/favorites";


// const windowWidth = Dimensions.get("window").width;

const HomeScreen = ({navigation}) => {

	const [isFetching, setIsFetching] = useState(true);
	const [error, setError] = useState();
	const uid = useSelector((state) => state.user.uid);
    const username = useSelector((state) => state.user.name);
	const dispatch = useDispatch();
	const headerHeight = useHeaderHeight();
    const windowHeight = Dimensions.get("window").height

    const addRecipeHandler = () => {
		navigation.navigate("ManageRecipe");
	};

    useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: () => <AddButton onAddData={addRecipeHandler} />,
            title: `Welcome ${username}!`
		});
	}, [navigation]);

    const fetchRecipes = useCallback(async () => {
        setIsFetching(true);
        try {
            const [recipes, ids] = await getPopularRecipes();
            // console.log(recipes);
            dispatch(setPopularRecipes({ recipes: recipes, ids: ids }));
        } catch (err) {
            setError("Could not fetch popular recipes.");
        }
        try {
            const [recipes, ids] = await getFeedRecipes(uid);
            dispatch(setFeedRecipes({ recipes: recipes, ids: ids}));
        } catch (err) {
            setError("Could not fetch feed recipes.");
        }
        try{
            const ids = await getFavoriteIds();
            console.log(ids);
            dispatch(setFavoriteIds({ids: ids}))
        } catch (err) {
            setError("Could not fetch favorite ids");
        }
        setIsFetching(false);
        // setTimeout(() => setIsFetching(false), 2000); 
    }, [])


	useEffect(() => {
        fetchRecipes();
	}, []);

    const popularRecipes = selectPopularRecipes();
    const feedRecipes = selectFeedRecipes();

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
							items={popularRecipes}
							horizontal
							showsHorizontalScrollIndicator={false}
							style={[styles.recipeList]}
						/>
                        <TextTitle style={styles.title}>My Feed</TextTitle>
                        <PostsList items={feedRecipes} />
					</View>
				)}
				contentContainerStyle={{
					paddingTop: headerHeight,
                    paddingBottom: 100,
					minHeight: windowHeight,
				}}
                showsVerticalScrollIndicator={false}
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
