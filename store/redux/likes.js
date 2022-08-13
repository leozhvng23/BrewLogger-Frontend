import { createSlice } from "@reduxjs/toolkit";

const likeSlice = createSlice({
	name: "likes",
	initialState: {
		recipeLikes: {},
		ids: [], // my liked recipes
	},
	reducers: {
		setLikedIds: (state, action) => {
			state.ids = action.payload.ids;
		},
		setLikes: (state, action) => {
			for (const [key, value] of Object.entries(action.payload.recipes)) {
				state.recipeLikes[key] = value.num_of_likes;
			}
		},
		addLike: (state, action) => {
			state.ids.push(action.payload.id);
			state.recipeLikes[action.payload.id] += 1
		},
		removeLike: (state, action) => {
			state.ids.splice(state.ids.indexOf(action.payload.id), 1);
			state.recipeLikes[action.payload.id] -= 1;
		},
	},
});

export const setLikedIds = likeSlice.actions.setLikedIds;
export const setLikes = likeSlice.actions.setLikes;
export const addLike = likeSlice.actions.addLike;
export const removeLike = likeSlice.actions.removeLike;

export default likeSlice.reducer;
