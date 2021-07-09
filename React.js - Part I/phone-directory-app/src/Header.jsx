import React, { Component } from "react";
import "./Header.css";

/* class Header extends Component {
	render() {
		return <div className="header">{this.props.heading}</div>;
	}
} */

const Header = ({ heading }) => <div className="header">{heading}</div>;
export default Header;
