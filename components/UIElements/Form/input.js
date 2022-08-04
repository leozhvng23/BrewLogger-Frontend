import { StyleSheet, Text, TextInput, View } from "react-native";

function Input({ label, style, textInputConfig }) {
	const inputStyles = [styles.input];

	if (textInputConfig && textInputConfig.multiline) {
		inputStyles.push(styles.inputMultiline);
	}

	return (
		<View style={[styles.inputContainer, style]}>
			<Text style={styles.label}>{label}</Text>
			<TextInput style={inputStyles} {...textInputConfig} />
		</View>
	);
}

export default Input;

const styles = StyleSheet.create({
	inputContainer: {
		marginHorizontal: 4,
		marginVertical: 8,
	},
	label: {
		fontSize: 16,
		color: "black",
		marginBottom: 6,
        marginLeft: 3,
        fontWeight: "500"

	},
	input: {
		backgroundColor: "rgba(0,0,0,0.1)",
		color: "black",
		paddingVertical: 8,
        paddingHorizontal: 8,
		borderRadius: 6,
		fontSize: 15,
	},
	inputMultiline: {
		minHeight: 100,
		textAlignVertical: "top",
	},
});
