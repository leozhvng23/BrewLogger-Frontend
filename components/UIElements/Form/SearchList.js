import React from "react";
import { StyleSheet, Text, View, FlatList, SafeAreaView, Pressable } from "react-native";

// definition of the Item, which will be rendered in the FlatList
const Item = ({ id, name, detail, onPress }) => (
	<View style={styles.item}>
		<Pressable
			onPress={() => onPress(id, name)}
			style={({ pressed }) => pressed && styles.pressed}
		>
			<Text style={styles.title}>{name}</Text>
			<Text style={styles.detail}>by {detail}</Text>
		</Pressable>
	</View>
);

// the filter
const SearchList = ({ searchPhrase, data, onSubmitValue }) => {
	const renderItem = ({ item }) => {
		// when no input, show all
		if (searchPhrase === "") {
			return (
				<Item
					id={item.id}
					name={item.name}
					detail={item.detail}
					onPress={onSubmitValue}
				/>
			);
		}
		// filter of the name
		if (
			item.name
				.toUpperCase()
				.includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))
		) {
			return (
				<Item
					id={item.id}
					name={item.name}
					detail={item.detail}
					onPress={onSubmitValue}
				/>
			);
		}
		// filter of detail
		if (
			item.detail
				.toUpperCase()
				.includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))
		) {
			return (
				<Item
					id={item.id}
					name={item.name}
					detail={item.detail}
					onPress={onSubmitValue}
				/>
			);
		}
	};

	return (
		<View style={styles.list__container}>
			<FlatList
				data={data}
				renderItem={renderItem}
				keyExtractor={(item) => item.id}
				contentContainerStyle={{ paddingHorizontal: 15 }}
			/>
		</View>
	);
};

export default SearchList;

const styles = StyleSheet.create({
	list__container: {
		marginTop: 10,
		width: "105%",
        paddingBottom: 50,
        height: "100%" 
	},
	list: {
		height: "100%",
	},
	item: {
		marginHorizontal: 10,
		marginVertical: 5,
		borderBottomWidth: 1,
		borderBottomColor: "lightgrey",
	},
	title: {
		fontSize: 16,
		fontWeight: "bold",
		marginBottom: 3,
		textAlign: "center",
	},
	detail: {
		fontSize: 14,
		fontWeight: "400",
		textAlign: "center",
		fontStyle: "italic",
		marginBottom: 8,
		color: "rgba(0,0,0,0.6)",
	},
	pressed: {
		opacity: 0.3,
	},
});
