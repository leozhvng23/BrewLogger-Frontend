import { createSlice } from "@reduxjs/toolkit";

const recipeSlice = createSlice({
	name: "recipes",
	initialState: {
		recipes: {},
		// fetchedIds: [], // recipes with all data
		myIds: [], // my created recipes
		sharedWithMeIds: [], // shared with me recipes
		likedIds: [], // liked recipes
	},
	reducers: {
		setRecipes: (state, action) => {
			state.recipes = action.payload.recipes;
			state.myIds = action.payload.ids;
		},
		setFeedRecipes: (state, action) => {
			for (const [id, recipe] of Object.entries(action.payload.recipes)) {
				state.recipes[id] = recipe;
			}
		},
		setRecipeDetail: (state, action) => {
		    state.recipes[action.payload.id] = action.payload.recipeDetail;
		    state.fetchedIds.push(action.payload.id)
		},
	},
});

export const setRecipes = recipeSlice.actions.setRecipes;
export const setFeedRecipes = recipeSlice.actions.setFeedRecipes;
export const setRecipeDetail = recipeSlice.actions.setRecipeDetail;

export default recipeSlice.reducer;
