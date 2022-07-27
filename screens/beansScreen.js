import { FlatList } from "react-native";
import BeanTile from "../components/BeanTile";

import { BEANS } from "../data/dummy";

const BeansScreen = ({ navigation }) => {
	const renderBeanItem = (bean) => {
		const pressHandler = () => {
			navigation.navigate("RecipesOverview");
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
		/>
	);
};

export default BeansScreen;
