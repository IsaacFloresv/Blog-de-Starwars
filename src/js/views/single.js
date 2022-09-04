import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Container, Row, Col, Card } from "react-bootstrap";
import detailImg from "../../img/800x600.png";

export const Single = () => {
	const { store } = useContext(Context);
	const params = useParams();
	return (
		<>
			<Container className="singleContent">
				<Card>
					<img width={600} height={400} className="mr-3" src={detailImg} alt="Generic placeholder" />
					<Card.Body className="align-text-center">
						<h5>{store.peopleList[params.theid].name}</h5>
						<p>
							Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin
							commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce
							condimentum nunc ac nisi vulputate fringilla.
						</p>
					</Card.Body>
				</Card>
				<hr />
				<Row>
					<Col>
						<p>Height</p>
						<p>{store.peopleList[params.theid].height}</p>
					</Col>
					<Col>
						<p>Mass</p>
						<p>{store.peopleList[params.theid].mass}</p>
					</Col>
					<Col>
						<p>Hair color</p>
						<p>{store.peopleList[params.theid].hair_color}</p>
					</Col>
					<Col>
						<p>Skin Color</p>
						<p>{store.peopleList[params.theid].skin_color}</p>
					</Col>
					<Col>
						<p>Eye Color</p>
						<p>{store.peopleList[params.theid].eye_color}</p>
					</Col>
					<Col>
						<p>Birth year</p>
						<p>{store.peopleList[params.theid].birth_year}</p>
					</Col>
				</Row>
				<hr />

				<Link to="/blog" className="btn btn-success">
					THE BLOG
				</Link>
			</Container>
		</>
	);
};
