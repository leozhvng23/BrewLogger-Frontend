import { StyleSheet, View, FlatList } from "react-native";

import PostItem from "./PostItem";

const PostsList = ({ items, style }) => {
	const renderPost = (data) => {
		const recipe = data.item;
		const recipeProps = {
			id: recipe.id,
			name: recipe.name,
			photo_url: recipe.photo_url,
            description: recipe.description,
			brewer: recipe.brewer,
            brewer_eid: recipe.brewer_eid,
            bean: recipe.bean_name,
            bid: recipe.bid,
            user_name: recipe.user_name,
            uid: recipe.uid,
            created_on: recipe.created_on
		};
		return <PostItem {...recipeProps} />;
	};

	return (
			<FlatList
				data={items}
				keyExtractor={(item) => item.id}
				renderItem={renderPost}
				contentContainerStyle={style}
			/>
	);
};

export default PostsList;

const styles = StyleSheet.create({
	container: {},
});
