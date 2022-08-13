import { createSlice } from "@reduxjs/toolkit";

const recipeSlice = createSlice({
	name: "recipes",
	initialState: {
		recipes: {},
		fetchedIds: [], // recipes with all data
		myIds: [], // my created recipes
		feedIds: [],
		popularIds: [],
		sharedWithMeIds: [], // shared with me recipes
	},
	reducers: {
		setMyRecipes: (state, action) => {
			for (const [key, value] of Object.entries(action.payload.recipes)) {
				state.recipes[key] = value;
			}
			state.myIds = action.payload.ids;
		},
		setFeedRecipes: (state, action) => {
			for (const [key, value] of Object.entries(action.payload.recipes)) {
				state.recipes[key] = value;
			}
			state.feedIds = action.payload.ids;
		},
		setPopularRecipes: (state, action) => {
			for (const [key, value] of Object.entries(action.payload.recipes)) {
				state.recipes[key] = value;
			}
			state.popularIds = action.payload.ids;
		},
		setRecipeDetail: (state, action) => {
			state.recipes[action.payload.id] = action.payload.recipeDetail;
			state.fetchedIds.push(action.payload.id);
		},
	},
});

export const setMyRecipes = recipeSlice.actions.setMyRecipes;
export const setFeedRecipes = recipeSlice.actions.setFeedRecipes;
export const setPopularRecipes = recipeSlice.actions.setPopularRecipes;
export const setRecipeDetail = recipeSlice.actions.setRecipeDetail;

export default recipeSlice.reducer;
