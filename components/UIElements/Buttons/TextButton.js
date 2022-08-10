import { Pressable, StyleSheet, Text, View } from "react-native";

const TextButton = ({ onPress, color, size, style, label, fontWeight }) => {
	return (
		<Pressable onPress={onPress} style={({ pressed }) => pressed && styles.pressed}>
			<View
				style={[style, styles.button]}
			>
				<Text
					style={[
						styles.text,
						{ color: color, fontSize: size, fontWeight: fontWeight },
					]}
				>
					{label}
				</Text>
			</View>
		</Pressable>
	);
};

export default TextButton;

const styles = StyleSheet.create({
	button: {
		padding: 2,
		alignItems: "center",
		justifyContent: "center",
	},
	pressed: {
		opacity: 0.5,
	},
});
