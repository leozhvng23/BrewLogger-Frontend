import { createSlice } from "@reduxjs/toolkit";

const recipeSlice = createSlice({
	name: "recipes",
	initialState: { 
        recipes: [],
        fetchedIds: []
     },
	reducers: {
		setRecipes: (state, action) => {
			state.recipes = action.payload.recipes;
		},
        setRecipeDetail: (state, action) => {
            state.recipes[action.payload.id] = action.payload.recipeDetail;
            state.fetchedIds.push(action.payload.id)
        }
	},
});

export const setRecipes = recipeSlice.actions.setRecipes;
export const setRecipeDetail = recipeSlice.actions.setRecipeDetail;

export default recipeSlice.reducer;
