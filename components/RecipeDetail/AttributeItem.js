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
		backgroundColor: "rgba(0,0,0,0.2)",
        paddingHorizontal: 5,
        paddingVertical: 6,
        margin: 2,
        borderRadius: 4
	},
	text: {
		fontSize: 14,
	},
});
