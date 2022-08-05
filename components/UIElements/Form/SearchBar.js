import React from "react";
import { StyleSheet, TextInput, View, Keyboard, Button, ScrollView } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";

const SearchBar = ({ searchPhrase, setSearchPhrase }) => {
	return (
		<View style={styles.container}>
			<View
				style={styles.searchBar}
			>
				{/* search Icon */}
				<Feather
					name="search"
					size={20}
					color="black"
				/>
				{/* Input field */}
				<TextInput
					style={styles.input}
					placeholder="Search"
					value={searchPhrase}
					onChangeText={setSearchPhrase}
                    // autoFocus
                    // // blurOnSubmit={false}
                    clearButtonMode="while-editing"
                    returnKeyType="done"
				/>
			</View>
		</View>
	);
};
export default SearchBar;

// styles
const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "row",
	},
	searchBar: {
		paddingLeft: 10,
        paddingRight: 5,
        paddingVertical: 10,
		flexDirection: "row",
		backgroundColor: "#d9dbda",
		borderRadius: 25,
		alignItems: "center",
	},
	input: {
        flex: 1,
		fontSize: 18,
		marginLeft: 10,
	},
});
