import { View, Text, StyleSheet, Alert } from "react-native";

const ErrorOverlay = ({ message, onConfirm }) => {
	Alert.alert("An Error Occured", message, [
		{
			text: "ok",
            onPress: onConfirm
		},
	]);

	return (
		<View style={styles.container}>
			<Text style={styles.text}>An Error Occured :(</Text>
		</View>
	);
};

export default ErrorOverlay;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		padding: 24,
		backgroundColor: "white",
	},
    text:{
        textAlign: 'center',
        marginBottom: 8,
        color: "rgba(0,0,0,0.6)"
    }
});
