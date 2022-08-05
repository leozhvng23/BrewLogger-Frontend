import { useLayoutEffect, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Text, Alert } from "react-native";
import RecipeForm from "../components/RecipeForm";
import BackButton from "../components/UIElements/Buttons/BackButton";
import TextButton from "../components/UIElements/Buttons/TextButton";
import { getAllBrewersNames, getAllBeansNames, getAllGrindersNames } from "../util/http";
import { setBrewersNames, setGrindersNames } from '../store/redux/equipments'
import { setBeansNames } from "../store/redux/beans";

function ManageRecipeScreen({ route, navigation }) {
	const editedRecipeId = route.params?.id;
	const isEditing = !!editedRecipeId;

	const dispatch = useDispatch();

	useEffect(() => {
		const fetchBrewers = async () => {
			try {
				const brewers = await getAllBrewersNames();
				dispatch(setBrewersNames({ brewers: brewers}));
			} catch (err) {
				// setError("Could not fetch brewers.");
			}
			// setTimeout(() => setIsFetching(false), 2000);
		};
        const fetchGrinders = async () => {
            try {
                const grinders = await getAllGrindersNames();
                dispatch(setGrindersNames({grinders: grinders}))
            } catch (err) {
                // setError("Could not fetch grinders.")
            }
        }
        const fetchBeans = async () => {
            try {
                const beans = await getAllBeansNames();
                dispatch(setBeansNames({beans: beans}));
            } catch (err) {
                // setError("Could not fetch beans.")
            }
        }
		fetchBrewers();
        fetchGrinders();
        fetchBeans();
	}, []);

    const beans = useSelector((state) => state.beans.beans);
	const brewers = useSelector((state) => state.equipments.brewers);
    const grinders = useSelector((state) => state.equipments.grinders);
	const data = {"beans": beans, "brewers": brewers, "grinders": grinders};

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

	return <RecipeForm navigation={navigation} onSubmit={submitHandler} data={data}/>;
}

export default ManageRecipeScreen;
