import { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	Pressable,
	SafeAreaView,
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

const pressTimeHandler = () => {
	console.log("select time");
};

const RecipeForm = (submitButtonLabel, onCancel, onSubmit) => {
	const [inputValues, setInputValues] = useState({
		name: "",
		description: "",
		brew_time: "",
		yield: "",
		type: "",
		bean_amount: "",
		setting_brewer: "",
		setting_grinder: "",
	});

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
								<Pressable onPress={pressTimeHandler}>
									<Input
										styles={styles.rowInput}
										label="Brew Time"
										textInputConfig={{
											keyboardType: "number-pad",
											placeholder: "DD:HH:MM",
										}}
									/>
								</Pressable>
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
