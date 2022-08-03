import { StyleSheet } from "react-native";
import ModalButton from "./ModalButton";


const EditButton = ({ onEditData, color }) => {
    return (
		<ModalButton
			onPress={onEditData}
			initialIcon="create-outline"
			pressedIcon="create"
            color={color}
		/>
	);
};

export default EditButton;

const styles = StyleSheet.create({});