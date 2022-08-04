import { createSlice } from "@reduxjs/toolkit";

const beanSlice = createSlice({
	name: "beans",
	initialState: { 
        beans: {},
        fetchedIds: [],
     },
	reducers: {
		setBeansNames: (state, action) => {
			state.beans = action.payload.beans;
		},
        setBeanDetail: (state, action) => {
            state.beans[action.payload.bid] = action.payload.beanDetail;
            state.fetchedIds.push(action.payload.bid)
        }
	},
});

export const setBeansNames = beanSlice.actions.setBeansNames;
export const setBeanDetail = beanSlice.actions.setBeanDetail;

export default beanSlice.reducer;
