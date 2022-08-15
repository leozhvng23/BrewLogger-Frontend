import { StyleSheet, Text, View } from "react-native";
import { useState, useMemo} from "react";
import { useDispatch, useSelector } from "react-redux";

import TextButton from "./TextButton";

const ShowCommentButton = ({showComments, setShowComments, style, id}) => {

    const num_of_comments = useSelector((state) => state.comments.recipeCommentCount[id]) 

    const [commentButtonText, setCommentButtonText] = useState(
		`Show all ${num_of_comments} ${num_of_comments > 1 ? "comments" : "comment"}`
	);

	const commentWord = useMemo(
		() => (num_of_comments > 1 ? "comments" : "comment"),
		[num_of_comments]
	);

    const pressShowCommentsHandler = () => {
		if (showComments) {
			setCommentButtonText(`Show all ${num_of_comments} ${commentWord}`);
			setShowComments(false);
			console.log("hid comments");
		} else {
			setCommentButtonText(`Hide all ${commentWord}`);
			setShowComments(true);
			console.log("showing comments");
		}
	};
	return (
		<TextButton
			label={commentButtonText}
			onPress={pressShowCommentsHandler}
			color="rgba(0,0,0,0.6)"
			size={14}
			style={style}
		/>
	);
};

export default ShowCommentButton;

const styles = StyleSheet.create({});
