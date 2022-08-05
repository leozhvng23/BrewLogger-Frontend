import { useLayoutEffect, useEffect, useState } from "react";
import { Text } from "react-native";
import RecipeForm from "../components/RecipeForm";
import BackButton from "../components/UIElements/Buttons/BackButton";

function ManageRecipeScreen({ route, navigation }) {
	const editedRecipeId = route.params?.id;
	const isEditing = !!editedRecipeId;

	const backHandler = () => {
		navigation.goBack();
	};

	useLayoutEffect(() => {
		navigation.setOptions({
			title: isEditing ? "Edit Recipe" : "Add Recipe",
			headerLeft: () => <BackButton onPress={backHandler} />,
		});
	}, [navigation, isEditing]);

	return <RecipeForm navigation={navigation} />;
}

export default ManageRecipeScreen;
