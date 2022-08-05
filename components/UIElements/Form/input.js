import { StyleSheet, Text, TextInput, View } from "react-native";

function Input({ label, style, editable, textInputConfig, onPressIn }) {
	const inputStyles = [styles.input];

	if (textInputConfig && textInputConfig.multiline) {
		inputStyles.push(styles.inputMultiline);
	}

	return (
		<View style={[styles.inputContainer, style]}>
			<Text style={styles.label}>{label}</Text>
			<TextInput
				style={inputStyles}
				contextMenuHidden={true}
                editable={editable}
                onPressIn={onPressIn}
				{...textInputConfig}
			/>
		</View>
	);
}

export default Input;

const styles = StyleSheet.create({
	inputContainer: {
		marginHorizontal: 6,
		marginVertical: 12,
	},
	label: {
		fontSize: 16,
		color: "rgba(0,0,0,0.5)",
		marginBottom: 8,
		marginLeft: 3,
		fontWeight: "500",
	},
	input: {
		backgroundColor: "rgba(0,0,0,0.1)",
		color: "black",
		paddingVertical: 8,
		paddingHorizontal: 8,
		borderRadius: 6,
		fontSize: 16,
        fontWeight: "500"
	},
	inputMultiline: {
		minHeight: 100,
		textAlignVertical: "top",
	},
});
