import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from './favorites';
import recipesReducer from './recipes';
import userReducer from './user'
import beansReducer from './beans'


export const store = configureStore({
	reducer: {
        favoriteRecipes: favoritesReducer,
        recipes: recipesReducer,
        user: userReducer,
        beans: beansReducer
    },
});

