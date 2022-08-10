import { useState, useMemo } from "react";
import {
	View,
	Pressable,
	Text,
	Image,
	StyleSheet,
	Platform,
	ImageBackground,
	TouchableWithoutFeedback,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import UserDetail from "../PostDetail/UserDetail";
import PostDetail from "../PostDetail/PostDetail";

import { getDate } from "../../util/dateTime";
import TextButton from "../UIElements/Buttons/TextButton";

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
	num_of_likes,
}) => {
	const navigation = useNavigation();
	const [commentButtonText, setCommentButtonText] = useState(
		`Show all ${num_of_comments} ${num_of_comments > 1 ? "comments" : "comment"}`
	);
	const [showComments, setShowComments] = useState(false);
	const commentWord = useMemo(
		() => (num_of_comments > 1 ? "comments" : "comment"),
		[num_of_comments]
	);

	const selectRecipeHandler = () => {
		navigation.navigate("RecipeDetail", { id: id });
	};

	const pressUserHandler = () => {
		console.log("pressed, uid: ", uid);
	};

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
					></ImageBackground>
				</View>
				<View style={styles.userDetail}>
					<UserDetail name={user_name} onPress={pressUserHandler} />
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
							<View>
								<Text>here are the comments</Text>
							</View>
						)}
						{num_of_comments > 0 ? (
							<TextButton
								label={commentButtonText}
								onPress={pressShowCommentsHandler}
								color="rgba(0,0,0,0.6)"
								size={14}
								style={styles.commentsButton}
							/>
						) : (
							<Text>post comment here____</Text> //postComment module
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
		flexDirection: "column",
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
		// minHeight: 20
	},
	commentsButton: {
		paddingTop: 10,
	},
});
