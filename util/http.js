import axios from "axios";


const BACKEND_URL = "https://brew-logger-backend.herokuapp.com";
const USERS_API = "/api/users";
const RECIPES_API = "/api/recipes";
const EQUIPMENTS_API = "/api/equipments";
const BEANS_API = "/api/beans";
const COMMENTS_API = "/api/comments";

const uid = 6;

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
			num_of_comments: response.data[key].num_of_comments,
			num_of_likes: response.data[key].num_of_likes,
			is_saved: response.data[key].is_saved,
		};
		recipes[response.data[key].id] = recipeObj;
		ids.push(response.data[key].id);
	}
	return [recipes, ids];
}

export async function getRecipeById(id) {
	console.log(BACKEND_URL + RECIPES_API + "/" + id);
	const response = await axios.get(BACKEND_URL + RECIPES_API + "/" + id);
	const recipe = response.data;
	console.log(recipe);
	return recipe;
}

export async function getPopularRecipes() {
	const recipes = {};
	const ids = [];
	console.log(BACKEND_URL + RECIPES_API + "/popular/");
	const response = await axios.get(BACKEND_URL + RECIPES_API + "/popular/");
	for (const key in response.data) {
		const recipeObj = {
			id: response.data[key].id,
			name: response.data[key].name,
			description: response.data[key].description,
			photo_url: response.data[key].photo_url,
			type: response.data[key].type,
			bean_name: response.data[key].bean_name,
			brew_time: response.data[key].brew_time,
			bid: response.data[key].bid,
			user_name: response.data[key].user_name,
			uid: response.data[key].uid,
			created_on: response.data[key].created_on,
			brewer: response.data[key].brewer,
			brewer_eid: response.data[key].brewer_eid,
			num_of_comments: response.data[key].num_of_comments,
			num_of_likes: response.data[key].num_of_likes,
		};
		recipes[response.data[key].id] = recipeObj;
		ids.push(response.data[key].id);
	}
	return [recipes, ids];
}

export async function getFeedRecipes(uid) {
	const recipes = {};
	const ids = [];
	console.log(BACKEND_URL + RECIPES_API + "/feed/" + uid);
	const response = await axios.get(BACKEND_URL + RECIPES_API + "/feed/" + uid);

	for (const key in response.data) {
		const recipeObj = {
			id: response.data[key].id,
			name: response.data[key].name,
			description: response.data[key].description,
			photo_url: response.data[key].photo_url,
			type: response.data[key].type,
			bean_name: response.data[key].bean_name,
			bid: response.data[key].bid,
			user_name: response.data[key].user_name,
			uid: response.data[key].uid,
			created_on: response.data[key].created_on,
			brewer: response.data[key].brewer,
			brewer_eid: response.data[key].brewer_eid,
			num_of_comments: response.data[key].num_of_comments,
			num_of_likes: response.data[key].num_of_likes,
			is_saved: response.data[key].is_saved,
		};
		recipes[response.data[key].id] = recipeObj;
		ids.push(response.data[key].id);
	}
	return [recipes, ids];
}

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
	// console.log(beans);
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
	// console.log(brewers);
	return brewers;
}

export async function getAllGrindersNames() {
	const grinders = {};
	console.log(BACKEND_URL + +EQUIPMENTS_API + "/grinders");
	const response = await axios.get(BACKEND_URL + EQUIPMENTS_API + "/grinders");

	for (const key in response.data) {
		const grinderObj = {
			id: response.data[key].eid,
			name: response.data[key].name,
			detail: response.data[key].brand,
		};
		grinders[response.data[key].eid] = grinderObj;
	}
	// console.log(grinders);
	return grinders;
}

export async function getCommentsByRecipeId(id) {
	const comments = [];
	console.log(BACKEND_URL + COMMENTS_API + "/recipe/" + id);
	const response = await axios.get(BACKEND_URL + COMMENTS_API + "/recipe/" + id);

	for (const key in response.data) {
		const commentObj = {
			cid: response.data[key].cid,
			user_name: response.data[key].user_name,
			uid: response.data[key].uid,
			posted_on: response.data[key].posted_on,
			content: response.data[key].content,
			num_of_likes: response.data[key].num_of_likes || 0,
			is_liked: response.data[key].is_liked && true,
		};
		comments.push(commentObj);
	}
	return comments;
}

export async function addFavoriteRecipe(id) {
	console.log(BACKEND_URL + RECIPES_API + "/favorites/" + id);
	const response = await axios.post(BACKEND_URL + RECIPES_API + "/favorites/" + id);
	console.log(response.data);
	return response.data;
}

export async function deleteFavoriteRecipe(id) {
	console.log(BACKEND_URL + RECIPES_API + "/favorites/" + id);
	const response = await axios.delete(BACKEND_URL + RECIPES_API + "/favorites/" + id);
	console.log(response.data);
	return response.data;
}

export async function getFavoriteIds() {
	console.log(BACKEND_URL + RECIPES_API + "/favorite/ids");
	const response = await axios.get(BACKEND_URL + RECIPES_API + "/favorite/ids");
	const ids = [];
	for (const key in response.data) {
		ids.push(response.data[key].id);
	}
	return ids;
}

export async function getLikedIds() {
	console.log(BACKEND_URL + RECIPES_API + "/like/ids");
	const response = await axios.get(BACKEND_URL + RECIPES_API + "/like/ids");
	const ids = [];
	for (const key in response.data) {
		ids.push(response.data[key].id);
	}
	return ids;
}

export async function likeRecipe(id) {
	console.log(BACKEND_URL + RECIPES_API + "/like/" + id);
	const response = await axios.post(BACKEND_URL + RECIPES_API + "/likes/" + id);
	console.log(response.data);
	return response.data;
}

export async function unlikeRecipe(id) {
	console.log(BACKEND_URL + RECIPES_API + "/like/" + id);
	const response = await axios.delete(BACKEND_URL + RECIPES_API + "/likes/" + id);
	console.log(response.data);
	return response.data;
}

export async function postComment(id, data, uid, username) {
	console.log(BACKEND_URL + COMMENTS_API);
	const article = { id: id, content: data };
	const response = await axios.post(`${BACKEND_URL}${COMMENTS_API}`, article);
	const commentObj = {
		cid: response.data.cid,
		user_name: username,
		uid: uid,
		posted_on: response.data.time,
		content: response.data.content,
		num_of_likes: 0,
		is_liked: false,
	};
	console.log(commentObj);
	return commentObj;
}
