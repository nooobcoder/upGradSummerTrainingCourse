import React from "react";
import Button from "@material-ui/core/Button";

import "../styles/Header.css";
import Logo from "../assets/logo.svg";

const Header = () => {
	return (
		<div className="app-header">
			<img src={Logo} alt="app-logo" className="app-logo" />
			<Button variant="contained" color="default" className="login-button">
				Login
			</Button>
		</div>
	);
};

export default Header;
