import { useSelector } from "react-redux";
import { createSelector } from "reselect";

const selectRecipes = (state) => state.recipes.recipes;
const selectPopularIds = (state) => state.recipes.popularIds;
const selectFeedIds = (state) => state.recipes.feedIds;
const selectMyIds = (state) => state.recipes.myIds;

const selectPopular = createSelector(
	[selectRecipes, selectPopularIds],
	(recipes, popularIds) => {
		const selectedRecipes = [];
		popularIds.map((id) => {
			selectedRecipes.push(recipes[id]);
		});
		return selectedRecipes;
	}
);

const selectFeed = createSelector([selectRecipes, selectFeedIds], (recipes, feedIds) => {
	const selectedRecipes = [];
	feedIds.map((id) => {
		selectedRecipes.push(recipes[id]);
	});
	return selectedRecipes;
});

const selectMy = createSelector([selectRecipes, selectMyIds], (recipes, myIds) => {
	const selectedRecipes = [];
	myIds.map((id) => {
		selectedRecipes.push(recipes[id]);
	});
	return selectedRecipes;
});

export function selectPopularRecipes() {
	return useSelector((state) => selectPopular(state));
}

export function selectFeedRecipes() {
	return useSelector((state) => selectFeed(state));
}

export function selectMyRecipes() {
	return useSelector((state) => selectMy(state));
}
