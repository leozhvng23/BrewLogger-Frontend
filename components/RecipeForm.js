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
import InputSelect from "./UIElements/Form/InputSelect";
import SearchModal from "./UIElements/Form/SearchModal";


const RecipeForm = ({ onSubmit, navigation, initialValues, isEdit, data }) => {
    // const [error, setError] = useState();
	const beans = data.beans
	const brewers = data.brewers
	const grinders = data.grinders

	const [beansModalVisible, setBeansModalVisible] = useState(false);
	const [brewersModalVisible, setBrewersModalVisible] = useState(false);
	const [grindersModalVisible, setGrindersModalVisible] = useState(false);
	const [beanPlaceholder, setBeanPlaceholder] = useState({
		text: "select coffee bean",
		color: "rgba(0,0,0,0.2)",
	});
	const [brewerPlaceholder, setBrewerPlaceholder] = useState({
		text: "select coffee brewer",
		color: "rgba(0,0,0,0.2)",
	});
	const [grinderPlaceholder, setGrinderPlaceholder] = useState({
        text: "select coffee grinder",
		color: "rgba(0,0,0,0.2)",
    })

    const submitHandler = () => {
        console.log(inputValues)
        const submitValue = {
            name: inputValues.name,
            description: inputValues.description
        }
		onSubmit(submitValue);
	};

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
					"Save changes?",
					"Do you want to save this recipe?",
					[
                        {text: "Cancel", style:"default", onPress:() => {}},
						{ text: "Discard Changes", style: "destructive", onPress: () => navigation.dispatch(e.data.action) },
						{
							text: "Save Recipe",
							style: "cancel",
							// If the user confirmed, then we dispatch the action we blocked earlier
							// This will continue the action that had triggered the removal of the screen
							onPress: submitHandler,
						},
					]
				);
			}),
		[navigation, hasUnsavedChanges]
	);

	// const inputChangedHandler = (inputIdentifier, enteredValue) => {
	// 	setInputValues((curInputValues) => {
	// 		return {
	// 			...curInputValues,
	// 			[inputIdentifier]: enteredValue,
	// 		};
	// 	});
	// };



	const submitBeanValueHandler = (id, name) => {
        setBeanPlaceholder({text: name, color: "black"});
		setInputValues((curInputValues) => {
			return {
				...curInputValues,
				["bid"]: id,
			};
		});
		console.log(inputValues);
		setBeansModalVisible(false);
	};
	const submitBrewerValueHandler = (id, name) => {
		setBrewerPlaceholder({text: name, color: "black"});
		setInputValues((curInputValues) => {
			return {
				...curInputValues,
				["eid_brewer"]: id,
			};
		});
		setBrewersModalVisible(false);
	};
	const submitGrinderValueHandler = (id, name) => {
		setGrinderPlaceholder({text: name, color: "black"});
		setInputValues((curInputValues) => {
			return {
				...curInputValues,
				["eid_grinder"]: id,
			};
		});
		setGrindersModalVisible(false);
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
					onSubmit={submitBeanValueHandler}
				/>
				<SearchModal
					data={brewers}
					visible={brewersModalVisible}
					setModalVisible={setBrewersModalVisible}
					onSubmit={submitBrewerValueHandler}
				/>
				<SearchModal
					data={grinders}
					visible={grindersModalVisible}
					setModalVisible={setGrindersModalVisible}
					onSubmit={submitGrinderValueHandler}
				/>
			</View>
			<ScrollView>
				<View style={styles.form}>
					<View style={styles.inputsCol}>
						<Input
							label="Recipe Name"
							textInputConfig={{
								maxLength: 30,
								onChangeText: (e) => setInputValues({...inputValues, "name": e.target.value}),
								value: inputValues.name,
							}}
						/>
						<Input
							label="Description"
							textInputConfig={{
								multiline: true,
								onChangeText:(e) => setInputValues({...inputValues, "description": e.target.value}), 
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
									onChangeText: (e) => setInputValues({...inputValues, "brew_time": e.target.value}),
									value: inputValues.brew_time,
								}}
							/>

							<Input
								style={styles.rowInput}
								label="Yield"
								textInputConfig={{
									keyboardType: "number-pad",
									placeholder: "(grams)",
									onChangeText: (e) => setInputValues({...inputValues, "yield": e.target.value}),
									value: inputValues.yield,
								}}
							/>
						</View>
						<View style={styles.inputsRow}>
							<InputSelect
								style={{ flex: 2 }}
								label="Coffee Bean"
								onPress={pressBeanHandler}
								placeholder={beanPlaceholder.text}
                                color={beanPlaceholder.color}
							/>
							<Input
								style={styles.rowInput}
								label="Bean Dose"
								textInputConfig={{
									keyboardType: "number-pad",
									placeholder: "(grams)",
									onChangeText: (e) => setInputValues({...inputValues, "bean_amount": e.target.value}),	
									value: inputValues.bean_amount,
								}}
							/>
						</View>
						<InputSelect
							label="Coffee Brewer"
							onPress={pressBrewerHandler}
							placeholder={brewerPlaceholder.text}
                            color={brewerPlaceholder.color}
						/>
						<Input
							label="Brewer Setting"
							textInputConfig={{
								multiline: true,
								onChangeText: (e) => setInputValues({...inputValues, "setting_brewer": e.target.value}),
								value: inputValues.setting_brewer,
							}}
						/>
						<InputSelect
							label="Coffee Grinder"
							onPress={pressGrinderHandler}
							placeholder={grinderPlaceholder.text}
                            color={grinderPlaceholder.color}
						/>

						<Input
							label="Grinder Setting"
							textInputConfig={{
								multiline: true,
								onChangeText: (value) => setInputValues({...inputValues, "setting_grinder": value}),
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
