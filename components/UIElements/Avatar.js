import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const Avatar = ({ imgUrl, style, size }) => {
	return (
		<View style={[styles.container, style]}>
			<Image
				style={[styles.image, { width: size || 40, height: size || 40 }]}
				source={{
					uri: "https://icon-library.com/images/default-user-icon/default-user-icon-13.jpg",
				}}
				resizeMode="center"
			/>
		</View>
	);
};

export default Avatar;

const styles = StyleSheet.create({
	image: {
		borderRadius: 40,
		overflow: "hidden",
	},
});
