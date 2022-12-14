import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Blog } from "./views/blog";
import { Single } from "./views/single";
import { Singleplanet } from "./views/singleplanet";
import injectContext from "./store/appContext";

import { NavbarMenu } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<NavbarMenu />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/blog">
							<Blog />
						</Route>
						<Route path="/single/:theid">
							<Single />
						</Route>
						<Route path="/singleplanet/:theid">
							<Singleplanet />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
