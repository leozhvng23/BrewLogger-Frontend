import {createSlice} from '@reduxjs/toolkit';

const favoriteSlice = createSlice({
    name: 'favorites',
    initialState: {
        ids: []
    },
    reducers: {
        addFavorites: (state, action) => {
            state.ids.push(action.payload.id);
        },
        removeFavorites: (state, action) => {
            state.ids.splice(state.ids.indexOf(action.payload.id), 1);
        }
    }
})


export const addFavorite = favoriteSlice.actions.addFavorites;
export const removeFavorite = favoriteSlice.actions.removeFavorites;

export default favoriteSlice.reducer