import { useState } from "react";
import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const AddButton = ({ onAddData }) => {
	const [iconName, setIconName] = useState("add-circle-outline");

    const pressButtonHandler = () => {
        setIconName("add-circle");
        onAddData();
    }

	return (
		<Pressable onPress={pressButtonHandler}>
			<Ionicons name={iconName} size={24} color="black" />
		</Pressable>
	);
};

export default AddButton;

const styles = StyleSheet.create({});
