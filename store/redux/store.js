import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from './favorites';
import recipesReducer from './recipes';
import userReducer from './user'


export const store = configureStore({
	reducer: {
        favoriteRecipes: favoritesReducer,
        recipes: recipesReducer,
        user: userReducer,
    },
});

