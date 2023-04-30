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
		breakableTiles: [],
	},
	reducers: {
		selectTile: (state, action) => {
			state.board = state.board.map((tile) => {
				if (tile.isMovable) tile.isMovable = false;
				return tile;
			});
			if (action.payload.stoneColor === state.player) {
				state.selectedTile = action.payload;
				let rightTile, leftTile, nextTile;
				if (state.player === "white") {
					if (state.selectedTile.name[1] === "a") {
						rightTile = state.board[Number(state.selectedTile.id) + 1].id;
						nextTile = state.board[Number(state.selectedTile.id) + 8].id;
					} else if (state.selectedTile.name[1] === "h") {
						leftTile = state.board[Number(state.selectedTile.id) - 1].id;
						nextTile = state.board[Number(state.selectedTile.id) + 8].id;
					} else {
						rightTile = state.board[Number(state.selectedTile.id) + 1].id;
						leftTile = state.board[Number(state.selectedTile.id) - 1].id;
						nextTile = state.board[Number(state.selectedTile.id) + 8].id;
					}
				} else {
					if (state.selectedTile.name[1] === "a") {
						rightTile = state.board[Number(state.selectedTile.id) + 1].id;
						nextTile = state.board[Number(state.selectedTile.id) - 8].id;
					} else if (state.selectedTile.name[1] === "h") {
						leftTile = state.board[Number(state.selectedTile.id) - 1].id;
						nextTile = state.board[Number(state.selectedTile.id) - 8].id;
					} else {
						rightTile = state.board[Number(state.selectedTile.id) + 1].id;
						leftTile = state.board[Number(state.selectedTile.id) - 1].id;
						nextTile = state.board[Number(state.selectedTile.id) - 8].id;
					}
				}
				let whiBla;
				state.player === "white" ? (whiBla = +1) : (whiBla = -1);
				state.board = state.board.map((tile) => {
					if ((tile.id === rightTile || tile.id === leftTile || tile.id === nextTile) && tile.isFull === false) {
						tile.isMovable = true;
					}
					if ((tile.id === rightTile || tile.id === leftTile || tile.id === nextTile) && tile.isFull && tile.stoneColor !== state.player) {
						let incDec = whiBla * 8;
						state.breakableTiles.push(tile.id);
						state.board[Number(tile.id) + incDec].isMovable = true;
					}
					return tile;
				});
			}
		},
		moveStone: (state, action) => {
			state.board = state.board.map((tile) => {
				if (tile.isMovable) tile.isMovable = false;
				if (tile.id === state.selectedTile.id) {
					tile.isFull = false;
				}
				if (tile.id === action.payload.id) {
					tile.isFull = true;
					tile.stoneColor = state.player;
					tile.isMovable = false;
				}
				return tile;
			});
			state.selectedTile = "";
			state.player === "white" ? (state.player = "black") : (state.player = "white");
		},
	},
});

export const { selectTile, moveStone } = gameSlice.actions;
export default gameSlice.reducer;
