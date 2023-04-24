import { useSelector } from "react-redux";
import "./App.css";
import Board from "./components/Board";

function App() {
	const { player, white, black } = useSelector((state) => state.game);
	return (
		<div className="container">
			<div className={`player ${player === "white" ? "selectedPlayer" : ""}`}>
				<h3>White</h3>
				<h1>{white}</h1>
			</div>
			<Board />
			<div className={`player ${player === "black" ? "selectedPlayer" : ""}`}>
				<h3>Black</h3>
				<h1>{black}</h1>
			</div>
		</div>
	);
}

export default App;
