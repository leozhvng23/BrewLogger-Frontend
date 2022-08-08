import "react-native-gesture-handler";

import StackNavigator from "./StackNavigator";
import HomeScreen from "../../screens/HomeScreen";


const homeStack = [
	{
		name: "Home",
		component: HomeScreen,
		title: "BrewLogger",
	}
];

export function HomeNavigator() {
	return <StackNavigator navigationList={homeStack} id="homeStack" />
}


