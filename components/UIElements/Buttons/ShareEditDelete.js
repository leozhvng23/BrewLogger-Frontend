import { StyleSheet, Text, View } from "react-native";
import ShareButton from "./ShareButton";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";

const ShareEditDelete = ({ onShareData, onDeleteData, onEditData }) => {
	const buttonColor = "rgba(0,0,0,0.6)";
	return (
		<View style={styles.container}>
			<View style={styles.button}>
				<ShareButton onShareData={onShareData} color={buttonColor} />
			</View>
			<View style={styles.button}>
				<EditButton onEditData={onEditData} color={buttonColor} />
			</View>
			<View style={styles.button}>
				<DeleteButton onDeleteData={onDeleteData} color={buttonColor} />
			</View>
		</View>
	);
};

export default ShareEditDelete;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "center",
		alignContent: "center",
	},
	button: {
		width: 50,
		height: 50,
		justifyContent: "center",
		alignItems: "center",
		padding: 2,
	},
});
