import React from "react";
import { useSelector } from "react-redux";
import { horizontalAxis, verticalAxis } from "../redux/game/board";
import Tile from "./Tile";

function Board() {
	const board = useSelector((state) => state.game.board);
	return (
		<>
			<div className="board">
				<div className="hAxis">
					{horizontalAxis.map((item, key) => (
						<div key={key}>{item}</div>
					))}
				</div>
				<div className="vAxis">
					{verticalAxis.map((item, key) => (
						<div key={key}>{item}</div>
					))}
				</div>

				<div className="tiles">
					{board.map((item) => (
						<Tile key={item.id} prop={item} />
					))}
				</div>
			</div>
		</>
	);
}

export default Board;
