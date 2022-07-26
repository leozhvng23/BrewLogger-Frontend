import { FlatList } from "react-native";
import BeanGridTile from "../components/BeanGridTile";

import { BEANS } from "../data/dummy";

function renderBeanItem(bean) {
	return <BeanGridTile />;
}

function BeansScreen() {
	return (
		<FlatList
			data={BEANS}
			keyExtractor={(bean) => bean.id}
			renderItem={renderBeanItem}
			numColumns={2}
		/>
	);
}

export default BeansScreen;
