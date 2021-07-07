import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Modal from "react-modal";

import "../styles/Header.css";
import Logo from "../assets/logo.svg";

const Header = () => {
	const [showModal, setModalVisibility] = useState(false);
	console.log(showModal);
	return (
		<div className="app-header">
			<img src={Logo} alt="app-logo" className="app-logo" />
			<Button
				variant="contained"
				color="default"
				className="login-button"
				onClick={() => setModalVisibility((prevState) => !prevState)} // Toggling the modal visibility
			>
				Login
			</Button>
			{showModal && (
				<Modal isOpen={showModal} contentLabel="login">
					<p>This is the modal</p>
				</Modal>
			)}
		</div>
	);
};

export default Header;
