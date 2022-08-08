import { useLayoutEffect, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Text, Alert } from "react-native";
import RecipeForm from "../components/RecipeForm";
import BackButton from "../components/UIElements/Buttons/BackButton";
import TextButton from "../components/UIElements/Buttons/TextButton";
import { getAllBrewersNames, getAllBeansNames, getAllGrindersNames } from "../util/http";
import { setBrewersNames, setGrindersNames } from "../store/redux/equipments";
import { setBeansNames } from "../store/redux/beans";
import { useNavigation, useRoute } from "@react-navigation/native";

function ManageRecipeScreen() {
	const navigation = useNavigation().getParent("recipesStack");
	const route = useRoute();
	const editedRecipeId = route.params?.id;
	const isEditing = !!editedRecipeId;

	const dispatch = useDispatch();

	useEffect(() => {
		const fetchBrewers = async () => {
			try {
				const brewers = await getAllBrewersNames();
				dispatch(setBrewersNames({ brewers: brewers }));
			} catch (err) {
				// setError("Could not fetch brewers.");
			}
			// setTimeout(() => setIsFetching(false), 2000);
		};
		const fetchGrinders = async () => {
			try {
				const grinders = await getAllGrindersNames();
				dispatch(setGrindersNames({ grinders: grinders }));
			} catch (err) {
				// setError("Could not fetch grinders.")
			}
		};
		const fetchBeans = async () => {
			try {
				const beans = await getAllBeansNames();
				dispatch(setBeansNames({ beans: beans }));
			} catch (err) {
				// setError("Could not fetch beans.")
			}
		};
		fetchBrewers();
		fetchGrinders();
		fetchBeans();
	}, []);

	const beans = useSelector((state) => state.beans.beans);
	const brewers = useSelector((state) => state.equipments.brewers);
	const grinders = useSelector((state) => state.equipments.grinders);
	const data = { beans: beans, brewers: brewers, grinders: grinders };

	const initialValues = {
		name: "",
		description: "",
		brew_time: "",
		yield: "",
		type: "",
		bid: "",
		bean_amount: "",
		eid_brewer: "",
		setting_brewer: "",
		eid_grinder: "",
		setting_grinder: "",
		guide: "",
	};

	const submitHandler = (inputValues) => {
		console.log(inputValues);
		navigation.goBack();
	};

	const backHandler = () => {
		Alert.alert("Discard changes?", "This cannot be undone.", [
			{ text: "Cancel", style: "cancel", onPress: () => {} },
			{
				text: "Discard",
				style: "destructive",
				onPress: () => navigation.goBack(),
			},
		]);
	};

	useLayoutEffect(() => {
		navigation.setOptions({
			title: isEditing ? "Edit Recipe" : "Add Recipe",
			headerLeft: () => <BackButton onPress={backHandler} />,
		});
	}, [navigation, isEditing]);

	return (
		<RecipeForm
			navigation={navigation}
			onSubmit={submitHandler}
			data={data}
			initialValues={initialValues}
		/>
	);
}

export default ManageRecipeScreen;
