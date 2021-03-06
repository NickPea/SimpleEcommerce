//

import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//pages
import LandingView from "../components/landing-view";
import StoreView from "../components/store-view";
import ItemView from "../components/item-view";
import CheckoutView from "../components/checkout-view";

//routes
const RouteSwitch = () => {
	return (
		<Switch>
			<Route exact path="/">
				<LandingView />
			</Route>
			<Route exact path="/store">
				<StoreView />
			</Route>
			<Route exact path="/checkout">
				<CheckoutView />
			</Route>
			<Route exact path="/item/:slug">
				<ItemView />
			</Route>
			<Route path="*">
				<h1>404: Bummer dude...</h1>
			</Route>
		</Switch>
	);
};

export default RouteSwitch;
