import {
	Pressable,
	View,
	Text,
	StyleSheet,
	Platform,
	ImageBackground,
} from "react-native";

const BeanTile = ({ name, imageUrl, onPress }) => {
	return (
		<View style={styles.gridItem}>
			<Pressable
				android_ripple={{ color: "#ccc" }}
				style={({ pressed }) => [
					styles.button,
					pressed ? styles.buttonPressed : null,
				]}
				onPress={onPress}
			>
				<ImageBackground
					source={{ uri: imageUrl }}
					resizeMode="cover"
					style={styles.image}
				>
					<View style={styles.titleContainer}>
						<Text style={styles.title} numberOfLines={2}>
							{name}
						</Text>
					</View>
				</ImageBackground>
			</Pressable>
		</View>
	);
};

export default BeanTile;

const styles = StyleSheet.create({
	gridItem: {
		flex: 1,
		margin: "2.5%",
		height: 150,
		borderRadius: 8,
		elevation: 4,
		backgroundColor: "white",
		shadowColor: "black",
		shadowOpacity: 0.2,
		shadowOffset: { width: 0, height: 0.5 },
		shadowRadius: 4,
		overflow: Platform.OS === "android" ? "hidden" : "visible",
		justifyContent: "center",
	},
	button: {
		flex: 1,
	},
	buttonPressed: {
		opacity: 0.5,
	},
	image: {
		flex: 1,
		justifyContent: "center",
		overflow: "hidden",
		borderRadius: 8,
	},
	titleContainer:{
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "rgba(255,255,255, 0.8)",
		paddingHorizontal: "5%",
		borderRadius: "8%",
		marginTop: "60%",
		shadowColor: "black",
		shadowOpacity: 0.2,
		shadowOffset: { width: 0, height: 0.5 },
		shadowRadius:6,
	},
	title: {
		fontWeight: "600",
		fontSize: 14,
		lineHeight: 18,
		textAlign: "center",
	},
});
