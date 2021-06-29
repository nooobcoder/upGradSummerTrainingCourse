import "./App.css";
import React, { Fragment } from "react";
import Header from "./Header.jsx";

function App() {
	return (
		<Fragment>
			<Header />
			<button>Add</button>
			<div>
				<span>Name</span>
				<br />
				<span>Phone</span>
			</div>
		</Fragment>
	);
}

export default App;
