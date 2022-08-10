import { Pressable, StyleSheet, Text, View } from "react-native";
import Avatar from "../UIElements/Avatar";

const UserDetail = ({ name, style, onPress }) => {
	return (
		<Pressable onPress={onPress} style={({ pressed }) => pressed && styles.pressed}>
			<View style={[style, styles.userFrame]}>
				<Avatar style={styles.avatar} />
				<Text style={styles.text}>{name}</Text>
			</View>
		</Pressable>
	);
};

export default UserDetail;

const styles = StyleSheet.create({
	userFrame: {
		flexDirection: "row",
		alignItems: "center",
        borderRadius: "25%",
		// padding: 5,
	},
	avatar: {
		textAlign: "left",
	},
	text: {
		marginHorizontal: 10,
		fontSize: 14,
		fontWeight: "500",
	},
	pressed: {
		opacity: 0.3,
	},
});
