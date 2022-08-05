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

import Input from "./UIElements/Form/Input";
import SearchModal from "./UIElements/Form/SearchModal";

const RecipeForm = ({ submitButtonLabel, onCancel, onSubmit, navigation }) => {
	const [beansModalVisible, setBeansModalVisible] = useState(false);
	const [brewersModalVisible, setBrewersModalVisible] = useState(false);
	const [grindersModalVisible, setGrindersModalVisible] = useState(false);

	const beans = {};
	const brewers = {
		1: {
			id: 1,
			name: "La Marzocco Linea Mini",
			detail: "La Marzocco",
		},
		7: {
			id: 7,
			name: "Clever Dripper",
			detail: "Clever Coffee",
		},
		4: {
			id: 4,
			name: "Hario V60 Plastic",
			detail: "Hario",
		},
		5: {
			id: 5,
			name: "Stagg X",
			detail: "Fellow",
		},
		6: {
			id: 6,
			name: "Kalita Wave",
			detail: "Kalita",
		},
		9: {
			id: 9,
			name: "Flair 58",
			detail: "Flair Espresso",
		},
	};
	const grinders = {};

	let searchData;
	const [inputValues, setInputValues] = useState({
		name: "",
		description: "",
		brew_time: "",
		yield: "",
		type: "",
		bean: "",
		bid: "",
		bean_amount: "",
		brewer: "",
		eid_brewer: "",
		setting_brewer: "",
		eid_grinder: "",
		grinder: "",
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
		onSubmit(inputValues);
	};

	const pressBeanHandler = () => {
		setBeansModalVisible(true);
	};
	const pressBrewerHandler = () => {
		setBrewersModalVisible(true);
	};
	const pressGrinderHandler = () => {
		setGrindersModalVisible(true);
	};

	return (
		<SafeAreaView>
			<View style={styles.centeredView}>
				<SearchModal
					data={beans}
					visible={beansModalVisible}
					setModalVisible={setBeansModalVisible}
				/>
				<SearchModal
					data={brewers}
					visible={brewersModalVisible}
					setModalVisible={setBrewersModalVisible}
				/>
				<SearchModal
					data={grinders}
					visible={grindersModalVisible}
					setModalVisible={setGrindersModalVisible}
				/>
			</View>
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
							textInputConfig={{
								multiline: true,
								onChangeText: inputChangedHandler.bind(
									this,
									"description"
								),
								value: inputValues.description,
							}}
						/>
						<View style={styles.inputsRow}>
							<Input
								style={styles.rowInput}
								label="Brew Time"
								textInputConfig={{
									keyboardType: "numbers-and-punctuation",
									placeholder: "DD:HH:MM",
									onChangeText: inputChangedHandler.bind(
										this,
										"brew_time"
									),
									value: inputValues.brew_time,
								}}
							/>

							<Input
								style={styles.rowInput}
								label="Yield"
								textInputConfig={{
									keyboardType: "number-pad",
									placeholder: "(grams)",
									onChangeText: inputChangedHandler.bind(this, "yield"),
									value: inputValues.yield,
								}}
							/>
						</View>
						<View style={styles.inputsRow}>
							<Input
								style={{ flex: 2 }}
								label="Coffee Bean"
								editable={false}
								onPressIn={pressBeanHandler}
								textInputConfig={{ placeholder: "select bean" }}
							/>
							<Input
								style={styles.rowInput}
								label="Bean Dose"
								textInputConfig={{
									keyboardType: "number-pad",
									placeholder: "(grams)",
									onChangeText: inputChangedHandler.bind(
										this,
										"bean_amount"
									),
									value: inputValues.bean_amount,
								}}
							/>
						</View>
						<Input
							label="Coffee Brewer"
							editable={false}
							onPressIn={pressBrewerHandler}
							textInputConfig={{
								placeholder: "select coffee brewer or espresso machine",
							}}
						/>
						<Input
							label="Brewer Setting"
							textInputConfig={{
								multiline: true,
								onChangeText: inputChangedHandler.bind(
									this,
									"setting_brewer"
								),
								value: inputValues.setting_brewer,
							}}
						/>
						<Input
							label="Coffee Grinder"
							editable={false}
							onPressIn={pressGrinderHandler}
							textInputConfig={{ placeholder: "select coffee grinder" }}
						/>

						<Input
							label="Grinder Setting"
							textInputConfig={{
								multiline: true,
								onChangeText: inputChangedHandler.bind(
									this,
									"setting_grinder"
								),
								value: inputValues.setting_grinder,
							}}
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
	centeredView: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	form: {
		paddingHorizontal: "4%",
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
