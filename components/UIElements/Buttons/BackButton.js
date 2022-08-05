import { StyleSheet, Text, View, Pressable } from "react-native";
import IconButton from "./IconButton";
import { useNavigation } from "@react-navigation/native";

const BackButton = ({onPress, hideIcon, hideText}) => {
	return (
		<Pressable style={styles.container} onPress={onPress}> 
			{!hideIcon && <IconButton icon="chevron-back" color="black" onPress={onPress} />}
			{!hideText && <Text style={styles.text}>Back</Text>}
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
