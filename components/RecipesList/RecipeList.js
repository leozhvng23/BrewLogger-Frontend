import { StyleSheet, View, FlatList } from "react-native";

import RecipeItem from "./RecipeItem";

const RecipeList = ({ items, style, horizontal, showsHorizontalScrollIndicator }) => {
	const renderRecipe = (data) => {
		const recipe = data.item;

		const recipeProps = {
			id: recipe.id,
			name: recipe.name,
			photo_url: recipe.photo_url,
			type: recipe.type,
			brew_time: recipe.brew_time,
			brewer: recipe.brewer,
		};

		return <RecipeItem {...recipeProps} />;
	};

	return (
			<FlatList
				data={Object.values(items)}
				keyExtractor={(item) => item.id}
				renderItem={renderRecipe}
				scrollsToTop
				contentContainerStyle={style}
				horizontal={horizontal || false}
				showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
			/>
	);
};

export default RecipeList;

const styles = StyleSheet.create({
	container: {},
});
