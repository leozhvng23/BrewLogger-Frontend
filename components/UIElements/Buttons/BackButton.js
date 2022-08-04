import { StyleSheet, Text, View, Pressable } from "react-native";
import IconButton from "./IconButton";
import { useNavigation } from "@react-navigation/native";

const BackButton = () => {
	const navigation = useNavigation();
	return (
		<Pressable style={styles.container} onPress={() => navigation.goBack(null)}>
			<IconButton icon="chevron-back" color="black" />
			<Text style={styles.text}>Back</Text>
		</Pressable>
	);
};

export default BackButton;

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
	},
	text: {
		fontSize: 18,
	},
});
