import { StyleSheet, Text, View } from "react-native";
import { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import CommentsList from "./CommentsList/CommentsList";
import LoadingOverlay from "./UIElements/Overlays/LoadingOverlay";
import ErrorOverlay from "./UIElements/Overlays/ErrorOverlay";
import { getCommentsByRecipeId } from "../util/http";

let commentResult;

const Comments = ({ id, style, onPressUser }) => {
	const [isFetching, setIsFetching] = useState(true);
	const [error, setError] = useState();
	const uid = useSelector((state) => state.user.uid);
	const dispatch = useDispatch();
    
    const fetchComments = useCallback(async () => {
		setIsFetching(true);
		try {
			const result = await getCommentsByRecipeId(id);
            commentResult = result
		} catch (err) {
			setError("Could not fetch comments.");
		}
		setIsFetching(false);
		// setTimeout(() => setIsFetching(false), 2000);
	}, []);

	useEffect(() => {
		fetchComments();
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
		<View style={[styles.commentsList, style]}>
			<CommentsList items={commentResult} onPressUser={onPressUser}/>
		</View>
	);
};

export default Comments;

const styles = StyleSheet.create({
    commentsList: {
        borderBottomColor: "rgba(0,0,0,0.2)",
		borderBottomWidth: 0.5,
        borderTopColor: "rgba(0,0,0,0.2)",
		borderTopWidth: 0.5,
    }
});
