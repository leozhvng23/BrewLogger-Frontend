import { StyleSheet, Text, View, Pressable } from "react-native";
import IconButton from "./IconButton";
import { useNavigation } from "@react-navigation/native";

const BackButton = () => {
	const navigation = useNavigation();
	const backHandler = () => navigation.goBack();

	return (
		<Pressable style={styles.container} onPress={backHandler}>
			<IconButton icon="chevron-back" color="black" onPress={backHandler} />
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
