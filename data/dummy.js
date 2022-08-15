import Bean from "../models/bean";

export const BEANS = [
	new Bean(
		1,
		"Guatemala El Socorro Gesha Coe",
		"https://cdn.shopify.com/s/files/1/1707/3261/products/ColombiaTioConejoGesha_c5562c47-3e0f-40a2-94fe-066a6cfe6785_1200x.png?v=1629213154",
		"Oynx",
		"Guatemala",
		"Washed",
		2,
		["Jasmine", "Raw sugar", "Milk tea", "Pineapple"]
	),
	new Bean(
		2,
		"Colombia Double Fermented Gesha",
		"https://cdn.shopify.com/s/files/1/1995/6387/products/pair_cupworks_62_doublefermentedgesha_2890x.jpg?v=1645465497",
		"Pair Cupworks",
		"Colombia",
		"Washed",
		3,
		["Strawberry", "Vanilla"]
	),
	new Bean(
		3,
		"Colombia Rubiela Velazquez",
		"https://cdn.shopify.com/s/files/1/0002/6352/0281/products/Rubiela_2560x.png?v=1645664310",
		"Sey",
		"Colombia",
		"Washed",
		2,
		["Dark Fruit", "Berries", "Red Wine"]
	),
	new Bean(
		4,
		"Wild Forest",
		"https://cdn.shopify.com/s/files/1/0734/9587/products/WILDFORESTUSProductShotBags_800x.png?v=1612898836",
		"Devoción",
		"Fermented",
		"Colombia",
		2,
		["Wild Berries", "Cherry", "Caramel"]
	),
	new Bean(
		5,
		"Honduras Fredy Sabillon",
		"https://cdn.shopify.com/s/files/1/2988/2574/products/fredyhoney_cardonline_1_22_3x-100_1800x1800.jpg?v=1641409331",
		"Black & White",
		"Honduras",
		"Aerobic Honey",
		4,
		["Tangerine", "White Wine"]
	),
	new Bean(
		6,
		"Colombia Ivan Molano",
		"https://cdn.shopify.com/s/files/1/0002/6352/0281/products/pulgas_2560x.png?v=1582103690",
		"Sey",
		"Colombia",
		"Red Fruit Fermentation",
		3,
		["Chocolate", "Red Fruit"]
	),
	new Bean(
		7,
		"Costa Rica Las Lajas SL28 Narual",
		"https://cdn.shopify.com/s/files/1/0036/4756/9984/products/ScreenShot2022-03-23at12.20.15PM_1200x.png?v=1648052476",
		"Oynx",
		"Costa Rica",
		"Washed",
		5,
		["Raspberry", "Grapefruit", "Cola"]
	),
	new Bean(
		8,
		"Carbonic Maceration Processed",
		"https://cdn.shopify.com/s/files/1/1995/6387/products/pair_cupworks_XX_carbonic_ethiopia4_2890x.jpg?v=1641190685",
		"Pair Cupworks",
		"Ethiopia",
		"Washed",
		8,
		["Black Tea", "Honey"]
	),
	new Bean(
		9,
		"Colombia Juan Jimenez",
		"https://cdn.shopify.com/s/files/1/1707/3261/products/ColombiaJuanJimenez_9bd65849-8c7c-4e30-aed2-f2c35caf8664.png?v=1639071756",
		"Oynx",
		"Colombia",
		"Fermented",
		6,
		["Pinot", "Honey", "Blueberry"]
	),
	new Bean(
		10,
		"La Mandarina",
		"https://cdn.shopify.com/s/files/1/0734/9587/products/LamandarinaproductshotINGLES_800x.png?v=1646006112",
		"Devoción",
		"Colombia",
		"Washed",
		7,
		["Stonefruit", "Panela", "Vanilla"]
	),
];

export const RECIPES = [
	{
		id: 1,
		name: "Ethiopian Delight",
		description:
			"A beautiful single origin ethiopian bean recipe to brighten up your morning. ",
		photo_url:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/640px-A_small_cup_of_coffee.JPG",
		type: "Espresso",
		bean_name: "Carbonic Maceration Processed",
		bid: 8,
		user_name: "Molly McNutt",
		uid: 1,
		created_on: "2022-01-20T00:00:00.000Z",
		brewer: "La Marzocco Linea Mini",
		brewer_eid: 1,
		num_of_comments: 2,
		num_of_likes: 2,
		is_saved: null,
	},
	{
		id: 10,
		name: "Grandma's Long Black",
		description: "Not your average americano.",
		photo_url:
			"https://64.media.tumblr.com/cfef1d5f40d257b98d2f5d74bdd41220/c65c9fc1e700efe3-48/s1280x1920/e21de677331560197c4bd6b86e7ac81a7477d505.jpg",
		type: "Espresso",
		bean_name: "Costa Rica Las Lajas SL28 Narual",
		bid: 7,
		user_name: "Richard Park",
		uid: 10,
		created_on: "2022-03-24T00:00:00.000Z",
		brewer: "La Marzocco Linea Mini",
		brewer_eid: 1,
		num_of_comments: 4,
		num_of_likes: 1,
		is_saved: "1",
	},
	{
		id: 4,
		name: "Tropical Weather Espresso Tonic",
		description:
			"This is a delightful twist on the classic OJ espresso. The sweetness of the orange juice paired with the acidity from the Oynx light roast beans is a perfect symphony of exciting flavors.",
		photo_url:
			"https://assets3.thrillist.com/v1/image/3052612/414x310/crop;webp=auto;jpeg_quality=60;progressive.jpg",
		type: "Espresso",
		bean_name: "Costa Rica Las Lajas SL28 Narual",
		bid: 7,
		user_name: "Ingrid Gao",
		uid: 4,
		created_on: "2022-01-24T00:00:00.000Z",
		brewer: "La Marzocco Linea Mini",
		brewer_eid: 1,
		num_of_comments: 2,
		num_of_likes: 4,
		is_saved: "1",
	},
	{
		id: 11,
		name: "Late night slow brew",
		description:
			"This recipe is inspired by late night study sessions when caffeine is key to survival. Brew a strong cup of Honduras beans and you will be ready to conquer the night!",
		photo_url:
			"https://i.insider.com/60d223afdb3f80001848d4c4?width=1136&format=jpeg",
		type: "Other",
		bean_name: "Honduras Fredy Sabillon",
		bid: 5,
		user_name: "Leo Zhang",
		uid: 12,
		created_on: "2022-04-15T00:00:00.000Z",
		brewer: "Clever Dripper",
		brewer_eid: 7,
		num_of_comments: 2,
		num_of_likes: 2,
		is_saved: null,
	},
	{
		id: 5,
		name: "Not Your Average Diner Coffee",
		description:
			"This is wonderful twist on your classic sunday morning diner-style black coffee. The sweetness of Oynx's Colombian beans really shines through here.",
		photo_url:
			"https://static.wixstatic.com/media/9b370b_0450d430f91d49b688f563ea12e1c5a6~mv2.jpg/v1/fit/w_940%2Ch_726%2Cal_c%2Cq_80/file.jpg",
		type: "Pour Over",
		bean_name: "Colombia Juan Jimenez",
		bid: 9,
		user_name: "Sophia Capri",
		uid: 5,
		created_on: "2022-02-01T00:00:00.000Z",
		brewer: "Clever Dripper",
		brewer_eid: 7,
		num_of_comments: 2,
		num_of_likes: 1,
		is_saved: null,
	},
	{
		id: 2,
		name: "Sunday cold brew with Devoción",
		description:
			"This classic V60 cold brew recipe paired with Devoción''s iconic Colombian beans will brighten up anyone''s summer day, or night :) ",
		photo_url:
			"https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
		type: "Pour Over",
		bean_name: "Wild Forest",
		bid: 4,
		user_name: "Leo Zhang",
		uid: 2,
		created_on: "2022-01-22T00:00:00.000Z",
		brewer: "Hario V60 Plastic",
		brewer_eid: 4,
		num_of_comments: 2,
		num_of_likes: 5,
		is_saved: "1",
	},
	{
		id: 9,
		name: "Who stole my apple?",
		description:
			"This light roast recipe brings out the tartness to balance the intricate acidity present in most Honduras beans. Serve cold or hot.",
		photo_url:
			"https://www.eatthis.com/wp-content/uploads/sites/4/2021/02/coffee-1.jpg",
		type: "Pour Over",
		bean_name: "Honduras Fredy Sabillon",
		bid: 5,
		user_name: "Eugene Wu",
		uid: 9,
		created_on: "2022-03-12T00:00:00.000Z",
		brewer: "Hario V60 Plastic",
		brewer_eid: 4,
		num_of_comments: 3,
		num_of_likes: 3,
		is_saved: null,
	},
	{
		id: 3,
		name: "Honduras Breeze",
		description:
			"This V60 recipe paired with the Honduras beans from Black & White is a must for any Sunday brunch.",
		photo_url:
			"https://www.homestratosphere.com/wp-content/uploads/2018/07/types-of-coffee-glasses-072618.jpg",
		type: "Pour Over",
		bean_name: "Honduras Fredy Sabillon",
		bid: 5,
		user_name: "Leo Zhang",
		uid: 2,
		created_on: "2022-01-23T00:00:00.000Z",
		brewer: "Hario V60 Plastic",
		brewer_eid: 4,
		num_of_comments: 2,
		num_of_likes: 4,
		is_saved: null,
	},
	{
		id: 8,
		name: "March Madness",
		description:
			"This is an unconventional recipe using the Kalita Wave Dripper. Proceed with caution :)",
		photo_url:
			"https://nationaltoday.com/wp-content/uploads/2020/09/coffee-day2-300x300.jpg",
		type: "Pour Over",
		bean_name: "Colombia Rubiela Velazquez",
		bid: 3,
		user_name: "Bot",
		uid: 6,
		created_on: "2022-03-01T00:00:00.000Z",
		brewer: "Kalita Wave",
		brewer_eid: 6,
		num_of_comments: 3,
		num_of_likes: 2,
		is_saved: null,
	},
	{
		id: 6,
		name: "Sweet Sweet Dream",
		description:
			"A modern twist on the classic lungo shot. A perfect cure to your existential dread.",
		photo_url:
			"https://bonteacafe.com/media/bontea/media/2021/05/14/types-of-coffee-3.jpg",
		type: "Pour Over",
		bean_name: "Costa Rica Las Lajas SL28 Narual",
		bid: 7,
		user_name: "Bot",
		uid: 6,
		created_on: "2022-02-02T00:00:00.000Z",
		brewer: "Flair 58",
		brewer_eid: 9,
		num_of_comments: 3,
		num_of_likes: 2,
		is_saved: "1",
	},
	{
		id: 7,
		name: "Sour Patch Kids",
		description:
			"If you are into high acidity shots, this is your cup of tea, or coffee, I guess :)",
		photo_url:
			"https://s23209.pcdn.co/wp-content/uploads/2015/07/Perfect-Iced-CoffeeIMG_0074.jpg",
		type: "Espresso",
		bean_name: "Colombia Rubiela Velazquez",
		bid: 3,
		user_name: "Bot",
		uid: 6,
		created_on: "2022-02-05T00:00:00.000Z",
		brewer: "Flair 58",
		brewer_eid: 9,
		num_of_comments: 2,
		num_of_likes: 1,
		is_saved: null,
	},
];

// "Dial in your La Marzocco Linea Mini and Niche Zero grinder for a classic 30s pull."
// "Bloom with 40 grams of water for 30 seconds, then pour 205F degree water in a circular motion till 180 grams. Add in 70 grams of ice, stir, and enjoy!"
// "Bloom with 30 grams of water for 45 seconds, then pour 210F degree water in a circular motion aggresively till 180 grams to agitate the coffee bed. Pour slowly till 250 grams and finish at 2 min 45 sec."
// "Dial in your La Marzocco Linea Mini and Niche Zero for a classic 30s pull and 36 grams yield. Add 150 grams of orange juice and top it off with a tablespoon of heavy cream"
// "Preheat your Clever Dripper with hot water. Add 500 grams of water, then add your ground coffee. Aggressively stir with spoon until all ground coffee has settled on the bottom and formed a flat bed. Place over serving caraf at 3 minutes and 30 seconds. Coffee extraction should finish around 5 minutes."
// "Pre-infuse at 3 bars of pressure for 10 seconds, then ramp up pressure to 9 bars. At 20 grams, slowly back off pressure and aim to finish at 6 bars of pressure around the 50 second mark. Serve immediately while hot."
// "On your Flair 58, pre-infuse the coffee puck at 3 bars of pressure for around 6 seconds, then pull the shot at 9 bars and aim to finish at 36 grams under 20 seconds."
// "Bloom with 20 grams of water for 45 seconds, then pour 210F degree water in a circular motion aggresively till 180 grams to agitate the coffee bed. Pour slowly till 250 grams at 2 min 45 sec, and then pour aggresively again till 350 grams at 3 min 15 sec. Serve and enjoy!"
// "Bloom with 30 grams of water for 45 seconds, then pour 210F degree water in a circular motion aggresively till 180 grams to agitate the coffee bed. Pour slowly till 200grams and finish at the 4 minute mark."
// "Dial in your La Marzocco Linea Mini and Niche Zero grinder for a classic 30s pull and finish at 50 grams. Add 100 grams of hot water."
// "Preheat your Clever Dripper with hot water. Add 500 grams of water, then add your ground coffee. Aggressively stir with spoon until all ground coffee has settled on the bottom and formed a flat bed. Place over serving carafe at 3 minutes and 30 seconds. Coffee extraction should finish around 5 minutes."
// "hello"
