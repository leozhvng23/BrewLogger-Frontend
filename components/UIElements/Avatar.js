import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const Avatar = ({imgUrl, style}) => {
	return (
		<View style={[styles.container, style]}>
			<Image
				style={styles.image}
				source={{
					uri: "https://icon-library.com/images/default-profile-icon/default-profile-icon-16.jpg",
				}}
                resizeMode='stretch'
			/>
		</View>
	);
};

export default Avatar;

const styles = StyleSheet.create({
	image: { borderRadius: 40, width: 40, height: 40, overflow:"hidden"},
});
