import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import React from "react";

const CommentItem = ({
	cid,
	user_name,
	uid,
	posted_on,
	content,
	num_of_likes,
	onPressLike,
	onPressUser,
}) => {
	return (
		<TouchableWithoutFeedback>
			<View style={styles.commentItem}>
				{/* avatar here */}
				<Text style={styles.commentText}>{content}</Text>
				{/* like button here */}
			</View>
		</TouchableWithoutFeedback>
	);
};

export default CommentItem;

const styles = StyleSheet.create({
	commentItem: {
		flexDirection: "row",
		paddingHorizontal: 8,
		paddingVertical: 5,
		marginHorizontal: 5,
		marginVertical: 3,
	},
	commentText: {
		fontSize: 12,
		fontWeight: "400",
		textAlign: "left",
	},
});
