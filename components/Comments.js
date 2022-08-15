import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import CommentsList from "./CommentsList/CommentsList";
import LoadingOverlay from "./UIElements/Overlays/LoadingOverlay";
import ErrorOverlay from "./UIElements/Overlays/ErrorOverlay";
import CommentBar from "./CommentsList/CommentBar";
import { getCommentsByRecipeId, postComment } from "../util/http";
import { addComment } from "../store/redux/comments";

let commentResult;

const Comments = ({ id, style, onPressUser }) => {
	const [isFetching, setIsFetching] = useState(true);
	const [comments, setComments] = useState();
	const [error, setError] = useState();
	const uid = useSelector((state) => state.user.uid);
	const username = useSelector((state) => state.user.username);
	const dispatch = useDispatch();

	const fetchComments = useCallback(async () => {
		setIsFetching(true);
		try {
			const result = await getCommentsByRecipeId(id);
			setComments(result);
		} catch (err) {
			setError("Could not fetch comments.");
		}
		setIsFetching(false);
		// setTimeout(() => setIsFetching(false), 2000);
	}, []);

	useEffect(() => {
		fetchComments();
	}, []);

	const postCommentHandler = useCallback(async (comment) => {
		try {
			const result = await postComment(id, comment, uid, username);
			dispatch(addComment({ id: id }));
			setComments((cur) => {
				return [result, ...cur];
			});
		} catch (err) {
			setError("Could not post comment, try again later.");
		}
	}, []);

	if (isFetching) {
		return <LoadingOverlay />;
	}
	// const errorHandler = () => setError(null);

	if (error && !isFetching) {
		// return <ErrorOverlay message={error} onConfirm={errorHandler} />;
		return <ErrorOverlay message={commentResult} />;
	}

	return (
		<React.Fragment>
			<View style={[styles.commentsList, style]}>
				<CommentsList items={comments} onPressUser={onPressUser} />
			</View>
			<CommentBar
				id={id}
				style={styles.commentBar}
				onPressPost={postCommentHandler}
			/>
		</React.Fragment>
	);
};

export default Comments;

const styles = StyleSheet.create({
	commentsList: {
		borderBottomColor: "rgba(0,0,0,0.2)",
		borderBottomWidth: 0.5,
		borderTopColor: "rgba(0,0,0,0.2)",
		borderTopWidth: 0.5,
		marginBottom: 5,
	},
});
