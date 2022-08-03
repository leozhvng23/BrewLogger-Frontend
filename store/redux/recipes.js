import { createSlice } from "@reduxjs/toolkit";

const recipeSlice = createSlice({
	name: "recipes",
	initialState: { recipes: [] },
	reducers: {
		setRecipes: (state, action) => {
			state.recipes = action.payload.recipes;
		},
	},
});

export const setRecipes = recipeSlice.actions.setRecipes;

export default recipeSlice.reducer;
