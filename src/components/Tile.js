import React from "react";
import Stone from "./Stone";
import { useDispatch, useSelector } from "react-redux";
import { moveStone, selectTile } from "../redux/game/gameSlice";

function Tile({ prop }) {
	const { player } = useSelector((state) => state.game);
	const dispatch = useDispatch();
	const handleClick = (tile) => {
		if (tile.isFull && tile.stoneColor === player) dispatch(selectTile(tile));
		if (!tile.isFull && tile.isMovable) dispatch(moveStone(tile));
	};

	return (
		<div onClick={() => handleClick(prop)} className={`tile ${prop.className} ${prop.isMovable === true ? "movable" : "adwa"}`}>
			{prop.isFull === true && <Stone prop={prop} />}
		</div>
	);
}

export default Tile;
