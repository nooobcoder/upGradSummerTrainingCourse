import React from "react";
import "./styles/Header.css";

/* class Header extends Component {
	render() {
		return <div className="header">{this.props.heading}</div>;
	}
} */

const Header = ({ heading }) => <div className="header">{heading}</div>;
export default Header;
