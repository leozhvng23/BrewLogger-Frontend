import { useLayoutEffect, useEffect, useState } from "react";
import { Text, Alert } from "react-native";
import RecipeForm from "../components/RecipeForm";
import BackButton from "../components/UIElements/Buttons/BackButton";
import TextButton from "../components/UIElements/Buttons/TextButton";

function ManageRecipeScreen({ route, navigation }) {
	const editedRecipeId = route.params?.id;
	const isEditing = !!editedRecipeId;

	const submitHandler = (inputValues) => {
		console.log(inputValues);
	};

	// const doneHandler = () => {
	// 	Alert.alert("Save changes?", "Are you sure to save this recipe?", [
	// 		{ text: "Go back", style: "cancel", onPress: () => {} },
	// 		{
	// 			text: "Yes",
	// 			style: "default",
	// 			// If the user confirmed, then we dispatch the action we blocked earlier
	// 			// This will continue the action that had triggered the removal of the screen
	// 			onPress: submitHandler,
	// 		},
	// 	]);
	// };

	const backHandler = () => {
    navigation.goBack();
	};

	useLayoutEffect(() => {
		navigation.setOptions({
			title: isEditing ? "Edit Recipe" : "Add Recipe",
			headerLeft: () => <BackButton onPress={backHandler} />,
			headerRight: () => (
				<TextButton
					onPress={backHandler}
					color="#008cffff"
					size={18}
					fontWeight="600"
					style={{ marginRight: 5 }}
					label="Done"
				/>
			),
		});
	}, [navigation, isEditing]);

	return <RecipeForm navigation={navigation} onSubmit={submitHandler}/>;
}

export default ManageRecipeScreen;
