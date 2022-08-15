import { useState, useMemo, useCallback } from "react";
import {
	View,
	Pressable,
	Text,
	StyleSheet,
	Platform,
	ImageBackground,
	TouchableWithoutFeedback,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import UserDetail from "../PostDetail/UserDetail";
import PostDetail from "../PostDetail/PostDetail";
import Comments from "../Comments";
import { getDate } from "../../util/dateTime";
import TextButton from "../UIElements/Buttons/TextButton";
import LikeFavoriteBar from "../UIElements/LikeFavoriteBar";
import CommentBar from "../CommentsList/CommentBar";
import ShowCommentButton from "../UIElements/Buttons/ShowCommentButton";

const PostItem = ({
	id,
	name,
	photo_url,
	description,
	brewer,
	type,
	bean,
	bid,
	brewer_eid,
	created_on,
	user_name,
	uid,
	num_of_comments,
}) => {
	console.log("postItem");
	const navigation = useNavigation();
	// const [commentButtonText, setCommentButtonText] = useState(
	// 	`Show all ${num_of_comments} ${num_of_comments > 1 ? "comments" : "comment"}`
	// );
	const [showComments, setShowComments] = useState(false);
	const [commentBarVisible, setCommentBarVisible] = useState(num_of_comments < 1);
	// const commentWord = useMemo(
	// 	() => (num_of_comments > 1 ? "comments" : "comment"),
	// 	[num_of_comments]
	// );

	const pressUserHandler = useCallback((val) => {
		console.log("pressed, uid: ", val);
	}, []);

	const selectRecipeHandler = () => {
		navigation.navigate("RecipeDetail", { id: id });
	};

	// const pressShowCommentsHandler = () => {
	// 	if (showComments) {
	// 		setCommentButtonText(`Show all ${num_of_comments} ${commentWord}`);
	// 		setShowComments(false);
	// 		console.log("hid comments");
	// 	} else {
	// 		setCommentButtonText(`Hide all ${commentWord}`);
	// 		setShowComments(true);
	// 		console.log("showing comments");
	// 	}
	// };

	return (
		<View style={styles.container}>
			<Pressable
				android_ripple={{ color: "#ccc" }}
				style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
				onPress={selectRecipeHandler}
			>
				<View style={styles.imageContainer}>
					<ImageBackground
						source={{ uri: photo_url }}
						resizeMode="cover"
						style={styles.image}
					>
						<LikeFavoriteBar id={id} />
					</ImageBackground>
				</View>
				<View style={styles.userDetail}>
					<UserDetail name={user_name} uid={uid} onPress={pressUserHandler} />
					<Text style={styles.createdOn}>on {getDate(created_on)}</Text>
				</View>
				<View style={styles.postDetailContainer}>
					<PostDetail
						name={name}
						brewer={brewer}
						type={type}
						description={description}
						bean={bean}
						bid={bid}
						brewer_eid={brewer_eid}
						style={styles.postDetail}
					/>
				</View>
				<TouchableWithoutFeedback>
					<View style={styles.commentsContainer}>
						{showComments && (
							<Comments
								id={id}
								style={styles.commentsModule}
								onPressUser={pressUserHandler}
							/>
						)}
						{num_of_comments > 0 ? (
							<ShowCommentButton
							showComments={showComments}
							setShowComments={setShowComments}
							id={id}/>
						) : (
							commentBarVisible && (
								<CommentBar
									id={id}
									style={styles.commentBar}
									onPressPost={() => {
										setCommentBarVisible(false);
										setShowComments(true);
									}}
								/>
							)
						)}
					</View>
				</TouchableWithoutFeedback>
			</Pressable>
		</View>
	);
};

export default PostItem;

const styles = StyleSheet.create({
	container: {
		margin: 16,
		minWidth: 300,
		paddingBottom: 5,
		borderRadius: 8,
		overflow: Platform.OS === "android" ? "hidden" : "visible",
		backgroundColor: "white",
		shadowColor: "black",
		shadowOpacity: 0.1,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 2,
	},
	userDetail: {
		flexDirection: "row",
		marginTop: 10,
		marginLeft: 10,
		alignItems: "center",
	},
	createdOn: {
		fontSize: 14,
		color: "rgba(0,0,0,0.5)",
		fontWeight: "400",
		textAlign: "right",
		flex: 1,
		marginRight: 10,
	},
	buttonPressed: {
		opacity: 0.5,
	},
	imageContainer: {
		shadowColor: "black",
		shadowOpacity: 0.1,
		shadowOffset: { width: 0, height: 0 },
		shadowRadius: 2,
	},
	image: {
		width: "100%",
		height: 300,
		borderTopLeftRadius: 8,
		borderTopRightRadius: 8,
		// borderRadius: 8,
		overflow: "hidden",
		alignItems: "flex-end",
		justifyContent: "flex-end",
	},
	postDetail: {},
	postDetailContainer: { marginTop: 10 },
	title: {
		fontWeight: "600",
		textAlign: "center",
		fontSize: 18,
		marginTop: 8,
	},
	commentsContainer: {
		paddingHorizontal: 10,
		marginTop: 10,
		// minHeight: 20
		// maxHeight: 100
	},
	commentsButton: {
		paddingTop: 7,
	},
	commentsModule: {
		// maxHeight: 100
	},
});
