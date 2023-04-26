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
		movableTiles: [],
	},
	reducers: {
		selectTile: (state, action) => {
			if (action.payload.stoneColor === state.player) {
				state.board = state.board.map((tile) => {
					if (tile.isMovable === true) {
						tile.isMovable = false;
					}
					return tile;
				});
				state.selectedTile = action.payload;
				if (state.player === "white") {
					let rightTile, leftTile, nextTile;
					if (state.selectedTile.name[1] === "a") {
						state.movableTiles.push(state.board[Number(state.selectedTile.id) + 1].id);
						state.movableTiles.push(state.board[Number(state.selectedTile.id) + 8].id);
						// state.board = state.board.map((tile) => {
						// 	if ((tile.id === rightTile || tile.id === nextTile) && tile.isFull === false) {
						// 		tile.isMovable = true;
						// 	}
						// 	return tile;
						// });
					} else if (state.selectedTile.name[1] === "h") {
						state.movableTiles.push(state.board[Number(state.selectedTile.id) - 1].id);
						state.movableTiles.push(state.board[Number(state.selectedTile.id) + 8].id);
						// state.board = state.board.map((tile) => {
						// 	if ((tile.id === leftTile || tile.id === nextTile) && tile.isFull === false) {
						// 		tile.isMovable = true;
						// 	}
						// 	return tile;
						// });
					} else {
						state.movableTiles.push(state.board[Number(state.selectedTile.id) + 1].id);
						state.movableTiles.push(state.board[Number(state.selectedTile.id) - 1].id);
						state.movableTiles.push(state.board[Number(state.selectedTile.id) + 8].id);
						// state.board = state.board.map((tile) => {
						// 	if ((tile.id === rightTile || tile.id === leftTile || tile.id === nextTile) && tile.isFull === false) {
						// 		tile.isMovable = true;
						// 	}
						// 	return tile;
						// });
					}
					state.board = state.board.map((tile) => {
						for (let i = 0; i < state.movableTiles.length; i++) {
							if (tile.id === state.movableTiles[i] && tile.isFull === false) {
								tile.isMovable = true;
							}
						}
						return tile;
					});
				} else {
					if (state.selectedTile.name[1] === "a") {
						console.log(state.board[Number(state.selectedTile.id) - 8].isFull);
					} else if (state.selectedTile.name[1] === "h") {
						console.log(state.board[Number(state.selectedTile.id) - 8].isFull);
					} else {
						console.log(state.board[Number(state.selectedTile.id) - 8].isFull);
					}
				}
			}
		},
	},
});

export const { selectTile } = gameSlice.actions;
export default gameSlice.reducer;
