import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
	name: "user",
	initialState: { uid : 6, username: "Bot" },
	reducers: {
	},
});

export default userSlice.reducer;
