import Bean from "../models/bean";
import Recipe from "../models/recipe";

export const BEANS = [
	new Bean(
		"b1",
		"Guatemala El Socorro Gesha Coe",
		"https://cdn.shopify.com/s/files/1/1707/3261/products/ColombiaTioConejoGesha_c5562c47-3e0f-40a2-94fe-066a6cfe6785_1200x.png?v=1629213154",
		"Oynx",
		"Guatemala",
		"Washed",
		2,
		["Jasmine", "Raw sugar", "Milk tea", "Pineapple"]
	),
	new Bean(
		"b2",
		"Colombia Double Fermented Gesha",
		"https://cdn.shopify.com/s/files/1/1995/6387/products/pair_cupworks_62_doublefermentedgesha_2890x.jpg?v=1645465497",
		"Pair Cupworks",
		"Colombia",
		"Washed",
		3,
		["Strawberry", "Vanilla"]
	),
	new Bean(
		"b3",
		"Colombia Rubiela Velazquez",
		"https://cdn.shopify.com/s/files/1/0002/6352/0281/products/Rubiela_2560x.png?v=1645664310",
		"Sey",
		"Colombia",
		"Washed",
		2,
		["Dark Fruit", "Berries", "Red Wine"]
	),
	new Bean(
		"b4",
		"Wild Forest",
		"https://cdn.shopify.com/s/files/1/0734/9587/products/WILDFORESTUSProductShotBags_800x.png?v=1612898836",
		"Devoción",
		"Fermented",
		"Colombia",
		2,
		["Wild Berries", "Cherry", "Caramel"]
	),
	new Bean(
		"b5",
		"Honduras Fredy Sabillon",
		"https://cdn.shopify.com/s/files/1/2988/2574/products/fredyhoney_cardonline_1_22_3x-100_1800x1800.jpg?v=1641409331",
		"Black & White",
		"Honduras",
		"Aerobic Honey",
		4,
		["Tangerine", "White Wine"]
	),
	new Bean(
		"b6",
		"Colombia Ivan Molano",
		"https://cdn.shopify.com/s/files/1/0002/6352/0281/products/pulgas_2560x.png?v=1582103690",
		"Sey",
		"Colombia",
		"Red Fruit Fermentation",
		3,
		["Chocolate", "Red Fruit"]
	),
	new Bean(
		"b7",
		"Costa Rica Las Lajas SL28 Narual",
		"https://cdn.shopify.com/s/files/1/0036/4756/9984/products/ScreenShot2022-03-23at12.20.15PM_1200x.png?v=1648052476",
		"Oynx",
		"Costa Rica",
		"Washed",
		5,
		["Raspberry", "Grapefruit", "Cola"]
	),
	new Bean(
		"b8",
		"Carbonic Maceration Processed",
		"https://cdn.shopify.com/s/files/1/1995/6387/products/pair_cupworks_XX_carbonic_ethiopia4_2890x.jpg?v=1641190685",
		"Pair Cupworks",
		"Ethiopia",
		"Washed",
		8,
		["Black Tea", "Honey"]
	),
	new Bean(
		"b9",
		"Colombia Juan Jimenez",
		"https://cdn.shopify.com/s/files/1/1707/3261/products/ColombiaJuanJimenez_9bd65849-8c7c-4e30-aed2-f2c35caf8664.png?v=1639071756",
		"Oynx",
		"Colombia",
		"Fermented",
		6,
		["Pinot", "Honey", "Blueberry"]
	),
	new Bean(
		"b10",
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
	new Recipe(
		"r1",
		"b8",
		"Ethiopian Delight",
		"https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/640px-A_small_cup_of_coffee.JPG",
		"La Marzocco Linea Mini",
		"Espresso",
		"1:6",
		"A beautiful single origin ethiopian bean recipe to brighten up your morning. ",
		10,
		[
			"Dial in your La Marzocco Linea Mini and Niche Zero grinder",
			"Do a classic 30s pull.",
		]
	),
	new Recipe(
		"r2",
		"b4",
		"Sunday cold brew with Devoción's Wild Forest",
		"https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
		"V60",
		"Pour Over",
		"1:7",
		"This classic V60 cold brew recipe paired with Devoción's iconic Colombian beans will brighten up anyone's summer day, or night :) ",
		5,
		[
			"Bloom with 40 grams of water for 30 seconds",
			"Then pour 205F degree water in a circular motion till 180 grams.",
			"Add in 70 grams of ice",
			"stir, and enjoy!",
		]
	),
	new Recipe(
		"r3",
		"b5",
		"Honduras Breeze",
		"https://www.homestratosphere.com/wp-content/uploads/2018/07/types-of-coffee-glasses-072618.jpg",
		"French Press",
		"Other",
		"1:8",
		"This V60 recipe paired with the Honduras beans from Black & White is a must for any Sunday brunch.",
		10,
		[
			"Bloom with 30 grams of water for 45 seconds",
			"Then pour 210F degree water in a circular motion aggresively till 180 grams to agitate the coffee bed.",
			"Pour slowly till 250 grams",
			"finish at 2 min 45 sec.",
		]
	),
	new Recipe(
		"r4",
		"b7",
		"Tropical Weather Espresso Tonic",
		"https://assets3.thrillist.com/v1/image/3052612/414x310/crop;webp=auto;jpeg_quality=60;progressive.jpg",
		"Flair 58",
		"Espresso",
		"1:2",
		"This is a delightful twist on the classic OJ espresso. The sweetness of the orange juice paired with the acidity from the Oynx light roast beans is a perfect symphony of exciting flavors.",
		15,
		[
			"Dial in your La Marzocco Linea Mini and Niche Zero",
			"Aim for a classic 30s pull and 36 grams yield.",
			"Add 150 grams of orange juice",
			"Top it off with a tablespoon of heavy cream",
		]
	),
	new Recipe(
		"r5",
		"b9",
		"Not Your Average Diner Coffee",
		"https://static.wixstatic.com/media/9b370b_0450d430f91d49b688f563ea12e1c5a6~mv2.jpg/v1/fit/w_940%2Ch_726%2Cal_c%2Cq_80/file.jpg",
		"AeroPress",
		"Other",
		"1:4",
		"This is wonderful twist on your classic sunday morning diner-style black coffee. The sweetness of Oynx's Colombian beans really shines through here.",
		20,
		[
			"Preheat your Clever Dripper with hot water.",
			"Add 500 grams of water, then add your ground coffee.",
			"Aggressively stir with spoon until all ground coffee has settled on the bottom and formed a flat bed.",
			"Place over serving caraf at 3 minutes and 30 seconds.",
			"Coffee extraction should finish around 5 minutes.",
		]
	),
	new Recipe(
		"r6",
		"b7",
		"Sweet Sweet Dream",
		"https://bonteacafe.com/media/bontea/media/2021/05/14/types-of-coffee-3.jpg",
		"La Marzocco Linea Mini",
		"Espresso",
		"1:2",
		"A modern twist on the classic lungo shot. A perfect cure to your existential dread.",
		15,
		[
			"Preheat your Clever Dripper with hot water.",
			"Add 500 grams of water, then add your ground coffee.",
			"Aggressively stir with spoon until all ground coffee has settled on the bottom and formed a flat bed.",
			"Place over serving caraf at 3 minutes and 30 seconds.",
			"Coffee extraction should finish around 5 minutes.",
		]
	),
	new Recipe(
		"r7",
		"b3",
		"Sour Patch Kids",
		"https://s23209.pcdn.co/wp-content/uploads/2015/07/Perfect-Iced-CoffeeIMG_0074.jpg",
		"Flair 58",
		"Espresso",
		"1:2",
		"If you are into high acidity shots, this is your cup of tea, or coffee, I guess :)",
		10,
		[
			"Preheat your Clever Dripper with hot water.",
			"Add 500 grams of water, then add your ground coffee.",
			"Aggressively stir with spoon until all ground coffee has settled on the bottom and formed a flat bed.",
			"Place over serving caraf at 3 minutes and 30 seconds.",
			"Coffee extraction should finish around 5 minutes.",
		]
	),
	new Recipe(
		"r8",
		"b3",
		"March Madness",
		"https://nationaltoday.com/wp-content/uploads/2020/09/coffee-day2-300x300.jpg",
		"V60",
		"Pour Over",
		"1:6",
		"This is an unconventional recipe using the Kalita Wave Dripper. Proceed with caution :)",
		5,
		[
			"Preheat your Clever Dripper with hot water.",
			"Add 500 grams of water, then add your ground coffee.",
			"Aggressively stir with spoon until all ground coffee has settled on the bottom and formed a flat bed.",
			"Place over serving caraf at 3 minutes and 30 seconds.",
			"Coffee extraction should finish around 5 minutes.",
		]
	),
	new Recipe(
		"r9",
		"b5",
		"Who stole my apple?",
		"https://www.eatthis.com/wp-content/uploads/sites/4/2021/02/coffee-1.jpg",
		"AeroPress",
		"Other",
		"1:4",
		"This light roast recipe brings out the tartness to balance the intricate acidity present in most Honduras beans. Serve cold or hot.",
		15,
		[
			"Preheat your Clever Dripper with hot water.",
			"Add 500 grams of water, then add your ground coffee.",
			"Aggressively stir with spoon until all ground coffee has settled on the bottom and formed a flat bed.",
			"Place over serving caraf at 3 minutes and 30 seconds.",
			"Coffee extraction should finish around 5 minutes.",
		]
	),
	new Recipe(
		"r10",
		"b7",
		"Late night slow brew",
		"https://64.media.tumblr.com/cfef1d5f40d257b98d2f5d74bdd41220/c65c9fc1e700efe3-48/s1280x1920/e21de677331560197c4bd6b86e7ac81a7477d505.jpg",
		"V60",
		"Pour Over",
		"1:6",
		"Not your average americano.",
		10,
		[
			"Preheat your Clever Dripper with hot water.",
			"Add 500 grams of water, then add your ground coffee.",
			"Aggressively stir with spoon until all ground coffee has settled on the bottom and formed a flat bed.",
			"Place over serving caraf at 3 minutes and 30 seconds.",
			"Coffee extraction should finish around 5 minutes.",
		]
	),
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