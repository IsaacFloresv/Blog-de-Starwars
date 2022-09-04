import React from "react";
import starwars_logo from "../../img/death.png";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => (
	<div className="text-center mt-5">
		<p>
			<img src={starwars_logo} />
		</p>
		<Link to="/blog" className="btn btn-success mt-5">
			The Start Wars Blog
		</Link>
	</div>
);
