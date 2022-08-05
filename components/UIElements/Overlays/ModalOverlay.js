import React from "react";
import {
	StyleSheet,
	Text,
	View,
	Modal,
	Alert,
	Pressable,
	TouchableOpacity,
	TouchableWithoutFeedback,
} from "react-native";

const ModalOverlay = ({ visible, setModalVisible, children, style }) => {
	return (
		<Modal
			visible={visible}
			animationType="fade"
			transparent={true}
			// onRequestClose={() => {
			// 	// Alert.alert("Modal has been closed.");
			// 	setModalVisible(false);
			// }}
		>
			<Pressable onPress={() => setModalVisible(false)} style={styles.container}>
				<TouchableWithoutFeedback>
					<View style={[styles.modalView, style]}>
                        {children}
					</View>
				</TouchableWithoutFeedback>
			</Pressable>
		</Modal>
	);
};

export default ModalOverlay;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "rgba(0,0,0,0.5)",
	},
	modalView: {
		borderRadius: 20,
		padding: 10,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 6,
		elevation: 5,
	},
});
