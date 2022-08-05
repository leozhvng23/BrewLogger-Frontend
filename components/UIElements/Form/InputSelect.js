import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

function InputSelect({ label, style, onPress, placeholder, color }) {
	return (
		<View style={[styles.inputContainer, style]}>
			<Text style={styles.label}>{label}</Text>
			<Pressable
				style={({ pressed }) => pressed && styles.pressed}
				onPress={onPress}
			>
				<View style={styles.input}>
					<Text style={[styles.text, {color: color}]}>{placeholder}</Text>
				</View>
			</Pressable>
		</View>
	);
}

export default InputSelect;

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
	},
	text: {
		fontSize: 16,
		fontWeight: "500",
	},
	inputMultiline: {
		minHeight: 100,
		textAlignVertical: "top",
	},
	pressed: {
		opacity: 0.5,
	},
});
