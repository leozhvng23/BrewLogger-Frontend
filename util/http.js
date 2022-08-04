import axios from "axios";

const BACKEND_URL = "http://192.168.1.142:5500";
const USERS_API = "/api/users";
const RECIPES_API = "/api/recipes";


export async function getRecipesByUserId(uid) {
	const recipes = {};
    const ids = []
	console.log(BACKEND_URL + RECIPES_API + "/user/" + uid);
	const response = await axios.get(BACKEND_URL + RECIPES_API + "/user/" + uid);

	for (const key in response.data) {
		const recipeObj = {
			id: response.data[key].id,
			name: response.data[key].name,
            description: response.data[key].description,
			photo_url: response.data[key].photo_url,
			type: response.data[key].type,
			yield: response.data[key].yield,
			brew_time: response.data[key].brew_time,
            guide: response.data[key].guide,
            bean_name: response.data[key].bean_name,
            bid: response.data[key].bid,
            user_name: response.data[key].user_name,
            uid: response.data[key].uid,
            created_on: response.data[key].created_on,
			brewer: response.data[key].brewer,
            brewer_eid: response.data[key].brewer_eid,
            grinder: response.data[key].grinder,
            grinder_eid: response.data[key].grinder_eid,
            brewer_setting: response.data[key].brewer_setting,
            grinder_setting: response.data[key].grinder_setting
		};
		recipes[response.data[key].id] = (recipeObj);
        ids.push(response.data[key].id);
	}
    console.log(recipes);
	return [recipes, ids];
}

export async function getRecipeById(id) {
    console.log(BACKEND_URL + RECIPES_API + "/" + id); 
    const response = await axios.get(BACKEND_URL + RECIPES_API + "/" + id); 
    console.log(response.data)
    const recipe = response.data;
    return recipe;
}
