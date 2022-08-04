import { useState, useEffect } from "react";
import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	Pressable,
	SafeAreaView,
	Alert,
} from "react-native";

import Input from "./UIElements/Form/input";

// const myBeans
// const myEquipments

// uid,
// name,
// description,
// brew_time,
// guide,
// yield,
// type,
// photo_url,
// bid,
// bean_amount,
// eid_brewer,
// eid_grinder,
// setting_brewer,
// setting_grinder,

const RecipeForm = ({ submitButtonLabel, onCancel, onSubmit, navigation }) => {
	const [inputValues, setInputValues] = useState({
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
	});

	const hasUnsavedChanges =
		Boolean(inputValues.name) ||
		Boolean(inputValues.description) ||
		Boolean(inputValues.brew_time) ||
		Boolean(inputValues.yield) ||
		Boolean(inputValues.type) ||
		Boolean(inputValues.bid) ||
		Boolean(inputValues.bean_amount) ||
		Boolean(inputValues.eid_brewer) ||
		Boolean(inputValues.setting_brewer) ||
		Boolean(inputValues.eid_grinder) ||
		Boolean(inputValues.setting_grinder) ||
		Boolean(inputValues.guide.length);

	useEffect(
		() =>
			navigation.addListener("beforeRemove", (e) => {
				if (!hasUnsavedChanges) {
					// If we don't have unsaved changes, then we don't need to do anything
					return;
				}

				// Prevent default behavior of leaving the screen
				e.preventDefault();

				// Prompt the user before leaving the screen
				Alert.alert(
					"Discard changes?",
					"You have unsaved changes. Are you sure to discard?",
					[
						{ text: "Don't leave", style: "cancel", onPress: () => {} },
						{
							text: "Discard",
							style: "destructive",
							// If the user confirmed, then we dispatch the action we blocked earlier
							// This will continue the action that had triggered the removal of the screen
							onPress: () => navigation.dispatch(e.data.action),
						},
					]
				);
			}),
		[navigation, hasUnsavedChanges]
	);

	const inputChangedHandler = (inputIdentifier, enteredValue) => {
		setInputValues((curInputValues) => {
			return {
				...curInputValues,
				[inputIdentifier]: enteredValue,
			};
		});
	};

	const submitHandler = () => {
		console.log("submitted!");
		// onSubmit();
	};

	return (
		<SafeAreaView>
			<ScrollView>
				<View style={styles.form}>
					<View style={styles.inputsCol}>
						<Input
							label="Recipe Name"
							textInputConfig={{
								maxLength: 30,
								onChangeText: inputChangedHandler.bind(this, "name"),
								value: inputValues.name,
							}}
						/>
						<Input
							label="Description"
							textInputConfig={{ multiline: true }}
						/>
						<View style={styles.inputsRow}>
							<View style={styles.rowInput}>
								<Input
									styles={styles.rowInput}
									label="Brew Time"
									textInputConfig={{
										keyboardType: "numbers-and-punctuation",
										placeholder: "DD:HH:MM",
									}}
								/>
							</View>
							<View style={styles.rowInput}>
								<Input
									label="Yield"
									textInputConfig={{
										keyboardType: "number-pad",
										placeholder: "amount in grams",
									}}
								/>
							</View>
						</View>
						<Input
							label="Bean Dose"
							textInputConfig={{
								keyboardType: "number-pad",
								placeholder: "amount in grams",
							}}
						/>
						<Input
							label="Brewer Setting"
							textInputConfig={{ multiline: true }}
						/>
						<Input
							label="Grinder Setting"
							textInputConfig={{ multiline: true }}
						/>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default RecipeForm;

const styles = StyleSheet.create({
	// title: {
	//     fontSize: 24,
	//     fontWeight: 'bold',
	//     marginVertical: 24,
	//     textAlign: 'center'
	//   },
	form: {
		padding: "3%",
		marginBottom: 350,
	},
	inputsCol: {
		flexDirection: "col",
	},
	inputsRow: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	rowInput: {
		flex: 1,
	},
	brewTime: {},
});
