import axios from "axios";

const BACKEND_URL = "http://192.168.1.142:5500";
const USERS_API = "/api/users";
const RECIPES_API = "/api/recipes";


export async function getRecipesByUserId(uid) {
	const recipes = {};
	console.log(BACKEND_URL + RECIPES_API + "/user/" + uid);
	const response = await axios.get(BACKEND_URL + RECIPES_API + "/user/" + uid);

	for (const key in response.data) {
		const recipeObj = {
			id: response.data[key].id,
			name: response.data[key].name,
			photo_url: response.data[key].photo_url,
			type: response.data[key].type,
			brew_time: response.data[key].brew_time,
			brewer: response.data[key].brewer,
		};
		recipes[response.data[key].id] = (recipeObj);
	}
    console.log(recipes);
	return recipes;
}

export async function getRecipeById(id) {
    console.log(BACKEND_URL + RECIPES_API + "/" + id); 
    const response = await axios.get(BACKEND_URL + RECIPES_API + "/" + id); 
    console.log(response.data)
    const recipe = response.data;
    return recipe;
}
