import React, { useState } from "react";
import { Link } from "react-router-dom";

const AddSubscriber = () => {
	const [phoneNumber, setPhoneNumber] = useState(null);
	const [name, setName] = useState(null);
	return (
		<div>
			<div className="container">
				<Link to="/">
					<button className="custom-btn">Back</button>
				</Link>
				<form
					className="subscriber-form"
					onSubmit={(e) => e.preventDefault()}
				>
					<label htmlFor="name" className="label-control">
						Name:
					</label>
					<br />
					<input
						id="name"
						type="text"
						className="input-control"
						name="name"
						onChange={(e) => setName(e.target.value)}
					/>
					<br />
					<br />
					<label htmlFor="phone" className="label-control">
						Phone:
					</label>
					<br />
					<input
						id="phone"
						type="text"
						className="input-control"
						name="phone"
						onChange={(e) => setPhoneNumber(e.target.value)}
					/>
					<br />
					<br />

					<div className="subscriber-info-container">
						<span className="subscriber-to-add-heading">
							Subscriber to be added:{" "}
						</span>
						<br />
						<span className="subscriber-info">Name: {name}</span>
						<br />
						<span className="subscriber-info">
							Phone: {phoneNumber}
						</span>
						<br />
					</div>

					<button className="custom-btn add-btn">Add</button>
				</form>
			</div>
		</div>
	);
};

export default AddSubscriber;
