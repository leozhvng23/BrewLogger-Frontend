import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from './favorites';
import recipesReducer from './recipes';
import userReducer from './user'
import beansReducer from './beans'
import equipmentsReducer from './equipments'
import likesReducer from './likes'


export const store = configureStore({
	reducer: {
        favoriteRecipes: favoritesReducer,
        likes: likesReducer,
        recipes: recipesReducer,
        user: userReducer,
        beans: beansReducer,
        equipments: equipmentsReducer
    },
});

