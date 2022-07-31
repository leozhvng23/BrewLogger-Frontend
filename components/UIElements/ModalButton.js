import { useState } from "react";
import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ModalButton = ({ onPress, initialIcon, pressedIcon, timeout, color, size, style }) => {
	const [iconName, setIconName] = useState(initialIcon);

    const pressButtonHandler = () => {
        setIconName(pressedIcon);
        onPress();
        setTimeout(() => setIconName(initialIcon), (timeout || 80));
    }

	return (
		<Pressable onPress={pressButtonHandler} style={[({ pressed }) => pressed && styles.pressed, style, styles.button]}>
			<Ionicons name={iconName} size={size || 24} color={color || "black"} />
		</Pressable>
	);
};

export default ModalButton;

const styles = StyleSheet.create({
    button:{
        padding: 2,
    },
	pressed: {
		opacity: 0.7,
	},
});