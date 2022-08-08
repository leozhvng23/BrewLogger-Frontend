import "react-native-gesture-handler";

import StackNavigator from "./StackNavigator";
import ProfileScreen from "../../screens/HomeScreen";


const profileStack = [
	{
		name: "Profile",
		component: ProfileScreen,
		title: "My Profile",
	}
];

export function ProfileNavigator() {
	return <StackNavigator navigationList={profileStack} id="profileStack" />
}