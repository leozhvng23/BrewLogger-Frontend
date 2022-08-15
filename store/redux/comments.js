import { createSlice } from "@reduxjs/toolkit";

const CommentSlice = createSlice({
	name: "comments",
	initialState: {
		recipeCommentCount: {}, // recipe id and comment count
		// ids: [], // my Commented recipes
	},
	reducers: {
		setCommentCount: (state, action) => {
			for (const [key, value] of Object.entries(action.payload.recipes)) {
				state.recipeCommentCount[key] = value.num_of_comments;
			}
		},
		addComment: (state, action) => {
			state.recipeCommentCount[action.payload.id] += 1
		},
		removeComment: (state, action) => {
			state.recipeCommentCount[action.payload.id] -= 1;
		},
	},
});

export const setCommentCount = CommentSlice.actions.setCommentCount;
export const addComment = CommentSlice.actions.addComment;
export const removeComment = CommentSlice.actions.removeComment;

export default CommentSlice.reducer;
