import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
	name: "user",
	initialState: { uid : 6, name: "Leo" },
	reducers: {
	},
});

export default userSlice.reducer;
