import React, { Component } from "react";
import "../styles/component.css";
import { Link } from "react-router-dom";
import Instagram from "react-icons/lib/fa/instagram";
import Email from "react-icons/lib/io/email";
import Facebook from "react-icons/lib/fa/facebook-official";

class Header extends Component {
	render() {
		return (
			<div className="header whiteText">
				<p
					style={{
						marginTop: "7px",
						color: "lightgrey",
						fontSize: "16px"
					}}
				>
					604-818-4736
				</p>
				<a href="https://www.facebook.com/LynxLandscaping/">
					<Facebook className="icon" color="lightgrey" size="25px" />
				</a>
				<a href="https://www.instagram.com/lynxcontractingltd/">
					<Instagram className="icon" color="lightgrey" size="25px" />
				</a>
				<Link to="/contact">
					<Email
						className="icon email"
						color="lightgrey"
						size="30px"
					/>
				</Link>
			</div>
		);
	}
}

export default Header;
