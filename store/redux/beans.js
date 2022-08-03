import { createSlice } from "@reduxjs/toolkit";

const beanSlice = createSlice({
	name: "recipes",
	initialState: { 
        beans: [],
        fetchedIds: [],
     },
	reducers: {
		setBeans: (state, action) => {
			state.beans = action.payload.beans;
		},
        setBeansDetail: (state, action) => {
            state.beans[action.payload.bid] = action.payload.beanDetail;
            state.fetchedIds.push(action.payload.bid)
        }
	},
});

export const setBeans = beanSlice.actions.setBeans;
export const setBeanDetail = beanSlice.actions.setBeanDetail;

export default beanSlice.reducer;
