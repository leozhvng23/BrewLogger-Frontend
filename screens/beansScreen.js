import { useLayoutEffect } from "react";
import { FlatList, StyleSheet } from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";
import { useNavigation, DrawerActions } from "@react-navigation/native";

import { BEANS } from "../data/dummy";
import BeanTile from "../components/BeanTile";
import IconButton from "../components/UIElements/IconButton";

const BeansScreen = () => {
	const headerHeight = useHeaderHeight();
	const navigation = useNavigation();

	useLayoutEffect(() => {
		navigation.setOptions({
			headerLeft: () => {
				return (
					<IconButton
						icon="filter"
						color="black"
						onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
					/>
				);
			},
		});
	}, [navigation]);

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
			contentContainerStyle={{
				paddingTop: headerHeight,
				paddingBottom: 50,
				paddingHorizontal: "3%",
			}}
		/>
	);
};

export default BeansScreen;

const styles = StyleSheet.create({});
