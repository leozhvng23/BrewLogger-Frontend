import { Pressable, StyleSheet, Text } from "react-native";

const TextButton = ({ onPress, color, size, style, label, fontWeight }) => {
	return (
		<Pressable
			onPress={onPress}
			style={[({ pressed }) => pressed && styles.pressed, style, styles.button]}
		>
			<Text style={[styles.text, {color: color, fontSize: size, fontWeight:fontWeight}]}>{label}</Text>
		</Pressable>
	);
};

export default TextButton;

const styles = StyleSheet.create({
	button: {
		padding: 2,
        alignItems: "center",
        justifyContent: "center"
	},
	pressed: {
		opacity: 0.7,
	},
});
