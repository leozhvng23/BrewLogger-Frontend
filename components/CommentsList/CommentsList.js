import { StyleSheet, Text, View, ScrollView } from "react-native";

import { FlatList } from "react-native-gesture-handler";
import React, { useCallback, useState } from "react";

import CommentItem from "./CommentItem";

const CommentsList = ({ items, style, onPressUser }) => {

	const renderComment = useCallback((data) => {
		const comment = data.item;

		const commentProps = {
			cid: comment.cid,
			user_name: comment.user_name,
			uid: comment.uid,
			posted_on: comment.posted_on,
			content: comment.content,
			num_of_likes: comment.num_of_likes,
            is_liked: comment.is_liked
		};

		return <CommentItem {...commentProps} onPressUser={onPressUser} />;
	}, []);

	return (
		<FlatList
			data={items}
			keyExtractor={(item) => item.cid}
			renderItem={renderComment}
			// scrollsToTop
            persistentScrollbar = {true}
			style={styles.flatList}
			contentContainerStyle={{ paddingVertical: 5 }}
		/>
	);
};

export default CommentsList;

const styles = StyleSheet.create({
    flatList: {
        maxHeight: 200
    }
});
