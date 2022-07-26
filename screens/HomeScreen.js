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
import { getFavoriteIds, getFeedRecipes, getLikedIds, getPopularRecipes } from "../util/http";
import { selectFeedRecipes, selectPopularRecipes } from "../util/selectors";
import { setFeedRecipes, setPopularRecipes } from "../store/redux/recipes";
import { setLikedIds, setLikes } from "../store/redux/likes";
import { useHeaderHeight } from "@react-navigation/elements";
import { setFavoriteIds } from "../store/redux/favorites";
import { setCommentCount } from "../store/redux/comments";


// const windowWidth = Dimensions.get("window").width;

const HomeScreen = ({navigation}) => {

	const [isFetching, setIsFetching] = useState(true);
	const [error, setError] = useState();
	const uid = useSelector((state) => state.user.uid);
    const username = useSelector((state) => state.user.username);
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
            // console.log(recipes);
            dispatch(setFeedRecipes({ recipes: recipes, ids: ids}));
            dispatch(setLikes({recipes: recipes}));
            dispatch(setCommentCount({recipes: recipes}))
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
        try{
            const ids = await getLikedIds();
            console.log(ids);
            dispatch(setLikedIds({ids: ids}))
        } catch (err) {
            setError("Could not fetch liked ids");
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
                nestedScrollEnabled
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
