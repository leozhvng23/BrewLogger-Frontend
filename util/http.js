import axios from "axios";

const BACKEND_URL = "http://192.168.1.142:5500";
const USERS_API = "/api/users";
const RECIPES_API = "/api/recipes";
const EQUIPMENTS_API = "/api/equipments";
const BEANS_API = "/api/beans";

export async function getRecipesByUserId(uid) {
	const recipes = {};
	const ids = [];
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
			grinder_setting: response.data[key].grinder_setting,
		};
		recipes[response.data[key].id] = recipeObj;
		ids.push(response.data[key].id);
	}
	console.log(recipes);
	return [recipes, ids];
}

// export async function getRecipeById(id) {
//     console.log(BACKEND_URL + RECIPES_API + "/" + id);
//     const response = await axios.get(BACKEND_URL + RECIPES_API + "/" + id);
//     console.log(response.data)
//     const recipe = response.data;
//     return recipe;
// }

export async function getAllBeansNames() {
	const beans = {};
	console.log(BACKEND_URL + BEANS_API);
	const response = await axios.get(BACKEND_URL + BEANS_API);

	for (const key in response.data) {
		const beanObj = {
			id: response.data[key].bid,
			name: response.data[key].name,
            detail: response.data[key].roaster_name,
			roaster_name: response.data[key].roaster_name,
			rid: response.data[key].rid,
		};
		beans[response.data[key].bid] = beanObj;
	}
	console.log(beans);
    return beans;
}

export async function getAllBrewersNames() {
    const brewers = {};
    console.log(BACKEND_URL + EQUIPMENTS_API + "/brewers");
	const response = await axios.get(BACKEND_URL + EQUIPMENTS_API + "/brewers");
    
    for (const key in response.data) {
		const brewerObj = {
			id: response.data[key].eid,
			name: response.data[key].name,
		    detail: response.data[key].brand,
		};
		brewers[response.data[key].eid] = brewerObj;
	}
	console.log(brewers);
    return brewers;
}

export async function getAllGrindersNames() {
    const grinders = {}
    console.log(BACKEND_URL + + EQUIPMENTS_API + "/grinders");
	const response = await axios.get(BACKEND_URL + EQUIPMENTS_API + "/grinders");
  
    for (const key in response.data) {
		const grinderObj = {
			id: response.data[key].eid,
			name: response.data[key].name,
		    detail: response.data[key].brand,
		};
		grinders[response.data[key].eid] = grinderObj;
	}
	console.log(grinders);
    return grinders;
}
