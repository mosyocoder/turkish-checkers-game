import React from "react";
import { useSelector } from "react-redux";

function Stone({ prop }) {
	const { selectedTile } = useSelector((state) => state.game);
	return <div className={`stone ${prop.stoneColor} ${prop.id === selectedTile.id ? "selected" : ""}`}></div>;
}

export default Stone;
