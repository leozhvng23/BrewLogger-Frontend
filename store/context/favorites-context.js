import { createContext, useState } from "react";

export const FavoritesContext = createContext({
	ids: [],
	addFavorite: (id) => {},
	removeFavorite: (id) => {},
});

function FavoritesContextProvider({ children }) {
	const [favoriteRecipeIds, setfavoriteRecipeIds] = useState([]);

	function addFavorite(id) {
		setfavoriteRecipeIds((currentFavIds) => [...currentFavIds, id]);
	}

	function removeFavorite(id) {
		setfavoriteRecipeIds((currentFavIds) =>
			currentFavIds.filter((recipeId) => recipeId !== id)
		);
	}

	const value = {
		ids: favoriteRecipeIds,
		addFavorite: addFavorite,
		removeFavorite: removeFavorite,
	};
	return (
		<FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
	);
}

export default FavoritesContextProvider;
