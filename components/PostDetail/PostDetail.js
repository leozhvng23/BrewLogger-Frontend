import React from "react";
import { StyleSheet, Text, View } from "react-native";

import AttributeItem from "../RecipeDetail/AttributeItem";

const PostDetail = ({ name, description, brewer, type, bean, bid, brewer_eid }) => {
	return (
		<View style={styles.container}>
			<View style={styles.divider}></View>
			<Text numberOfLines={1} adjustsFontSizeToFit style={styles.recipeTitle}>
				{name}
			</Text>
			<Text style={styles.recipeDescription}>{description}</Text>
			<View style={styles.attributesContainer}>
				{[type, bean, brewer].map((value) => (
					<AttributeItem
                        key={value}
						data={value}
						style={styles.attributeItem}
						textStyle={styles.attributeText}
					/>
				))}
			</View>
		</View>
	);
};

export default PostDetail;

const styles = StyleSheet.create({
	container: { paddingHorizontal: 10 },
	divider: {
		// marginHorizontal: 5,
		borderBottomColor: "rgba(0,0,0,0.2)",
		borderBottomWidth: 0.5,
	},
	recipeTitle: {
		width: "80%",
		fontSize: 18,
		fontWeight: "600",
		marginTop: 15,
		marginLeft: "3%",
	},
	recipeDescription: {
		marginTop: 5,
		marginLeft: "3%",
	},
	attributesContainer: {
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "flex-start",
        marginTop: 10
	},
	attributeItem: {
		marginHorizontal: 5,
		marginVertical: 4,
        paddingHorizontal: 10,
        paddingVertical: 3,
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "rgba(0,0,0,0.3)"
	},
	attributeText: {
        fontSize: 11,
        color: "rgba(0,0,0,0.6)"
    },
});
