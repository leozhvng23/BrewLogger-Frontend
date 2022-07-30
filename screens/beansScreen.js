import { FlatList, StyleSheet } from "react-native";
import BeanTile from "../components/BeanTile";
import { useHeaderHeight } from "@react-navigation/elements";

import { BEANS } from "../data/dummy";

import { useNavigation } from "@react-navigation/native";

const BeansScreen = () => {
	const headerHeight = useHeaderHeight();
	const navigation = useNavigation()

	const renderBeanItem = (bean) => {
		const pressHandler = () => {
			navigation.navigate("RecipesOverview", {
				beanId: bean.item.id,
			});
		};
		return (
			<BeanTile
				name={bean.item.name}
				imageUrl={bean.item.imageUrl}
				onPress={pressHandler}
			/>
		);
	};
	return (

			<FlatList
				data={BEANS}
				keyExtractor={(item) => item.id}
				renderItem={renderBeanItem}
				numColumns={2}
				scrollsToTop
				contentContainerStyle={{ paddingTop: headerHeight, paddingBottom: 50, paddingHorizontal: "3%" }}
			/>
	);
};

export default BeansScreen;

const styles = StyleSheet.create({});
