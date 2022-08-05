import { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	Alert,
	Pressable,
	ActivityIndicator,
} from "react-native";
import SearchBar from "./SearchBar";
import SearchList from "./SearchList";
import ModalOverlay from "../Overlays/ModalOverlay";

const SearchModal = ({ visible, data, setModalVisible, onDismiss }) => {
	const [searchPhrase, setSearchPhrase] = useState("");
	const searchResults = Object.values(data);
    console.log(searchResults);
	return (
		<ModalOverlay
			visible={visible}
			setModalVisible={setModalVisible}
			style={styles.modal}
		>
			<SearchBar
				searchPhrase={searchPhrase}
				setSearchPhrase={setSearchPhrase}
			/>
			<SearchList
				searchPhrase={searchPhrase}
				data={searchResults}
                onDismiss={() => setModalVisible(false)}
			/>
		</ModalOverlay>
	);
};

export default SearchModal;

const styles = StyleSheet.create({
	modal: {
		backgroundColor: "white",
		width: "80%",
		height: "40%",
        marginTop: "-60%",
		alignItems: "center",
        borderRadius: 30,
        padding: 15,
        overflow: "hidden"
        
	},
});
