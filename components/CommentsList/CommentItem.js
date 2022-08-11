import {
	Pressable,
	StyleSheet,
	Text,
	TouchableWithoutFeedback,
	View,
} from "react-native";
import React, { useCallback, useState } from "react";
import Avatar from "../UIElements/Avatar";
import IconButton from "../UIElements/Buttons/IconButton";
import { getDate } from "../../util/dateTime";

const CommentItem = ({
	cid,
	user_name,
	uid,
	posted_on,
	content,
	num_of_likes,
	onPressUser,
	is_liked,
}) => {
	const [commentLikeStatus, setCommentLikeStatus] = useState({
		isLiked: is_liked,
		likes: num_of_likes,
	});

	const pressUserHandler = () => {
		onPressUser(uid);
	};

	const changeLikeStatusHandler = () => {
		setCommentLikeStatus({
			likes: commentLikeStatus.likes + (commentLikeStatus.isLiked ? -1 : 1),
			isLiked: !commentLikeStatus.isLiked,
		});
	};

	return (
		<TouchableWithoutFeedback>
			<View style={styles.commentItem}>
				<Pressable onPress={pressUserHandler}>
					<Avatar size={30} style={styles.avatar} />
				</Pressable>
				<View style={{ flexDirection: "column", flex: 1 }}>
					<Text style={styles.commentText}>
						<Text style={styles.usernameText} onPress={pressUserHandler}>
							{user_name}{" "}
						</Text>
						{content.replace(/[\r\n]/gm, "")}
					</Text>
					<Text style={styles.dateText}>{getDate(posted_on)}</Text>
				</View>
					<Text style={styles.likeNumber}>{commentLikeStatus.likes}</Text>
					<IconButton
						icon={commentLikeStatus.isLiked ? "heart" : "heart-outline"}
						color={commentLikeStatus.isLiked ? "red" : "black"}
						size={16}
						onPress={changeLikeStatusHandler}
						style={styles.button}
					/>
			</View>
		</TouchableWithoutFeedback>
	);
};

export default CommentItem;

const styles = StyleSheet.create({
	commentItem: {
		flexDirection: "row",
		paddingHorizontal: 8,
		paddingVertical: 1,
		marginHorizontal: 5,
		marginVertical: 3,
	},
	avatar: {
		marginRight: 5,
		marginLeft: -5,
	},
	commentText: {
		paddingTop: 0,
		fontSize: 12.5,
		fontWeight: "400",
		textAlign: "left",
		flex: 1,
	},
	dateText: {
		fontSize: 10,
		color: "rgba(0,0,0,0.5)",
	},
	usernameText: {
		fontWeight: "600",
		flex: 1,
		paddingTop: 0,
		fontSize: 12.5,
	},
	pressed: {
		opacity: 0.5,
	},
	button: {
		marginRight: -10,
		marginLeft: 1,
	},
	likeNumber: {
		fontSize: 12,
		color: "black",
		opacity: 0.5,
		marginLeft: 5,
        marginTop: 1
	},
});
