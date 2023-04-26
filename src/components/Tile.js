import React from "react";
import Stone from "./Stone";
import { board } from "../redux/game/board";
import { useDispatch } from "react-redux";
import { selectTile } from "../redux/game/gameSlice";

function Tile({ prop }) {
	const dispatch = useDispatch();
	const handleClick = (tile) => {
		dispatch(selectTile(tile));
	};

	return (
		<div onClick={() => handleClick(prop)} className={`tile ${prop.className} ${prop.isMovable ? "movable" : ""}`}>
			{prop.isFull === true && <Stone prop={prop} />}
		</div>
	);
}

export default Tile;
