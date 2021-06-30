import "./App.css";
import React, { Fragment } from "react";
import Header from "./components/Header.jsx";
import { Switch, Route, Link } from "react-router-dom";
import AddSubscriber from "./components/AddSubscriber";

function App() {
	const contacts = [
		{ id: 1, name: "Ankur Paul", phone: "8888888888" },
		{ id: 2, name: "Joseph Pristine", phone: "7777777777" },
	];

	const deleteHandler = (id) => document.getElementById(id).remove();

	return (
		<Fragment>
			<Header heading={"Phone Directory"} />
			<Switch>
				<Route path="/" exact>
					<div className="container">
						<Link to="/add-subscriber">
							<button>Add</button>
						</Link>
						<div className="grid-container heading-container">
							<span className="grid-item name-heading">
								<h2>Name</h2>
							</span>
							<span className="grid-item phone-heading">
								<h2>Phone</h2>
							</span>
						</div>
						{contacts.map(({ id, name, phone }) => (
							<div key={id} id={id} className="grid-container">
								<span className="grid-item">{name}</span>
								<span className="grid-item">{phone}</span>
								<button
									className="delete-contact"
									onClick={(e) => deleteHandler(id)}
								>
									Delete
								</button>
							</div>
						))}
					</div>
				</Route>
				<Route path="/add-subscriber">
					<AddSubscriber />
				</Route>
			</Switch>
		</Fragment>
	);
}

export default App;
