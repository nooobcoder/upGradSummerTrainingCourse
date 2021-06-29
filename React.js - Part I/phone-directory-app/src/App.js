import "./App.css";
import React, { Fragment } from "react";
import Header from "./Header.jsx";

function App() {
	return (
		<Fragment>
			<Header />
			<div className="container">
				<button>Add</button>
				<div>
					<span>Name</span>
					<span>Phone</span>
				</div>
			</div>
		</Fragment>
	);
}

export default App;
