import { StyleSheet } from "react-native";
import ModalButton from "./ModalButton";

const AddButton = ({ onAddData, color }) => {
	return (
		<ModalButton
			onPress={onAddData}
			initialIcon="add-circle-outline"
			pressedIcon="add-circle"
            color={color}
		/>
	);
};

export default AddButton;

const styles = StyleSheet.create({});
