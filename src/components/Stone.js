import React from "react";

function Stone({ prop }) {
	return <div className={`stone ${prop.stoneColor}`}></div>;
}

export default Stone;
