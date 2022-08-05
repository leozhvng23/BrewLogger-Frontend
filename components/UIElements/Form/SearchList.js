import React from "react";
import { StyleSheet, Text, View, FlatList, SafeAreaView, Pressable } from "react-native";

// definition of the Item, which will be rendered in the FlatList
const Item = ({ name, detail }) => (
	<View style={styles.item}>
		<Text style={styles.title}>{name}</Text>
		<Text style={styles.details}>{detail}</Text>
	</View>
);

// the filter
const SearchList = ({ searchPhrase, data }) => {
	const renderItem = ({ item }) => {
		// when no input, show all
		if (searchPhrase === "") {
			return (
				<Item
					name={item.name}
					detail={item.detail}
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
					name={item.name}
					detail={item.detail}
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
					name={item.name}
					detail={item.detail}
				/>
			);
		}
	};

	return (
		<View style={styles.list__container}>
			<View>
				<FlatList
					data={data}
					renderItem={renderItem}
					keyExtractor={(item) => item.id}
                    contentContainerStyle={{ paddingBottom: 50, paddingHorizontal: 15}}
                    
				/>
			</View>
		</View>
	);
};

export default SearchList;

const styles = StyleSheet.create({
	list__container: {
		marginTop: 10,
		width: "105%",
		height: "82%",
	},
	list: {
		height: "100%",
	},
	item: {
		marginHorizontal: 5,
		borderBottomWidth: 2,
		borderBottomColor: "lightgrey",
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
		marginBottom: 5,
		fontStyle: "italic",
	},
});
