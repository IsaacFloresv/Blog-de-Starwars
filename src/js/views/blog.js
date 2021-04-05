import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/blog.scss";
import { Card } from "react-bootstrap";

export const Blog = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.fetchPeople();
	}, []);

	return (
		<div className="container">
			<ul className="list-group">
				{store.character.map((item, index) => {
					return (
						<li
							key={index}
							className="list-group-item d-flex justify-content-between"
							style={{ background: item.background }}>
							<h3>Characters</h3>
							{/* <span>{JSON.stringify(store.peopleList)}</span> */}
							<ul>
								{store.peopleList.map((item, index) => {
									return <li key="index">{item.name}</li>;
								})}
							</ul>

							<Card style={{ width: "14rem" }}>
								<Link to={"/single/" + index}>
									<h5>{item.title}</h5>
								</Link>
							</Card>

							{// Conditional render example
							// Check to see if the background is orange, if so, display the message
							item.background === "orange" ? (
								<p style={{ color: item.initial }}>
									Check store/flux.js scroll to the actions to see the code
								</p>
							) : null}
							<button className="btn btn-success" onClick={() => actions.changeColor(index, "orange")}>
								Change Color
							</button>
						</li>
					);
				})}
			</ul>
			<br />
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};