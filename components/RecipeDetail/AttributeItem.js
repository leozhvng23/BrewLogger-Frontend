import { StyleSheet, Text, View, Pressable } from "react-native";

const AttributeItem = ({ icon, data, id, style, color, textStyle, onPress }) => {
	return (
		<Pressable onPress={onPress} style={({ pressed }) => pressed && styles.pressed}>
			<View style={[styles.container, style]}>
				<Text style={[styles.text, textStyle]}>{data}</Text>
			</View>
		</Pressable>
	);
};

export default AttributeItem;

const styles = StyleSheet.create({
	container: {
		backgroundColor: "rgba(0,0,0,0.1)",
		paddingHorizontal: 15,
		paddingVertical: 8,
		borderRadius: "25%",
	},
	text: {
		fontSize: 14,
		fontWeight: "500",
	},
	pressed:{
		opacity: 0.5,
	}
});
