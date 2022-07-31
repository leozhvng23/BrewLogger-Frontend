import { StyleSheet } from "react-native";

import ModalButton from "./ModalButton";


const ShareButton = ({ onShareData, color}) => {
    return (
		<ModalButton
			onPress={onShareData}
			initialIcon="share-outline"
			pressedIcon="share"
            color={color}
		/>
	);
};

export default ShareButton;

const styles = StyleSheet.create({});