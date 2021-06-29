import "./App.css";
import React, { Fragment } from "react";

function App() {
	return (
		<Fragment>
			{/* <div className="App">Phone Directory</div>
			<button>Add</button>
			<div>
				<span>Name</span>
				<br />
				<span>Phone</span>
			</div> */}

			<label htmlFor="name">Name</label>
			<input
				id="name"
				type="text"
				placeholder={"Type Here"}
				defaultValue="Ankur Paul"
			/>
		</Fragment>
	);
}

export default App;
