import { FlatList } from "react-native";
import BeanTile from "../components/BeanTile";

import { BEANS } from "../data/dummy";

const renderBeanItem = (bean) => {
	return <BeanTile name={bean.item.name} imageUrl={bean.item.imageUrl}/>;
}

const BeansScreen = () => {
	return (
		<FlatList
			data={BEANS}
			keyExtractor={(item) => item.id}
			renderItem={renderBeanItem}
			numColumns={2}
		/>
	);
}

export default BeansScreen;
