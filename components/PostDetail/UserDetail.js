import { Pressable, StyleSheet, Text, View } from "react-native";
import Avatar from "../UIElements/Avatar";

const UserDetail = ({name, style, onPress}) => {
	return (
		<Pressable onPress={onPress} style={[({ pressed }) => pressed && styles.pressed]}>
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
        alignItems: "center"
	},
	avatar: {
		margin: 5,
		textAlign: "left",
	},
	text: {
		marginLeft: 10,
        fontSize: 14,
        fontWeight: "500"
	},
	pressed: {
		opacity: 0.7,
	},
});
