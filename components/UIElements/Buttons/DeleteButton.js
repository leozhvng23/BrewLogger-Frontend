import { StyleSheet } from "react-native";

import ModalButton from "./ModalButton";


const DeleteButton = ({ onDeleteData, color }) => {
    return (
		<ModalButton
			onPress={onDeleteData}
			initialIcon="trash-outline"
			pressedIcon="trash"
            color={color}
		/>
	);
};

export default DeleteButton;

const styles = StyleSheet.create({});