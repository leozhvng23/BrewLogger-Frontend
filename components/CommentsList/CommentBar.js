import { StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";

import { useSelector } from "react-redux";
import IconButton from "../UIElements/Buttons/IconButton";
import Avatar from "../UIElements/Avatar";

const CommentBar = ({ id, onPressPost }) => {
	// const uid = useSelector((state) => state.user.uid)

	const [comment, setComment] = useState("");

	const submitCommentHandler = () => {
		console.log("submitted comment");
		setComment("");
		onPressPost(comment);
	};

	return (
		<View style={styles.commentItem}>
			<Avatar size={28} style={styles.avatar} />
			<TextInput
				style={styles.input}
				placeholder="add a comment..."
				value={comment}
				onChangeText={setComment}
				returnKeyType="done"
			/>
			<IconButton
				icon="send"
				color="rgba(0,0,0,0.5)"
				size={20}
				onPress={submitCommentHandler}
				style={styles.sendButton}
			/>
		</View>
	);
};

export default CommentBar;

const styles = StyleSheet.create({
	commentItem: {
		flexDirection: "row",
		paddingHorizontal: 8,
		paddingVertical: 1,
		marginHorizontal: 5,
		marginTop: 3,
		marginBottom: 10,
		paddingVertical: 5,
		paddingHorizontal: 5,
		borderRadius: "25%",
		backgroundColor: "rgba(0,0,0,0.05)",
		alignItems: "center",
	},
	input: {
		flex: 1,
		fontSize: 14,
		marginLeft: 10,
	},
	sendButton: {
		marginHorizontal: 5,
	},
});
