import { StyleSheet, Text, View, Pressable } from "react-native";

const AttributeItem = ({ icon, data, id, style, color }) => {
	return (
		<View style={[styles.container, style]}>
			<Text style={styles.text}>{data}</Text>
		</View>
	);
};

export default AttributeItem;

const styles = StyleSheet.create({
	container: {
		backgroundColor: "rgba(0,0,0,0.1)",
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderRadius: 20
	},
	text: {
		fontSize: 14,
        fontWeight: "500"
	},
});
