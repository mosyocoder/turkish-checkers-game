import { createSlice } from "@reduxjs/toolkit";
import { board } from "./board";

export const gameSlice = createSlice({
	name: "game",
	initialState: {
		board: board,
		player: "white",
		white: 16,
		black: 16,
		selectedTile: "",
	},
	reducers: {
		selectTile: (state, action) => {
			if (action.payload.stoneColor === state.player) {
				state.selectedTile = action.payload;
				if (state.selectedTile.name[1] === "a") {
					console.log("a");
				} else if (state.selectedTile.name[1] === "h") {
					console.log("h");
				} else {
					console.log("other");
				}
			}
		},
	},
});

export const { selectTile } = gameSlice.actions;
export default gameSlice.reducer;
