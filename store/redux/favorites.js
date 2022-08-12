import {createSlice} from '@reduxjs/toolkit';
import { addFavoriteRecipe, deleteFavoriteRecipe } from '../../util/http';

const favoriteSlice = createSlice({
    name: 'favorites',
    initialState: {
        ids: []
    },
    reducers: {
        addFavorites: (state, action) => {
            state.ids.push(action.payload.id);
            addFavoriteRecipe(action.payload.id);
        },
        removeFavorites: (state, action) => {
            state.ids.splice(state.ids.indexOf(action.payload.id), 1);
            deleteFavoriteRecipe(action.payload.id);
        },
        setFavoriteIds: (state, action) => {
            state.ids = action.payload.ids 
        }
    }
})


export const addFavorite = favoriteSlice.actions.addFavorites;
export const removeFavorite = favoriteSlice.actions.removeFavorites;
export const setFavoriteIds = favoriteSlice.actions.setFavoriteIds;

export default favoriteSlice.reducer