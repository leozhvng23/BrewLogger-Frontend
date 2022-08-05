import { createSlice } from "@reduxjs/toolkit";

const equipmentSlice = createSlice({
	name: "equipments",
	initialState: {
		brewers: {},
		grinders: {},
		fetchedBrewerIds: [],
		fetchedGrinderIds: [],
	},
	reducers: {
		setBrewersNames: (state, action) => {
			state.brewers = action.payload.brewers;
		},
		setBrewerDetail: (state, action) => {
			state.brewers[action.payload.eid] = action.payload.brewerDetail;
			state.fetchedBrewerIds.push(action.payload.eid);
		},
		setGrindersNames: (state, action) => {
			state.grinders = action.payload.grinders;
		},
		setGrinderDetail: (state, action) => {
			state.grinders[action.payload.eid] = action.payload.grinderDetail;
			state.fetchedGrinderIds.push(action.payload.eid);
		},
	},
});

export const setBrewersNames = equipmentSlice.actions.setBrewersNames;
export const setBrewerDetail = equipmentSlice.actions.setBrewerDetail;
export const setGrindersNames = equipmentSlice.actions.setGrindersNames;
export const setGrinderDetail = equipmentSlice.actions.setGrinderDetail;

export default equipmentSlice.reducer;
