import React from "react";
import logo from "../../images/logo_2018-rgb.png";
import "./Head.css";

const Head = () => {

	return (
		<div className="row">
			<div className="col">
				<header className="header">
					<a href="/"><img src={logo} alt="carolyn mary stolze" className="logo" /></a>
				</header>
			</div>
		</div>

	);
}

export default Head