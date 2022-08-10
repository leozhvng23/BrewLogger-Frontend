import { useSelector } from "react-redux";

export function selectPopularRecipes() {
	const Recipes = useSelector((state) => state.recipes.recipes);
	const popularIds = useSelector((state) => state.recipes.popularIds);
	const selectedRecipes = [];
	popularIds.map((id) => {
		selectedRecipes.push(Recipes[id]);
	});
	return selectedRecipes;
}

export function selectFeedRecipes() {
	const Recipes = useSelector((state) => state.recipes.recipes);
	const feedIds = useSelector((state) => state.recipes.feedIds);
	const selectedRecipes = [];
	feedIds.map((id) => {
		selectedRecipes.push(Recipes[id]);
	});
	return selectedRecipes;
}

export function selectMyRecipes() {
	const Recipes = useSelector((state) => state.recipes.recipes);
	const myIds = useSelector((state) => state.recipes.myIds);
	const selectedRecipes = [];
	myIds.map((id) => {
		selectedRecipes.push(Recipes[id]);
	});
	return selectedRecipes;
}

